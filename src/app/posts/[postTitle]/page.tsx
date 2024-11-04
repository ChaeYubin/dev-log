import { getPostDetail } from "@/utils/post";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  postTitle: string;
}

const PostDetailPage = async ({ params }: { params: Promise<Props> }) => {
  const title = (await params).postTitle;
  const post = getPostDetail(title);

  console.log(post);

  return (
    <div>
      <MDXRemote source={post.content} />
    </div>
  );
};

export default PostDetailPage;
