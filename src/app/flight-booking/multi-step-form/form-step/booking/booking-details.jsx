import Steper from "@/components/ui/steper";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import BookingPayment from "./booking-payment";
import TravlerDetails from "./travler-details";
import BookingPaymentDetails from "./booking-payment-details";

const TabButton = (props) => {
  const { title, number, activeTab, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex px-6 py-3 items-center justify-start rounded text-sm font-medium cursor-pointer bg-[#F1F1F4]",
        {
          "bg-[#FFEDDD]": activeTab == number,
        }
      )}
    >
      <p
        className={`px-2 flex items-start justify-start rounded-[2px] mr-4 text-white ${
          activeTab == number ? "bg-primary " : "bg-lightGray"
        }`}
      >
        {number}
      </p>
      <span
        className={`${activeTab == number ? "text-primary" : "text-black/30"}`}
      >
        {title}
      </span>
    </div>
  );
};

const BookingDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="grid grid-cols-7 gap-16 pb-20">
      <div className="col-span-2">
        <h3 className="text-2xl font-medium">Booking Details</h3>
        <Steper />

        <div className="space-y-4">
          <TabButton
            title="Payment Option’s"
            number="1"
            activeTab={activeTab}
            onClick={() => setActiveTab(1)}
          />
          <TabButton
            title="Traveler’s Details"
            number="2"
            activeTab={activeTab}
            onClick={() => setActiveTab(2)}
          />
        </div>
      </div>

      {activeTab === 1 ? <BookingPayment /> : <TravlerDetails />}

      <BookingPaymentDetails/>
    </div>
  );
};

export default BookingDetails;
