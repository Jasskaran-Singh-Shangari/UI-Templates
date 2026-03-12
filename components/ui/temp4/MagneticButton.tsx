"use client"
import { useRef } from "react";
import gsap from "@/lib/gsap";
import { LucideIcon } from "lucide-react";

interface MagneticButtonProps{
    text?: string;
    icon?: LucideIcon;
    onclick?: () => void;
    className?: string
}

export default function MagneticButton({text, icon: Icon, onclick, className}: MagneticButtonProps) {

  const buttonRef = useRef(null);

  const handleMouseMove = (e: any) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 1,
      y: y * 1,
      duration: 0.4,
      ease: "power3.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)"
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onclick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`px-4 py-2 bg-neutral-100 text-neutral-500 rounded-full text-lg hover:bg-neutral-200 relative cursor-pointer ${className}`}
      style={{ fontFamily: "Jost" }}
    >
        {Icon && <Icon className="text-neutral-500Navba" />}
        {text}
    </button>
  );
}