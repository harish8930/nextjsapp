"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Errorboundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <div>{error.message}</div>
      <button className="bg-blue-500 p-5 rounded-2xl" onClick={reload}>
        Try Again
      </button>
    </>
  );
};

export default Errorboundary;
