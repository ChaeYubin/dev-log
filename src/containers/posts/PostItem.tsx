import Link from "next/link";

import { Post } from "./types";
import TagList from "@/components/TagList";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-300">{post.dateString}</p>
      <Link href={post.url} className="no-hover">
        <h3 className="text-2xl py-1 font-semibold">{post.title}</h3>
      </Link>
      {post.tags && post.tags.length > 0 && <TagList post={post} />}
      <p className="text-gray-500 dark:text-gray-300 pt-3">{post.desc}</p>
    </>
  );
};

export default PostItem;
