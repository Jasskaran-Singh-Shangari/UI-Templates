import PrimaryButton from "../ui/temp1/PrimaryButton"


const Banner = () => {
  return (
    <div className="w-[70%] h-52 bg-neutral-800 p-10 rounded-2xl text-center">
    <div className="mb-5">
        <h1 className="font-bold text-3xl" style={{
            fontFamily: "Jost"
        }}>So What are you waiting for?</h1>
        <h2 className="text-lg" style={{
            fontFamily: "Jost"
        }}>We are here to help you with your business. Get in touch with us and we will get back to you as soon as possible.</h2>
      </div>
      <PrimaryButton className="border-2 border-neutral-500" text="Contact Us" />
    </div>
  )
}

export default Banner
