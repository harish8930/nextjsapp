import React from "react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return <h1>{productId}</h1>;
};
export default ProductDetails;
