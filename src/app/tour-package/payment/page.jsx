"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import cuponeIcon from "@/assets/icon/cuponeIcon.svg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import PaymentMethod from "../../../components/ui/paymentMethod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import tickIcon from "@/assets/icon/tickIcon.svg";
import peopleIcon from "@/assets/icon/people.svg";
import SelectBox from "@/components/ui/select-box";
import { Button } from "@/components/ui/button";
import calendarIcon from "@/assets/icon/calendar.svg";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const page = () => {
  const [activeTab, setActiveTab] = useState("trip-coin");
  const [paymentMethod, setPaymentMethod] = useState("bkash");

  console.log(activeTab);

  return (
    <section className="pb-20 bg-background-secondary">
      <div className="py-6 text-center bg-white">
        <p className="text-2xl font-bold">Select Discount Option</p>
      </div>

      <div className="section-container grid grid-cols-3 gap-10 pt-7">
        <div className="col-span-2">
          <Tabs
            defaultValue="trip-coin"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <Card className="shadow-none">
              <CardHeader className="py-5 px-7  bg-lighterGray rounded-tl-lg rounded-tr-lg">
                <div className="flex items-center gap-1">
                  <Image
                    src={cuponeIcon}
                    alt="cupone icon"
                    className="size-7"
                  />
                  <p>Choose your Discount Option</p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <TabsList className="p-0 grid w-full grid-cols-2 bg-white rounded-none">
                  <TabsTrigger
                    value="trip-coin"
                    className={`rounded-none py-2.5  border-b  shadow-none data-[state=active]:bg-primary data-[state=active]:text-white`}
                  >
                    Earn Trip Coin
                  </TabsTrigger>
                  <TabsTrigger
                    value="coupon-code"
                    className={`rounded-none py-2.5  border-b  shadow-none data-[state=active]:bg-primary data-[state=active]:text-white`}
                  >
                    Use Coupon Code
                  </TabsTrigger>
                </TabsList>

                <div className="px-7 pt-7 pb-10">
                  <TabsContent value="coupon-code">
                    <div className="pb-10">
                      <Label className="text-xl font-medium">
                        Please enter a valid coupon
                      </Label>
                      <div className="pt-3 flex items-center gap-4">
                        <Input
                          type="search"
                          className="shadow-none bg-lighterGray h-12 text-base"
                          placeholder="Enter Coupon Code"
                        />
                        <Image src={tickIcon} alt="tick icon" />
                      </div>
                    </div>
                  </TabsContent>

                  <p className="text-xl font-medium pb-1">
                    Select your Preferred method to Pay
                  </p>
                  <p className="text-sm font-medium text-black/50">
                    Convenience Fee may vary depending on the payment method
                  </p>

                  <PaymentMethod
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                  />
                </div>
              </CardContent>
            </Card>
          </Tabs>

          <Card className="shadow-none mt-7">
            <CardHeader className="py-5 px-7  bg-lighterGray rounded-tl-lg rounded-tr-lg">
              <p>Customer Details</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 pt-8">
                <Image
                  src={peopleIcon}
                  alt="building icon"
                  className="size-6"
                />
                <SelectBox
                  data={[
                    { label: "1", value: 1 },
                    { label: "2", value: 2 },
                    { label: "3", value: 3 },
                  ]}
                  placeholder="Select for...."
                  className="h-12 rounded"
                />
              </div>

              <div className="flex gap-6 pt-8 pb-3">
                <Image
                  src={peopleIcon}
                  alt="building icon"
                  className="size-6 self-start invisible"
                />
                <div className="space-x-6">
                  <span>Customer Name*</span>
                  <Button size="sm" className="rounded">
                    Add People
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src={peopleIcon}
                  alt="building icon"
                  className="size-6 self-start"
                />
                <div className="w-full space-y-5">
                  <div className="flex items-center gap-5 basis-32">
                    <SelectBox
                      data={[
                        { label: "Mr", value: "mr" },
                        { label: "Mrs", value: "mrs" },
                      ]}
                      placeholder="Mr"
                      className="h-12 rounded w-32"
                    />
                    <Input
                      placeholder="First Name *"
                      className="shadow-none basis-full h-12 rounded"
                    />
                    <Input
                      placeholder="Last Name *"
                      className="shadow-none basis-full h-12 rounded"
                    />
                  </div>
                  <Input
                    placeholder="Email *"
                    className="shadow-none basis-full h-12 rounded"
                  />
                  <Input
                    placeholder="Mobile *"
                    className="shadow-none basis-full h-12 rounded"
                  />
                  <Input
                    placeholder="Home Address *"
                    className="shadow-none basis-full h-12 rounded"
                  />
                  <Input
                    placeholder="Nid Number *"
                    className="shadow-none basis-full h-12 rounded"
                  />
                  <Input
                    placeholder="Passport Number *"
                    className="shadow-none basis-full h-12 rounded"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="border rounded-lg p-4 h-fit">
          <h3 className="py-5 px-7  bg-lighterGray rounded-tl-lg rounded-tr-lg">
            Invoice Price Summary
          </h3>
          <div>
            <div className="flex justify-between bg-lighterGray/50 px-7 py-3.5 text-black/50 font-medium">
              <p>Details</p>
              <p>Amount</p>
            </div>
            <div className="flex justify-between px-7 py-5 text-sm ">
              <p className="text-black/50">2 X Price Per Person Double</p>
              <p className="text-black font-bold">BDT 19,800</p>
            </div>
            <div className="payment-content relative flex justify-between px-7 py-5 text-sm ">
              <p className="text-black/50">Total Amount</p>
              <p className="text-black font-bold">BDT 19,800</p>
            </div>
            <div className="payment-content relative flex justify-between px-7 py-5 text-sm ">
              <p className="text-black/50">Total Payable</p>
              <p className="text-black font-bold">BDT 19,800</p>
            </div>
          </div>

          <h3 className=" py-5 px-7 text-xl font-medium text-center">
            Booking Summary
          </h3>

          <div className="payment-content relative">
            <div className="flex justify-between items-center pt-5 text-black/50">
              <div>
                <h3 className="text-sm font-bold uppercase ">STANDARD</h3>
                <p className="text-xs">Dubai, United Arab Emirates</p>
              </div>
              <p className="text-xs font-medium pt-1.5">2 Adt, 0 Chd</p>
            </div>

            <div className="flex justify-between items-center pt-5 text-black/50">
              <div>
                <h3 className="text-sm flex items-center gap-1.5 pb-1">
                  <Image
                    src={calendarIcon}
                    alt="calendar icon"
                    className="size-4"
                  />
                  <span>12 Feb 25</span>
                </h3>
                <p className="text-xs">Free cancellation before</p>
              </div>
              <p className="text-xs font-medium">2 Adt, 0 Chd</p>
            </div>

            <div className="flex items-center space-x-2 pt-5">
              <Checkbox id="terms" className="border-black/50 rounded-[2px]" />
              <label
                htmlFor="terms"
                className="text-xs text-black/50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Agree to the 
                <Link href="#" className="text-primary underline">
                  Terms & Condition
                </Link>
                 and 
                <Link href="#" className="text-primary underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="pt-10 pb-6 w-full">
            <Button  className="h-12 w-full">Pay Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
