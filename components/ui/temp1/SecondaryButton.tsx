import Link from "next/link"

interface SecondaryButtonProps{
    text: string;
    href?: string
}

const SecondaryButton = ({text, href="/"} : SecondaryButtonProps) => {
  return (
    <Link href={href} className="">
      <button className="px-4 py-2 bg-neutral-300 hover:bg-white/70 cursor-pointer rounded-full text-neutral-800 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
        {text}
      </button>
    </Link>
  )
}

export default SecondaryButton
