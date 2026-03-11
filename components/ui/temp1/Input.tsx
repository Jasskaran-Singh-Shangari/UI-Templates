
interface InputProps{
    placeholder: string;
    value?: string;
    className?: string
}

const Input = ({placeholder, value, className}: InputProps) => {
  return (
    <div className={className}>
      <input className="w-full p-2 rounded-xl text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] focus:ring-2 outline-none focus:ring-cyan-600" type="text" placeholder={placeholder} value={value} />
    </div>
  )
}

export default Input
