import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CircleCheck } from "lucide-react";
import BankCard from "./bank-card";
import cityBank from "@/assets/images/city-bank.png";
import bracBank from "@/assets/images/brac-bank.png";

const BANK_COUPON = [
  {
    id: 1,
    coupon: "AMEXCARD25",
    description: "Exclusive for GPStar Customers!",
    logo: cityBank,
  },
  {
    id: 2,
    coupon: "AMEXCARD24",
    description: "Exclusive for GPStar Customers!",
    logo: bracBank,
  },
  {
    id: 3,
    coupon: "AMEXCARD23",
    description: "Exclusive for GPStar Customers!",
    logo: cityBank,
  },
  {
    id: 4,
    coupon: "AMEXCARD21",
    description: "Exclusive for GPStar Customers!",
    logo: bracBank,
  },
  {
    id: 5,
    coupon: "AMEXCARD20",
    description: "Exclusive for GPStar Customers!",
    logo: cityBank,
  },
  {
    id: 6,
    coupon: "AMEXCARD11",
    description: "Exclusive for GPStar Customers!",
    logo: bracBank,
  },
  {
    id: 7,
    coupon: "AMEXCARD12",
    description: "Exclusive for GPStar Customers!",
    logo: cityBank,
  },
  {
    id: 8,
    coupon: "AMEXCARD14",
    description: "Exclusive for GPStar Customers!",
    logo: bracBank,
  },
  {
    id: 9,
    coupon: "AMEXCARD15",
    description: "Exclusive for GPStar Customers!",
    logo: cityBank,
  },
  {
    id: 21,
    coupon: "AMEXCARD19",
    description: "Exclusive for GPStar Customers!",
    logo: bracBank,
  },
];

const CouponTab = () => {
  const [coupon, setCoupon] = useState(BANK_COUPON[0].coupon);

  return (
    <div className="bg-background-secondary p-5 rounded-lg">
      <h3 className="text-xl font-medium pb-4">Coupon Discount Applied</h3>
      <div className="pb-10">
        <div className="pt-3 flex items-center gap-4">
          <Input
            type="search"
            className="shadow-none bg-white h-12 text-base border-transparent"
            placeholder="Enter Coupon Code"
            value={coupon}
          />
          <CircleCheck
            fill="#4CE166"
            className="size-7 stroke-background-secondary"
          />
        </div>

        <p className="text-black/50 pt-4 pl-3">
          <span className="text-primary">Coupon Code</span> is applicable only
          for these Bank-Card payment methods -
        </p>
      </div>

      <BankCard coupon={coupon} setCoupon={setCoupon} data={BANK_COUPON}/>
    </div>
  );
};

export default CouponTab;
