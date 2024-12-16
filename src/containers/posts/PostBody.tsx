import { MDXRemote } from "next-mdx-remote/rsc";
import remarkBreaks from "remark-breaks";

import { MdxComponents } from "@/containers/mdx/MdxComponents";

const PostBody = ({ post }: { post: any }) => {
  return (
    <MDXRemote
      source={post.content}
      components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkBreaks],
        },
      }}
    />
  );
};

export default PostBody;
