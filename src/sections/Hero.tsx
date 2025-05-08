import { useLayoutEffect, useRef } from "react";
import p1 from "../assets/wp-1.png";
import p2 from "../assets/wp-2.png";
import p3 from "../assets/wp-3.png";
import gsap from "gsap";
import Button from "../components/Button";

export const HeroSection: React.FC = () => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const subtitle = useRef<HTMLHeadingElement | null>(null);
  const button = useRef<HTMLAnchorElement | null>(null);
  const images = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !title.current ||
      !subtitle.current ||
      !button.current ||
      !images.current
    )
      return;

    const individualImages = images.current.querySelectorAll("img");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, ease: "back.out(1.7)", duration: 0.8 },
      });

      tl.from(title.current, { x: 100 })
        .from(subtitle.current, { x: -100 }, "<")
        .from(button.current, { y: 40 }, "<")
        .from(
          individualImages,
          {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            transformOrigin: "center",
          },
          "-=0.4"
        );

      // Wobble subtitle after initial animation
      gsap.to(subtitle.current, {
        scale: 1.02,
        rotation: 5,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-36 pb-20 bg-white overflow-hidden">
      {/* Laughing Faces */}
      <div ref={images}>
        <img
          src={p1}
          alt="laughing face"
          className="absolute top-10 right-4 rotate-[-10deg] w-32 sm:w-48 md:w-52 lg:w-[20rem] rounded-full z-10"
        />
        <img
          src={p2}
          alt="laughing face"
          className="absolute top-10 lg:top-20 left-4 rotate-[-5deg] w-32 sm:w-48 md:w-60 lg:w-[24rem] rounded-full z-10"
        />
        <img
          src={p3}
          alt="laughing face"
          className="absolute bottom-10 right-[15%] rotate-[-10deg] w-32 sm:w-48 md:w-52 lg:w-[16rem] rounded-full z-10"
        />
      </div>

      {/* Hero Text */}
      <h1
        ref={title}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-black mt-16 sm:mt-20 yang"
      >
        Punjab Trump
      </h1>
      <h2
        ref={subtitle}
        className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-green-600 max-w-xl"
      >
        Trump’s long-lost twin from Pakistan. The voice is deeper. The vibes?
        Even yuger. $PTRUMP isn't just a meme. It's a movement.
      </h2>

      {/* Button */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 z-20">
        <Button content="Buy ptrump" />
      </div>
    </section>
  );
};
