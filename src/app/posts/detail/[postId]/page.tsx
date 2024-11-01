export default function PostDetailPage({
  params,
}: {
  params: { postId: number };
}) {
  return <div>{params.postId}</div>;
}
