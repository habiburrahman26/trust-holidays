import { CircleCheck } from "lucide-react";
import couponIcon from "@/assets/icon/flight/coupon.svg";
import reviewStarIcon from "@/assets/icon/review-star.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PaymentMethod from "@/components/ui/paymentMethod";
import CouponTab from "./couponTab";
import Trip from "./trip";
import { Button } from "@/components/ui/button";

const BookingPayment = () => {
  const [activeTab, setActiveTab] = useState("coupon");
  const [paymentMethod, setPaymentMethod] = useState("bkash");

  return (
    <div className="col-span-3">
      <h3 className="text-2xl font-medium pb-6">Choose Your Payment Option</h3>

      <div className="bg-white p-6 rounded-lg max-h-[70vh] overflow-auto">
        <div className="flex items-center gap-2 pb-7">
          <div
            onClick={() => setActiveTab("coupon")}
            className={cn(
              "basis-1/2 bg-background-secondary py-5 rounded-lg border border-transparent overflow-hidden cursor-pointer",
              {
                "bg-[#FFEDDD] border-primary": activeTab === "coupon",
              }
            )}
          >
            <div className="flex items-center justify-between px-5">
              <div className="flex items-center gap-3.5">
                <Image
                  src={couponIcon}
                  alt="coupon icon"
                  className={cn("size-7 opacity-50", {
                    "opacity-100": activeTab === "coupon",
                  })}
                />
                <div>
                  <p
                    className={cn("text-xs text-black/50", {
                      "text-black": activeTab == "coupon",
                    })}
                  >
                    I want to use
                  </p>
                  <p
                    className={cn("font-medium text-black/50", {
                      "text-primary": activeTab == "coupon",
                    })}
                  >
                    Coupon Code
                  </p>
                </div>
              </div>
              <CircleCheck
                fill={activeTab == "coupon" ? "#4CE166" : "#D9D9D9"}
                stroke={activeTab == "coupon" ? "#FFEDDD" : "#fff"}
                className="size-7"
              />
            </div>
            {/* <p className={cn("text-6xl scale-150 text-center text-lightGray pt-5",{
                "text-primary": activeTab == "coupon",
              })}>Coupon Code</p> */}
          </div>

          <div
            onClick={() => setActiveTab("trip")}
            className={cn(
              "basis-1/2 bg-background-secondary py-5 rounded-lg border border-transparent overflow-hidden cursor-pointer",
              {
                "bg-[#FFEDDD] border-primary": activeTab === "trip",
              }
            )}
          >
            <div className="flex items-center justify-between px-5">
              <div className="flex items-center gap-3.5">
                <Image
                  src={reviewStarIcon}
                  alt="coupon icon"
                  className={cn("size-7 opacity-50", {
                    "opacity-100": activeTab === "trip",
                  })}
                />
                <div>
                  <p
                    className={cn("text-xs text-black/50", {
                      "text-black": activeTab == "trip",
                    })}
                  >
                    I want to Redeem
                  </p>
                  <p
                    className={cn("font-medium text-black/50", {
                      "text-primary": activeTab == "trip",
                    })}
                  >
                    Trip Coin
                  </p>
                </div>
              </div>
              <CircleCheck
                fill={activeTab == "trip" ? "#4CE166" : "#D9D9D9"}
                stroke={activeTab == "trip" ? "#FFEDDD" : "#fff"}
                className="size-7"
              />
            </div>
            {/* <p className={cn("text-6xl scale-150 text-center text-lightGray pt-5",{
                "text-primary": activeTab == "trip",
              })}>Trip Code</p> */}
          </div>
        </div>

        {activeTab === "coupon" ? <CouponTab /> : null}
        {activeTab === 'trip' ? <Trip/>: null}

        <h3 className="text-xl font-medium pt-8 pb-2.5">
          Other Payment Methods
        </h3>
        <p className="text-black/50">
          Coupon is applied currently. Please be informed that selecting a
          different method will cancel this coupon.
        </p>
        <PaymentMethod
          className="pt-8"
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </div>

      <div className="px-6 py-5  bg-white">
          <Button className="h-14 w-full">Proceed to Traveler Details</Button>
        </div>
    </div>
  );
};

export default BookingPayment;
