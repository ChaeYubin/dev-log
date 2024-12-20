import PostBody from "@/containers/posts/PostBody";
import PostHeader from "@/containers/posts/PostHeader";
import { getPostDetail } from "@/utils/post";

interface Props {
  postTitle: string;
}

const PostDetailPage = async ({ params }: { params: Promise<Props> }) => {
  const title = (await params).postTitle;
  const post = getPostDetail(title);

  return (
    <div>
      <PostHeader post={post} />
      <PostBody post={post} />
    </div>
  );
};

export default PostDetailPage;
