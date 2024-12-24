import { CalendarDays, Clock3 } from "lucide-react";
import readingTime from "reading-time";

import { Post } from "./types";
import { getPostViews } from "@/lib/db";
import PostViews from "@/components/PostViews";

const PostHeader = async ({ post }: { post: Post }) => {
  const rt = readingTime(post.content);
  const views = await getPostViews(post.title);

  return (
    <header className="pt-2 pb-8">
      <h1 className="mb-3 text-5xl font-extrabold leading-post-title">
        {post.title}
      </h1>
      <div className="flex pt-3 space-x-2 text-sm text-gray-500 dark:text-gray-300">
        <div className="flex items-center space-x-1">
          <CalendarDays className="w-3.5" />
          <span>{post.dateString}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock3 className="w-3.5" />
          <span>{rt.minutes.toFixed(0)}분</span>
        </div>
        <PostViews title={post.title} views={views} />
      </div>
    </header>
  );
};

export default PostHeader;
