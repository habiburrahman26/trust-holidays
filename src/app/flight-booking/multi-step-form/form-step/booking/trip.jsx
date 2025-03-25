import Image from "next/image";
import reviewStarIcon from "@/assets/icon/review-star.svg";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Trip = () => {
  const [tripCoin, setTripCoin] = useState([0]);


  return (
    <div className="p-4 bg-background-secondary rounded-lg">
      <div className="flex items-center pb-4">
        <p>Redeem Trip Coins: {tripCoin}</p>
        <Image src={reviewStarIcon} alt="review icon" className="ml-auto size-6"/>
        <p className="text-xl font-medium ml-2.5">{80}</p>
      </div>

      <Slider value={tripCoin} onValueChange={setTripCoin} defaultValue={[0]} max={80} step={10} className="pb-2"/>
    </div>
  )
}

export default Trip