import PostItem from "@/containers/posts/PostItem";
import { getPostList } from "@/utils/post";

const AllPostPage = () => {
  const postList = getPostList();

  return (
    <>
      <div className="py-8">
        <h2 className="text-5xl font-extrabold">All Posts</h2>
      </div>
      <section>
        <ul>
          {postList.map((post) => (
            <li key={post.title} className="mb-10">
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AllPostPage;
