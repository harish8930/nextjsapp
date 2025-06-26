import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default layout;
