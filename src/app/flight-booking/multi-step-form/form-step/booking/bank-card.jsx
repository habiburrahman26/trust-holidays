import { cn } from "@/lib/utils";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Fragment } from "react";

const BankCard = ({ coupon, setCoupon, data }) => {
  return (
    <RadioGroup value={coupon} onValueChange={setCoupon}>
      <div className="grid grid-cols-2 gap-3">
        {data.map((bank) => (
          <Fragment key={bank.id}>
            <RadioGroupItem
              value={bank.coupon}
              className="hidden"
              id={bank.coupon}
            ></RadioGroupItem>

            <Label
              htmlFor={bank.coupon}
              className={cn(
                "w-full flex items-center justify-between gap-2 px-6 py-[11px] font-medium cursor-pointer bg-white rounded-lg border border-transparent",
                { "bg-[#FFEDDD] border-primary": coupon === bank.coupon }
              )}
            >
              <div>
                <p
                  className={cn("text-black/50 pb-2", {
                    "text-primary": coupon === bank.coupon,
                  })}
                >
                  {bank.coupon}
                </p>
                <p
                  className={cn("text-xs text-black/50", {
                    "text-black": coupon === bank.coupon,
                  })}
                >
                  {bank.description}
                </p>
              </div>
              <Image src={bank.logo} alt="bank logo" />
            </Label>
          </Fragment>
        ))}
      </div>
    </RadioGroup>
  );
};

export default BankCard;
