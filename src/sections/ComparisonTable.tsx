import { Check, X } from "lucide-react";

const data = [
  { feature: "Can do the Trump Dance", trump: true, ptrump: true },
  { feature: "Can Sing", trump: false, ptrump: true },
  { feature: "Supply Hoard", trump: true, ptrump: false },
  { feature: "Fighter", trump: true, ptrump: true },
  { feature: "Low MarketCap", trump: false, ptrump: true },
  { feature: "Could make you rich", trump: true, ptrump: true },
];

const ComparisonTable = () => {
  return (
    <section className=" py-12 px-4 sm:px-8 lg:px-16 font-comic">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 yang drop-shadow">
          $TRUMP vs $PTRUMP Showdown
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base rounded-xl shadow-2xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-lg md:text-xl lg:text-2xl">
                <th className="py-4 px-4 border border-pink-200">Feature</th>
                <th className="py-4 px-4 border border-pink-200 text-center">
                  $TRUMP <br />
                  <span className="text-sm text-pink-100">(Donald Trump)</span>
                </th>
                <th className="py-4 px-4 border border-pink-200 text-center">
                  $PTRUMP <br />
                  <span className="text-sm text-pink-100">(Punjab Trump)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-yellow-50"
                  } hover:scale-105 hover:bg-pink-100 transition-all duration-200`}
                >
                  <td className="py-6 px-6 border border-pink-200 font-semibold text-pink-700 lg:text-2xl yang">
                    {item.feature}
                  </td>
                  <td className="py-4 px-4 border border-pink-200 text-center text-xl">
                    {item.trump ? <Check /> : <X />}
                  </td>
                  <td className="py-4 px-4 border border-pink-200 text-center text-xl">
                    {item.ptrump ? <Check /> : <X />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
