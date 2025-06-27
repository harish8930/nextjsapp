import React from "react";

const blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Loading Intentionally");
    }, 2000);
  });
  return <div>blog</div>;
};

export default blog;
