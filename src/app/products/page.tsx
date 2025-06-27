import React from "react";
import Link from "next/link";

const products = () => {
  const id = 100;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>
        <Link href="/products/1">product1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Product2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>
          Product3
        </Link>
      </h1>
      <h1>
        <Link href={`/products/${id}`}>Product{id}</Link>
      </h1>
    </div>
  );
};

export default products;
