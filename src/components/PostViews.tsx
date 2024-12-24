"use client";

import { Eye } from "lucide-react";
import { useEffect } from "react";

interface Props {
  title: string;
  views: number;
}

const PostViews = ({ title, views }: Props) => {
  useEffect(() => {
    // 페이지 로드 시 조회수 증가
    fetch(`/api`, {
      method: "POST",
      body: JSON.stringify({ title: decodeURIComponent(title) }),
    });
  }, [title]);

  return (
    <div className="flex items-center space-x-1">
      <Eye className="w-3.5" />
      <span>{views.toLocaleString()}</span>
    </div>
  );
};

export default PostViews;
