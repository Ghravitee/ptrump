import { useState } from "react";
import Button from "./Button";

const Copy = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const address = "0x0000000000000000000000";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Format: first 4 + ellipsis + last 4
  const formatAddress = (addr: string) =>
    addr.slice(0, 4) + "..." + addr.slice(-4);

  return (
    <div
      onClick={handleCopy}
      className="flex flex-col sm:flex-row justify-center items-center bg-white border border-b-[7px] border-b-black rounded-2xl py-1 px-4 max-w-full sm:w-fit cursor-pointer mb-[13px]"
    >
      <h2 className="text-[22px] sm:text-[22.9px] font-bold">
        {formatAddress(address)}
      </h2>

      <div className="mt-2 sm:mt-0 sm:ml-3">
        {hasCopied ? <Button content="Copied" /> : <Button content="Copy" />}
      </div>
    </div>
  );
};

export default Copy;
