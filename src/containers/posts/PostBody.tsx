import { MDXRemote } from "next-mdx-remote/rsc";
import remarkBreaks from "remark-breaks";

import { MdxComponents } from "@/containers/mdx/MdxComponents";
import { Post } from "./types";

const PostBody = ({ post }: { post: Post }) => {
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
