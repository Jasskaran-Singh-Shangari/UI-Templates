import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps{
    href?: string
}

const BlogCard = ({href="/"}: BlogCardProps) => {
  return (
    <Link href={href} className="w-[30%] flex flex-col items-center justify-center p-5 rounded-2xl gap-3">
        <Image src="/images/dashboard.webp" alt="image" width={400} height={300} className="rounded-2xl object" />
        <div className="w-full text-center">
            <h2
                style={{
                    fontFamily: "Jost"
                }}
                className="text-neutral-700 text-2xl">What is a website template?</h2>
            <p className="text-neutral-500">A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writ...</p>
        </div>
    </Link>
  )
}

export default BlogCard;
