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
    <div className="prose dark:prose-invert min-w-full pt-8 pb-16">
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
                  theme: { light: "github-light", dark: "github-dark-dimmed" },
                  keepBackground: true,
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
