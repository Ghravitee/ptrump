import { useLayoutEffect, useRef } from "react";
import p1 from "../assets/wp-1.png";
import p2 from "../assets/wp-2.png";
import p3 from "../assets/wp-3.png";
import gsap from "gsap";

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
          className="absolute top-4 right-4 rotate-[-10deg] w-40 sm:w-48 md:w-52 lg:w-[20rem] rounded-full z-10"
        />
        <img
          src={p2}
          alt="laughing face"
          className="absolute top-20 left-4 rotate-[-5deg] w-40 sm:w-48 md:w-60 lg:w-[24rem] rounded-full z-10"
        />
        <img
          src={p3}
          alt="laughing face"
          className="absolute bottom-10 right-[15%] rotate-[-10deg] w-40 sm:w-48 md:w-52 lg:w-[16rem] rounded-full z-10"
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
        <a
          ref={button}
          href="#"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.707A1 1 0 007 17h10a1 1 0 001-1v-1M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          Buy ptrump
        </a>
      </div>
    </section>
  );
};
