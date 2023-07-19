"use client"

import Link from "next/link";

import { PostMetadata } from "@/types/PostMetadata";


const Infomation = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white hover:bg-slate-100"
    >
      <div className="flex justify-between">
        <p className="text-sm text-slate-400">{props.date}</p>
      </div>

      <Link
        href={`/posts/${props.slug}`}
        className="cursor-pointer"
      >
        <h2 className="text-blue-600 hover:underline mb-4">{props.title}</h2>
      </Link>

      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
}

export default Infomation