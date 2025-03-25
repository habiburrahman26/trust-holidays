"use client";

import bkash from "@/assets/icon/bkash.svg";
import nagad from "@/assets/icon/nagod.svg";
import visa from "@/assets/icon/visa.svg";
import masterCard from "@/assets/icon/master-card.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

const PAYMENT_METHOD = [
  {
    id: "bkash",
    imgSrc: bkash,
    altText: "bkash icon",
  },
  {
    id: "nagad",
    imgSrc: nagad,
    altText: "nagad icon",
  },
  {
    id: "visa",
    imgSrc: visa,
    altText: "visa icon",
  },
  {
    id: "masterCard",
    imgSrc: masterCard,
    altText: "masterCard icon",
  },
];

const PaymentMethod = ({ paymentMethod, setPaymentMethod, className }) => {
  return (
    <div className={cn("space-y-4 pt-12", className)}>
      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="flex items-center gap-2.5"
      >
        {PAYMENT_METHOD.map((item) => (
          <Fragment key={item.id}>
            <RadioGroupItem
              value={item.id}
              className="hidden right-1"
              id={item.id}
            ></RadioGroupItem>

            <Label
              htmlFor={item.id}
              className={`flex items-center gap-3 p-3.5 cursor-pointer border-2 rounded-md ${
                paymentMethod === item.id ? "border-primary" : "opacity-60"
              }`}
            >
              <Image
                src={item.imgSrc}
                alt={item.altText}
                className="w-24 h-9"
              />
            </Label>
          </Fragment>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;
