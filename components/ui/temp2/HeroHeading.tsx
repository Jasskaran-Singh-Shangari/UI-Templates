import BasicButton from "./BasicButton"

const HeroHeading = () => {

  return (
    <div
    className="absolute left-0 top-1/3 p-10 flex flex-col justify-center w-full text-left">
        <span 
        style={{
            fontFamily: "Montserrat"
        }}
        className="text-6xl font-semibold"> Turn ideas into momentum. </span>
        <span 
        style={{
            fontFamily: "Montserrat"
        }}
        className="text-xl text-neutral-500 w-[40%]"> 
            Zyro is a simple, powerful workspace designed to keep your goals at the center.
            {/* Plan with clarity, track progress effortlessly, and stay aligned with what truly matters.  */}
            <BasicButton text="Get Started" />
        </span>
    </div>
  )
}

export default HeroHeading
