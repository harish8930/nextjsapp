"use client";
import React from "react";
import Link from "next/link";
import { use } from "react";

const NewsArticle = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "hi" }>;
}) => {
  const { articleid } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News Article {articleid}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={`/articles/${articleid}?lang=en`}>English</Link>
        <Link href={`/articles/${articleid}?lang=hi`}>Hindi</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
