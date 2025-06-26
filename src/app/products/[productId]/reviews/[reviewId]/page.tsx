import React from "react";
import notFound from "@/app/not-found";

const Productreview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
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
