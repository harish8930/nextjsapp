"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLink = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  console.log(pathname, "HELLO");
  return (
    <div>
      <div>
        <input
          className="border-blue-500 bg-amber-300 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLink.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href === "/");
        return (
          <h1 key={link.name}>
            <Link
              href={`${link.href}`}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          </h1>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
