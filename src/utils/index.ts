export const slugify = (text: string): string =>
  text.replace(/[^a-zA-Z0-9가-힣]+/g, "-").replace(/(^-|-$)/g, "");
