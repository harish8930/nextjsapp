"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("your Order is placed");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        className="bg-sky-500 p-5 rounded-2xl cursor-pointer"
        onClick={handleClick}
      >
        Place order
      </button>
    </>
  );
};

export default OrderProduct;
