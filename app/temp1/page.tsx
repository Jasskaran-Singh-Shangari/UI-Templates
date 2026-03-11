import AuroraBg from "@/components/temp1/AuroraBg"
import Banner from "@/components/temp1/Banner"
import Header from "@/components/temp1/Header"
import Links from "@/components/temp1/Links"
import SubscriptionCardGrid from "@/components/temp1/SubscriptionCardGrid"
import TestimonyGrid from "@/components/temp1/TestimonyGrid"
import PricingSlider from "@/components/ui/temp1/PricingSlider"
import PrimaryButton from "@/components/ui/temp1/PrimaryButton"
import PrimaryHeading from "@/components/ui/temp1/PrimaryHeading"
import RotatingScreen from "@/components/ui/temp1/RotatingScreen"
import SecondaryButton from "@/components/ui/temp1/SecondaryButton"
import SecondaryHeading from "@/components/ui/temp1/SecondaryHeading"


// ACETERNITY-UI-TEMPLATE
const page = () => {
  return (
      <div
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
        backgroundSize: "100px 100px"
      }} 
      className="min-h-screen w-full bg-neutral-100">
        <Header />
        {/* HERO SECTION */}
        <div className="flex flex-col items-center justify-center 
        min-h-[80vh]">
          <PrimaryHeading heading="Revolutionize your buisness with out powerful SaaS tool" subHeading="ProtonX is a simple and powerful SaaS tool that helps you to track your business analytics and improve your numbers. Just kidding, it's just a template." />
          <div className="flex items-center justify-center gap-5 mt-5">
            <PrimaryButton text="Try it for free" />
            <SecondaryButton text="Documentation" />
          </div>
        </div>
        {/* SHOWCASE */}
        <div className="h-[40vh] overflow-hidden">
          <RotatingScreen />
        </div>
        {/* FEATURE SECTION */}
        <div id="Features" className="min-h-screen relative">
          <AuroraBg />
        </div>
        {/* TETIMONIAL SECTION */}
        <div id="Testimonials" className="min-h-screen text-center">
          <SecondaryHeading heading="See what our users say about us" subHeading="Our very own wall of love. Or complaints. Whatever you want to call it." className="text-black" />
          <div className="min-h-screen flex justify-center px-6 py-20">
            <div className="w-full max-w-6xl">
              <TestimonyGrid />
            </div>
          </div>
        </div>
        {/* PRICING */}
        <div id="Pricing" className="min-h-screen text-center">
          <SecondaryHeading className="text-black" heading="Our pricing will surprise you" subHeading="With so many features at your disposal, you might have to take a loan to buy our monthly subscription." />
          {/* CARDS AND SLIDER */}
          <div className="flex flex-col items-center justify-center gap-5">
            <PricingSlider />
            <SubscriptionCardGrid />
          </div>
        </div>
        {/* FOOTER AND LINKS */}
        <div className="relative min-h-screen flex items-center justify-between flex-col p-10">
          <Banner />
          <Links />
        </div>
    </div>
  )
}

export default page
