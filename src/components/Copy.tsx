import { useState } from "react";
import Button from "./Button";

const Copy = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("4S94Bfigd8f235dHkI04JfkXs51tPump");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex flex-col sm:flex-row justify-center items-center bg-white border border-b-[7px] border-b-black rounded-2xl py-1 px-4 max-w-full sm:w-fit cursor-pointer mb-[13px]"
    >
      <h2 className="text-[18px] sm:text-[22.9px] truncate max-w-[260px] sm:max-w-none">
        0x0000000000000000000000
      </h2>

      <div className="mt-2 sm:mt-0 sm:ml-3">
        {hasCopied ? <Button content="Copied" /> : <Button content="Copy" />}
      </div>
    </div>
  );
};

export default Copy;
