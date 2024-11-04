import { getPostList } from "@/utils/post";
import Link from "next/link";

const AllPostPage = () => {
  const postList = getPostList();

  return (
    <div>
      <section>
        <ul>
          {postList.map((post) => (
            <li key={post.title}>
              <Link href={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AllPostPage;
