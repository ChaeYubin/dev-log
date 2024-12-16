import Link from "next/link";
import { Post } from "./types";

const RecentPostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <p className="text-gray-500">{post.dateString}</p>
      <h3 className="text-2xl py-1">{post.title}</h3>
      {post.tags && post.tags.length > 0 && (
        <ul className="flex space-x-2 text-sm pb-3">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
      <p className="text-gray-500 pb-6">{post.desc}</p>
      <Link href={post.url}>
        <span className="mt-3">Read More →</span>
      </Link>
    </>
  );
};

export default RecentPostItem;
