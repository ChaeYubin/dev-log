import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getPostViews(title: string): Promise<number> {
  noStore();
  try {
    const result = await sql`
      SELECT views 
      FROM post_views 
      WHERE title = ${title}
    `;

    return result.rows[0]?.views || 0;
  } catch (error) {
    console.error("Error fetching post views:", error);
    return 0;
  }
}

export async function incrementPostViews(title: string): Promise<void> {
  noStore();
  try {
    await sql`
      INSERT INTO post_views (title, views)
      VALUES (${title}, 1)
      ON CONFLICT (title)
      DO UPDATE SET views = post_views.views + 1
    `;
  } catch (error) {
    console.error("Error incrementing post views:", error);
  }
}
