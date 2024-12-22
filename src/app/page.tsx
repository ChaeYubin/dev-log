import RecentPostItem from "@/containers/posts/RecentPostItem";
import { getLatestPostList } from "@/utils/post";
import Link from "next/link";

const MainPage = () => {
  const postList = getLatestPostList();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-500">
      <div className="pt-2 pb-8">
        <h2 className="text-5xl font-extrabold">Latest</h2>
        <p className="text-gray-500 dark:text-gray-300 pt-1">
          프론트엔드 개발자 채유빈의 블로그입니다.
        </p>
      </div>
      <section>
        <ul className="divide-y divide-gray-200 dark:divide-gray-500">
          {postList.map((post) => (
            <li key={post.title} className="mb-10 pt-10">
              <RecentPostItem post={post} />
            </li>
          ))}
        </ul>
        <div className="float-right pb-10">
          <Link href="/posts">All Posts →</Link>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
