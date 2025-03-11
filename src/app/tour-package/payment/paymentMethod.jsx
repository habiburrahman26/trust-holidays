"use client";

import bkash from "@/assets/icon/bkash.svg";
import nagad from "@/assets/icon/nagod.svg";
import visa from "@/assets/icon/visa.svg";
import masterCard from "@/assets/icon/master-card.svg";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";


const PaymentMethod = ({paymentMethod,setPaymentMethod}) => {
  return (
    <div className="space-y-4 pt-12">
      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="flex items-center gap-2.5"
      >
        <div
          className={`border-2 p-3.5 rounded-md ${
            paymentMethod === "bkash" ? "border-primary" : "opacity-60"
          }`}
        >
          <RadioGroupItem
            value="bkash"
            className="hidden right-1"
            id="bkash"
          ></RadioGroupItem>
          <Label htmlFor="bkash" className="flex items-center gap-3">
            <Image src={bkash} alt="bkash" className="w-24 h-9" />
          </Label>
        </div>

        <div  className={`border-2 p-3.5 rounded-md ${
            paymentMethod === "nagad" ? "border-primary" : "opacity-60"
          }`}>
          <RadioGroupItem value="nagad" id="nagad" className="hidden"></RadioGroupItem>
          <Label htmlFor="nagad" className="flex items-center gap-3">
            <Image src={nagad} alt="nagad" className="w-24 h-9" />
          </Label>
        </div>

        <div  className={`border-2 p-3.5 rounded-md ${
            paymentMethod === "visa" ? "border-primary" : "opacity-60"
          }`}>
          <RadioGroupItem value="visa" id="visa" className="hidden"></RadioGroupItem>
          <Label htmlFor="visa" className="flex items-center gap-3">
            <Image src={visa} alt="visa" className="w-24 h-9" />
          </Label>
        </div>

        <div  className={`border-2 p-3.5 rounded-md ${
            paymentMethod === "masterCard" ? "border-primary" : "opacity-60"
          }`}>
          <RadioGroupItem
            value="masterCard"
            id="masterCard"
            className="hidden"
          ></RadioGroupItem>
          <Label htmlFor="masterCard" className="flex items-center gap-3">
            <Image src={masterCard} alt="masterCard" className="w-24 h-9" />
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;
