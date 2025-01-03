import Link from "next/link";

import { Post } from "./types";
import TagList from "@/components/TagList";

const RecentPostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-300">{post.dateString}</p>
      <h3 className="text-2xl font-bold">{post.title}</h3>
      {post.tags && post.tags.length > 0 && <TagList post={post} />}
      <p className="text-gray-500 dark:text-gray-300 py-5">{post.desc}</p>
      <Link href={post.url}>
        <span className="text-primary">Read More →</span>
      </Link>
    </>
  );
};

export default RecentPostItem;
