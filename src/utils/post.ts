import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import { sync } from "glob";
import { BASE_PATH, POSTS_PATH } from "@/constants/post";

// 모든 포스트 목록 조회
export const getPostList = () => {
  const paths = getPostPaths();
  const posts = paths.map((postPath) => parsePost(postPath));

  return posts;
};

// 포스트 상세 조회
export const getPostDetail = async (postTitle: string) => {
  const postPath = getPostPath(postTitle);
  const post = parsePost(postPath);

  return post;
};

// 모든 MDX 파일 조회
const getPostPaths = () => {
  const paths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return paths;
};

// MDX 파일 조회
const getPostPath = (postTitle: string) => {
  const path = sync(`${POSTS_PATH}/**/${postTitle}.mdx`)[0];
  return path;
};

// MDX Abstract + Detail
const parsePost = (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = parsePostDetail(postPath);

  return { ...postAbstract, ...postDetail };
};

// MDX Abstract
const parsePostAbstract = (postPath: string) => {
  const filePath =
    path.sep === "\\"
      ? postPath
          .replaceAll("\\", "/")
          .replace(`${BASE_PATH}/`, "")
          .replace(".mdx", "")
      : postPath
          .slice(postPath.indexOf(BASE_PATH))
          .replace(`${BASE_PATH}/`, "")
          .replace(".mdx", "");

  const [year, month, title] = filePath.split("/");

  const url = `/posts/${title}`;

  return { url, year, month, title };
};

// MDX Detail
const parsePostDetail = (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data;
  const dateString = dayjs(grayMatter.date).locale("ko").format("YYYY-MM-DD");

  return { ...grayMatter, dateString, content };
};
