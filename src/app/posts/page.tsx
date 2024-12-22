import PostItem from "@/containers/posts/PostItem";
import { getPostList } from "@/utils/post";

const AllPostPage = () => {
  const postList = getPostList();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-500">
      <div className="pt-2 pb-8">
        <h2 className="text-5xl font-extrabold">
          All Posts ({postList.length})
        </h2>
      </div>
      <section className="pt-8">
        <ul>
          {postList.map((post) => (
            <li key={post.title} className="mb-10">
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AllPostPage;
