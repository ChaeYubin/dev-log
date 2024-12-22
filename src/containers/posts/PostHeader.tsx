import { CalendarDays, Clock3, Eye } from "lucide-react";

import { Post } from "./types";

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="pt-2 pb-8">
      <h1 className="mb-3 text-5xl font-extrabold">{post.title}</h1>
      <div className="flex pt-3 space-x-2 text-sm text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-1">
          <CalendarDays className="w-3.5" />
          <span>{post.dateString}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock3 className="w-3.5" />
          <span>3분</span>
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="w-3.5" />
          <span>1,034</span>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
