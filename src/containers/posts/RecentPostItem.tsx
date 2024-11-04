import Link from "next/link";

interface Post {
  dateString: string;
  content: string;
  url: string;
  year: string;
  month: string;
  title: string;
  desc: string;
}

const RecentPostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <p className="text-gray-500">{post.dateString}</p>
      <h3 className="text-2xl py-1">{post.title}</h3>
      {/* TODO - 태그 삽입 */}
      <ul className="flex space-x-2 text-sm">
        <li>태그1</li>
        <li>태그2</li>
      </ul>
      <p className="text-gray-500 pt-3 pb-6">{post.desc}</p>
      <Link href={post.url}>
        <span className="mt-3">Read More →</span>
      </Link>
    </>
  );
};

export default RecentPostItem;
