import PostItem from "@/containers/posts/PostItem";
import { getPostListByTag } from "@/utils/post";

interface Props {
  params: { tag: string };
}

const TagPage = ({ params }: Props) => {
  const decodedTag = decodeURIComponent(params.tag);
  const postList = getPostListByTag(decodedTag);

  const capitalize = (word: string) => {
    if (!word) return "";
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(word.charAt(0));
    return isKorean ? word : word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="divide-y divide-gray-200">
      <div className="py-8">
        <h2 className="text-5xl font-extrabold">{capitalize(decodedTag)}</h2>
      </div>
      <section className="pt-8">
        {postList.length > 0 ? (
          <ul>
            {postList.map((post) => (
              <li key={post.title} className="mb-10">
                <PostItem post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">해당 태그에 대한 게시물이 없습니다.</p>
        )}
      </section>
    </div>
  );
};

export default TagPage;
