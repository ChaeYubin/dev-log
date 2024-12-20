import { MDXRemote } from "next-mdx-remote/rsc";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
// @ts-expect-error no types
import a11yEmoji from "@fec/remark-a11y-emoji";

import { MdxComponents } from "@/containers/mdx/MdxComponents";
import { Post } from "./types";

const PostBody = ({ post }: { post: Post }) => {
  return (
    <div className="prose min-w-full">
      <MDXRemote
        source={post.content}
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks, remarkGfm, a11yEmoji],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "github-light",
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
};

export default PostBody;
