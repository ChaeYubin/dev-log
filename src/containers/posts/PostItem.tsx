import Link from "next/link";
import { Post } from "./types";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <p className="text-gray-500">{post.dateString}</p>
      <Link href={post.url}>
        <h3 className="text-2xl py-1">{post.title}</h3>
      </Link>
      {post.tags && post.tags.length > 0 && (
        <ul className="flex space-x-2 text-sm pb-3">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
      <p className="text-gray-500">{post.desc}</p>
    </>
  );
};

export default PostItem;
