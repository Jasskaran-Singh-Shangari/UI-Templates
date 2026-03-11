
interface IconButtonProps{
    text: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className?: string
} 

const IconButton = ({text, icon: Icon, className}: IconButtonProps) => {
  return (
    <div className={className}>
        <button className="w-full p-3 rounded-xl bg-neutral-100 text-neutral-800 cursor-pointer hover:bg-neutral-200">
          <div className="flex items-center justify-center gap-2">
              {Icon && <Icon className="w-5 h-5" />}
              <span>{text}</span>
          </div>
        </button>
    </div>
  )
}

export default IconButton;
