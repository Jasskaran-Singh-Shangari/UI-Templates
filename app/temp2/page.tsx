import Navbar from "@/components/ui/temp2/Navbar";
import BgAnimation from "@/components/ui/temp2/BgAnimation";
import HeroHeading from "@/components/ui/temp2/HeroHeading";
import Features from "@/components/temp2/Features";
import Why1 from "@/components/temp2/Why1";
import Why2 from "@/components/temp2/Why2";
import FeatureHeading from "@/components/ui/temp2/FeatureHeading";

export default function Page() {
    return (
        <div className="bg-white min-h-screen relative text-black ">
        {/* NAVBAR */}
        <Navbar />
        
        <section className="relative h-screen overflow-hidden">
            <BgAnimation />
            <HeroHeading />
        </section>

        {/* FETURES */}
        <Features />

        {/* FEATURES DETAILED */}
        <div className="w-full flex bg-red-500">
            <Why1 />
            <FeatureHeading heading="Set & prioritize your goals." subText="Turn your project management into a source of information instead of a list of frustration. Communicate the timeframe & impact of your goals and democratize your roadmap." />
        </div>
        
        <div className="w-full flex flex-row-reverse bg-blue-500">
            <Why2 />
            <FeatureHeading heading="Set & prioritize your goals." subText="Turn your project management into a source of information instead of a list of frustration. Communicate the timeframe & impact of your goals and democratize your roadmap." />
        </div>
        </div>
    );
}