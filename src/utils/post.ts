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

// 모든 포스트 파일명 조회
export const getPostFileNameList = () => {
  const paths = getPostPaths();
  const filePaths = paths.map((postPath) => getFilePath(postPath));

  return filePaths.map((filePath) =>
    filePath.split("/").slice(-1)[0].replace(".mdx", "")
  );
};

// 최근 포스트 3개 조회
export const getLatestPostList = () => {
  const posts = getPostList();
  const sortedPosts = posts.sort((a, b) =>
    dayjs(b.dateString).isBefore(dayjs(a.dateString)) ? -1 : 1
  );

  const latestPosts = sortedPosts.slice(0, 3);

  return latestPosts;
};

// 모든 태그 조회
export const getTags = () => {
  const posts = getPostList();
  const tags = new Map<string, number>();

  posts.map((post) =>
    post.tags?.map((tag: string) => tags.set(tag, (tags.get(tag) || 0) + 1))
  );

  return tags;
};

// 태그별 포스트 조회
export const getPostListByTag = (tag: string) => {
  const posts = getPostList();

  const filteredPosts = posts.filter((post) => post.tags?.includes(tag));

  return filteredPosts;
};

// 포스트 상세 조회
export const getPostDetail = (postTitle: string) => {
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

const getFilePath = (postPath: string) => {
  return path.sep === "\\"
    ? postPath
        .replaceAll("\\", "/")
        .replace(`${BASE_PATH}/`, "")
        .replace(".mdx", "")
    : postPath
        .slice(postPath.indexOf(BASE_PATH))
        .replace(`${BASE_PATH}/`, "")
        .replace(".mdx", "");
};

// MDX Abstract
const parsePostAbstract = (postPath: string) => {
  const filePath = getFilePath(postPath);
  const [year, month, title] = filePath.split("/");

  const url = `/posts/${title}`;

  return { url, year, month, title };
};

// MDX Detail
const parsePostDetail = (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data;
  const desc = grayMatter.desc;
  const dateString = dayjs(grayMatter.date).locale("ko").format("YYYY-MM-DD");
  const tags = grayMatter.tags;

  return { ...grayMatter, dateString, content, desc, tags };
};
