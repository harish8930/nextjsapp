import Link from "next/link";

export default function f1() {
  return (
    <>
      <h1>F1 Page</h1>
      <Link href="/f1/f2">F2</Link>
      <Link href="/f3">F3</Link>
    </>
  );
}
