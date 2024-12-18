import { getTags } from "@/utils/post";
import Link from "next/link";

const IndexPage = () => {
  const tags = getTags();
  const tagsObj = Object.fromEntries(tags.entries());

  return (
    <div className="flex items-center divide-x divide-gray-200 space-x-5 mt-20 px-12">
      <div className="text-5xl font-extrabold flex-none">Tags</div>
      <ul className="inline-flex flex-wrap pl-5">
        {Object.entries(tagsObj).map(([tag, count]) => (
          <li key={tag} className="py-1 pr-3 items-center">
            <Link href={`/tags/${tag}`}>{tag}</Link>({count})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
