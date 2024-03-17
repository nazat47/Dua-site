"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/dua/category?cat=1`);
  }, []);
  return null
};

export default page;
