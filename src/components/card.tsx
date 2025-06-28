import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  const cardStyle: React.CSSProperties = {
    padding: "24px",
    margin: "16px",
    backgroundColor: "#1e1e1e", // Dark gray card to contrast black background
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.05)", // Light shadow for subtle depth
    maxWidth: "600px",
    width: "100%",
    boxSizing: "border-box",
    color: "#f1f1f1", // Light text color for readability
    border: "1px solid #333", // Slight border to define edges
  };

  return <div style={cardStyle}>{children}</div>;
};
