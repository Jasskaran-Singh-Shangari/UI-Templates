import BlogCard from "@/components/ui/temp1/BlogCard";
import SecondaryHeading from "@/components/ui/temp1/SecondaryHeading";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: "100px 100px"
      }} 
      className="min-h-screen w-full bg-neutral-100 p-10">
        {/* HEADING */}
        <div className="w-full text-center">
            <SecondaryHeading className="text-neutral-700" heading="Knowledge Center at ProtonX" subHeading="Latest articles on web development and how a website can help you 10x your revenue." />
        </div>
        {/* BLOG CARDS */}
        <div className="flex items-center justify-center flex-wrap">
        <BlogCard href="/temp1/blogs/1" />
        <BlogCard href="/temp1/blogs/2" />
        <BlogCard href="/temp1/blogs/3" />
        <BlogCard href="/temp1/blogs/4" />
        <BlogCard href="/temp1/blogs/5" />
        </div>

        </div>
    );
}