import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World !</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read In English</Link>
      <Link href="/articles/breaking-news-123?lang=hi">Read in Hindi</Link>
    </div>
  );
}
