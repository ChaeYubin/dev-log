import React from "react";
import { Post } from "./types";
import { CalendarDays, Clock3 } from "lucide-react";
import TagList from "@/components/TagList";

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="mt-2 text-center">
      <h1 className="mb-3 text-4xl font-bold">{post.title}</h1>
      {post.tags && post.tags.length > 0 && (
        <TagList post={post} isCenter={true} />
      )}
      <div className="flex justify-center pt-3 space-x-2 text-sm text-gray-500 dark:text-gray-400">
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
