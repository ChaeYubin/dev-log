import Giscus from "@/components/Giscus";
import PostBody from "@/containers/posts/PostBody";
import PostHeader from "@/containers/posts/PostHeader";
import { getPostDetail, getPostFileNameList } from "@/utils/post";

export async function generateStaticParams() {
  return getPostFileNameList();
}

interface Props {
  postTitle: string;
}

const PostDetailPage = async ({ params }: { params: Promise<Props> }) => {
  const title = (await params).postTitle;
  const post = getPostDetail(title);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-500">
      <PostHeader post={post} />
      <PostBody post={post} />
      <Giscus />
    </div>
  );
};

export default PostDetailPage;
