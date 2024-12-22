import { Post } from "@/containers/posts/types";
import Link from "next/link";

interface Props {
  post: Post;
  isCenter?: boolean;
}

const TagList = ({ post, isCenter = false }: Props) => {
  return (
    <ul
      className={`flex space-x-3 text-sm ${isCenter ? "justify-center" : ""}`}
    >
      {post.tags.map((tag) => (
        <li key={tag} className="font-semibold text-primary">
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
