import React, { useEffect, useState } from "react";

const Step = ({ number, title, active }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[#00A465] text-[#fff]");
    else setBg("");
  }, [active]);

  return (
    <div className="flex text-left space-x-7 text-white p-[15px]">
      <div
        className={`font-bold border p-2 ${bg} text-center text-[#28648a] w-10 h-10 border-[#00A465] rounded-full`}
      >
        {number}
      </div>
      <div className="hidden md:block">
        <div className="font-regular text-[#28648a] text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text[15px] text-[#28648a]">{title}</div>
      </div>
    </div>
  );
};

export default Step;
