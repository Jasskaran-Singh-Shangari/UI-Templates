import Link from "next/link";

interface PrimaryButtonProps{
  text: string;
  className?:string;
  href?: string
}

const PrimaryButton = ({ text, href="/", className }: PrimaryButtonProps) => {
  return (
    <Link href={href} className={`text-white`}>
      <button className={`px-4 py-2 bg-neutral-800 hover:bg-neutral-800/50 cursor-pointer rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ${className}`}>
        {text}
      </button>
    </Link>
  )
}

export default PrimaryButton
