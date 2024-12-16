import Link from "next/link";
import React from "react";
import { Post } from "./types";
import { CalendarDays, Clock3 } from "lucide-react";

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="mt-2 text-center">
      <h1 className="mb-5 text-4xl">{post.title}</h1>
      {post.tags && post.tags.length > 0 && (
        <ul className="flex justify-center text-sm pb-3 space-x-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <CalendarDays className="w-3.5" />
          <span>{post.dateString}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock3 className="w-3.5" />
          <span>3분</span>
        </div>
      </div>
      <hr className="mt-5 mb-10" />
    </header>
  );
};

export default PostHeader;
