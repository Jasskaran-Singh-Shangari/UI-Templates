
interface FeatureHeadingProps{
    heading?: string;
    subText?: string
}

const FeatureHeading = ({heading, subText}: FeatureHeadingProps) => {
  return (
    <div
    style={{
        fontFamily: "Montserrat"
    }} 
    className="flex-1 flex flex-col p-10">
      <span className="text-5xl font-semibold w-full">
        {heading}
      </span>
      <span className="text-neutral-600 text-xl w-[70%]">
        {subText}
      </span>
    </div>
  )
}

export default FeatureHeading
