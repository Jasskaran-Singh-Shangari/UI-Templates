interface BasicButtonProps{
    text: string;
    className?: string
}
const BasicButton = ({text}: BasicButtonProps) => {
  return (
    <div
    style={{
        fontFamily: "Montserrat"
    }} 
    className={`border border-neutral-600 p-5 rounded-xl w-[40%] my-5 cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative group overflow-hidden active:scale-96`}>
        <span
        className="absolute inset-0 bg-green-400 origin-right duration-300 ease-out group-hover:scale-x-100 scale-x-0"
         />
        <span className="text-neutral-700 relative z-10 group-hover:text-white transition-colors duration-300">
            {text} 
        </span>
    </div>
  )
}

export default BasicButton
