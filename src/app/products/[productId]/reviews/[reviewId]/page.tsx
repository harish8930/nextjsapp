import React from "react";
import notFound from "@/app/not-found";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const Productreview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const random = getRandomInt(2);
  console.log(random, "RANDOM");
  if (random === 1) {
    throw new Error("Error loading Review");
  }
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 100) {
    return notFound();
  }

  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
};

export default Productreview;
