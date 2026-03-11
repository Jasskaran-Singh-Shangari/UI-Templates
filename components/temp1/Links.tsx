import Link from "next/link"
import Logo from "../ui/temp1/Logo"
import { Github, Linkedin, Twitter } from "lucide-react"


const PageLinks=[
  {
    text: "Features",
    href:"#Features"
  },
  {
    text: "Testimonials",
    href:"#Testimonials"
  },
  {
    text: "Pricing",
    href:"#Pricing"
  },
  {
    text: "Blogs",
    href:"/temp1/blogs"
  }
]

const Links = () => {
  return (
    <div className="w-[50%] flex flex-col items-center justify-center">
      <Logo className="text-neutral-600" />
      <div className="flex items-center justify-center text-neutral-600">
        {PageLinks.map((links, idx)=>(
            <Link 
            className="m-5"
            key={idx} 
            href={`${links.href}`}> 
                {links.text} 
            </Link>
        ))}
      </div>
      <span className="text-neutral-600 mt-10 text-sm">
            © 2026 Foxtrot Marketing Template. All rights reserved.
      </span> 
      <div className="flex items-center justify-center gap-5 p-3 text-neutral-600">
        <Linkedin className="hover:text-cyan-700" size={20}  />
        <Twitter className="hover:text-cyan-700" size={20} />
        <Github className="hover:text-cyan-700" size={20} />
      </div>

    </div>
  )
}

export default Links
