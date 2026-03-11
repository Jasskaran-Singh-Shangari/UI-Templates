import About from "@/components/temp3/About";
import Art from "@/components/temp3/Art";
import Cocktails from "@/components/temp3/Cocktails";
import Contact from "@/components/temp3/Contact";
import Hero from "@/components/temp3/Hero";
import Menu from "@/components/temp3/Menu";
import Navbar from "@/components/ui/temp3/Navbar";

export default function Page() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </div>
    );
}