import usIcon from "@/assets/icon/flight/us.svg";
import giIcon from "@/assets/icon/flight/gi.svg";
import a2Icon from "@/assets/icon/flight/2a.svg";
import bgIcon from "@/assets/icon/flight/bg.svg";
import vqIcon from "@/assets/icon/flight/vq.svg";
import arrorwRight from "@/assets/icon/arrow.svg";
import Image from "next/image";
import { useState } from "react";

const airlines = [
  { name: "BS.", icon: usIcon, value: "10,819" },
  { name: "VQ.", icon: vqIcon, value: "10,819" },
  { name: "2A.", icon: a2Icon, value: "10,819" },
  { name: "BG.", icon: bgIcon, value: "10,819" },
  { name: "GI.", icon: giIcon, value: "10,819" },
  { name: "BS.", icon: usIcon, value: "10,819" },
  { name: "VQ.", icon: vqIcon, value: "10,819" },
];

const Airlines = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [showAirlines, setShowAirlines] = useState(airlines);
  const [filterAirlines, setFilterAirlines] = useState(
    showAirlines.slice(start, end)
  );
  const [selected, setSelected] = useState([]);

  const goToPrev = () => {
    if (start > 0) {
      setStart((prevState) => prevState - 1);
      setEnd((prevState) => prevState - 1);
      setFilterAirlines(airlines.slice(start - 1, end - 1));
    }
  };

  const goToNext = () => {
    if (end < showAirlines.length) {
      setStart((prevState) => prevState + 1);
      setEnd((prevState) => prevState + 1);
      setFilterAirlines(airlines.slice(start + 1, end + 1));
    }
  };

  const handleSelected = (value) => {};

  return (
    <section className="pt-8 pb-5">
      <div className="grid grid-cols-[80px_1fr_80px] h-[70px]">
        <button
          onClick={goToPrev}
          disabled={start === 0}
          className={`bg-gray/10 w-[80px] h-[70px] flex items-center justify-center rounded-tl-md rounded-bl-md ${
            start === 0 ? "cursor-not-allowed" : ""
          }`}
        >
          <Image src={arrorwRight} alt="arrow" className="size-5 rotate-90" />
        </button>
        <div className="bg-white flex items-center justify-between py-3">
          {filterAirlines.slice(0, 5).map((item, i) => (
            <div
            key={i}
              className={`${
                filterAirlines.length - 1 !== i ? "before-content" : ""
              } relative flex items-center justify-center flex-grow gap-2.5 transition-all cursor-pointer`}
              onClick={() => handleSelected(item)}
            >
              <Image src={item.icon} alt="airlines icon" className="w-10" />

              <div>
                <p className="text-black font-medium">{item.name}</p>
                <p className="text-sm text-black/50">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToNext}
          disabled={end >= showAirlines.length}
          className={`bg-gray/10 w-[80px] h-[70px] flex items-center justify-center rounded-tr-md rounded-br-md ${
            end >= showAirlines.length ? "cursor-not-allowed" : ""
          }`}
        >
          <Image src={arrorwRight} alt="arrow" className="size-5 -rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default Airlines;
