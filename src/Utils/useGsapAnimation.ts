// src/Utils/useGsapAnimation.ts
import { useEffect } from "react";
import gsap from "gsap";

export const useGsapAnimation = (
  containerRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stagger-item", {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      });
            gsap.from(".stagger-item-2", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, containerRef);



    return () => ctx.revert();
  }, []);
};
