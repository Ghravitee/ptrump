import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import kekImg from "../assets/wp-4.png";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // when top of section hits 80% of viewport
            once: true, // run only once
          },
          defaults: { ease: "power3.out", duration: 1 },
        })
        .from(textRef.current, { scale: 0, opacity: 0 })
        .from(imageRef.current, { scale: 0, opacity: 0 }, "<"); // "<" = start at same time
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-black mb-6 yang">
            Who is <span className="text-black">Punjab Trump</span> ?
          </h2>
          <p className="mb-6 text-lg lg:text-[1.5rem] leading-relaxed font-semibold">
            Trump’s long-lost twin from Pakistan. Same groove, better vocals
            (don’t believe? check X). If $TRUMP hit $73B, don’t sleep on
            $PTRUMP. $1B MC? Very possible. Yuge vibes only.
          </p>

          <p className="text-lg lg:text-[1.5rem] leading-relaxed mb-4 font-semibold">
            Punjab Trump’s dream is to do a duet with Donald Trump. Let’s help
            him achieve his dream.
          </p>
        </div>

        {/* Image */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-black mb-2 text-center">
            <span className="yang"> Meet Punjab Trump</span>:{" "}
            <a
              className="text-green-500 text-xl md:text-2xl lg:text-[1.5rem] font-semibold"
              href=" https://x.com/Punjab_Trump"
            >
              @Punjab_trump
            </a>
          </h2>
          <img
            ref={imageRef}
            src={kekImg}
            alt="El Risitas cheering"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
