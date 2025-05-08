import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedNumber = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 1.2,
      ease: "power1.out",
      onUpdate: () => setDisplay(Math.floor(obj.val)),
    });
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
};

const TokenomicsFunVariant = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !ringRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      ).fromTo(
        ".stat-block",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Spin ring forever (not inside timeline)
      gsap.to(ringRef.current, {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 10,
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div id="tokenomics" className="py-10" />
      <div className="max-w-5xl mx-auto text-center py-10 px-6 font-comic">
        <h2 className="text-5xl font-extrabold mb-14 drop-shadow yang">
          $PTRUMP Tokenomics
        </h2>

        <div className="grid sm:grid-cols-2 gap-10 items-center">
          {/* Left: Fun Stats */}
          <div className="space-y-6 text-left">
            <div className="stat-block bg-white border border-pink-200 shadow-md rounded-xl p-5 ">
              <p className="text-2xl mb-2 yang">Token Name:</p>
              <p className="text-xl font-bold">Punjab Trump</p>
            </div>
            <div className="stat-block bg-white border border-pink-200 shadow-md rounded-xl p-5">
              <p className="text-2xl mb-2 yang">Ticker:</p>
              <p className="text-xl font-bold">PTRUMP</p>
            </div>
            <div className="stat-block bg-white border border-pink-200 shadow-md rounded-xl p-5">
              <p className="text-2xl mb-2 yang">Total Supply:</p>
              <p className="text-xl font-bold">
                <AnimatedNumber value={1000000000} /> PTRUMP
              </p>
            </div>
            <div className="stat-block bg-white border border-pink-200 shadow-md rounded-xl p-5">
              <p className="text-2xl mb-2 yang">Distribution:</p>
              <ul className="list-disc ml-6 text-lg space-y-1">
                <li>
                  <strong>Liquidity:</strong> <AnimatedNumber value={90} />%
                </li>
                <li>
                  <strong>Dev:</strong> <AnimatedNumber value={10} />% (7%
                  locked and vested at launch for 6 months)
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Spinning Token Ring */}
          <div className="flex justify-center">
            <div
              ref={ringRef}
              className="relative size-[20rem] rounded-full border-[40px] border-pink-400 border-dashed flex items-center justify-center"
            >
              <div className="absolute top-[-10px] right-[-10px] bg-yellow-300 text-pink-800 text-xs md:text-lg lg:text-2xl px-2 py-4 rounded-full shadow-md">
                90% Liquidity
              </div>
              <div className="absolute bottom-[-10px] left-[-10px] bg-pink-200 text-pink-800 text-xs md:text-lg lg:text-2xl px-2 py-4 rounded-full shadow-md">
                10% Dev
              </div>
              <span className="text-2xl font-bold text-pink-600">PTRUMP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsFunVariant;
