import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        informative: {
          DEFAULT: "var(--informative)",
          foreground: "var(--informative-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "h2, h3, h4": {
              scrollMarginTop: "5rem",
            },
            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: "var(--shiki-light)",
              backgroundColor: "var(--shiki-light-bg)",
              border: "1px solid #e5e7eb",
            },
            "pre > code": {
              display: "grid",
            },
            "pre > code > span": {
              paddingLeft: "1.1rem",
              paddingRight: "1rem",
            },
            "[data-highlighted-line]": {
              backgroundColor: "rgba(253, 224, 71, 0.2)",
            },
            "[data-line-numbers]": {
              counterReset: "line",
            },
            "[data-line-numbers] > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: "0.75rem",
              marginRight: "1.25rem",
              textAlign: "right",
              color: "gray",
            },
            // inline code
            ":not(pre) > code::before": {
              display: "none",
            },
            ":not(pre) > code::after": {
              display: "none",
            },
            ":not(pre) > code": {
              fontWeight: "inherit",
              position: "relative",
              bottom: 1,
              margin: "0 3px",
              color: "#eb5757",
              backgroundColor: "rgba(135,131,120,0.15)",
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: "0.2em 0.4em",
              overflowWrap: "break-word",
            },
            // code block title
            "[data-rehype-pretty-code-title]": {
              paddingLeft: "1.25rem",
              paddingRight: "1.25rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              backgroundColor: "var(--muted-bg)",
              color: "var(--muted-foreground)",
              fontWeight: "700",
              border: "1px solid #e5e7eb",
              borderBottom: "0",
              borderRadius: "0.375rem 0.375rem 0 0",
            },
            "[data-rehype-pretty-code-title] + pre": {
              marginTop: 0,
              borderRadius: "0 0 0.375rem 0.375rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
