"use client"
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";
import { sliderLists } from "@/constants";
import { useRef, useState } from "react";



const Menu = () => {

    const contentRef=useRef(null);

    const [currentIndex, setCurrentIndex]=useState<number>(0);
    const goToSlide=(index: number)=>{
        const totalCocktails=sliderLists.length;
        const newIndex=(index+totalCocktails)%totalCocktails

        setCurrentIndex(newIndex);
    }
    const getCocktail = (index: number) => {
    const totalCocktails = sliderLists.length;
    const newIndex = (index + totalCocktails) % totalCocktails;

    return sliderLists[newIndex];
    };

    const currentCocktail=getCocktail(currentIndex);
    const prevCocktail = getCocktail(currentIndex - 1);
    const nextCocktail = getCocktail(currentIndex + 1);

    useGSAP(()=>{
        gsap.fromTo("#title", {opacity:0}, {opacity:1, duration:1});
        gsap.fromTo(".cocktail img", {opacity:0, x:"-100%"}, {x:0, opacity:1, duration:1, ease:"power1.inOut"})
        gsap.fromTo(".details", {opacity:0}, {opacity:1, duration:1});
    }, [currentIndex])

    useGSAP(() => {
    gsap.timeline({
        scrollTrigger: {
        trigger: "#menu",
        start: "top center",
        scrub: true
        }
    })
    .to("#m-left-leaf", { y: -150 })
    .to("#m-right-leaf", { y:-150 }, "<") 
    });



  return (
    <section id="menu">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs">
        {sliderLists.map((cocktail, index)=>{
            const isActive: boolean = index===currentIndex;

            return (
                <button key={cocktail.id} className={`${isActive ? "text-yellow border-yellow" : "text-white/50 border-white/50"}`} onClick={()=>{goToSlide(index)}}>
                    {cocktail.name}
                </button>
            )
        })}
      </nav>
      <div className="content">
        <div className="arrows">
            <button className="text-left" onClick={()=> goToSlide(currentIndex-1)}>
                <span>{prevCocktail.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" />
            </button>
            <button className="text-right" onClick={()=> goToSlide(currentIndex+1)}>
                <span>{nextCocktail.name}</span>
                <img src="/images/left-arrow.png" alt="right-arrow" />
            </button>
        </div>
        <div className="cocktail">
            <img src={currentCocktail.image} alt="cocktail-image" className="object-contain" />
        </div>
        <div className="recipe">
            <div ref={contentRef} className="info">
                <p>Recipe for:</p>
                <p id="title">{currentCocktail.name}</p>
            </div>
            <div className="details">
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
