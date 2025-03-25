"use client";

import { useState } from "react";
import StepIndicator from "./step-indicator";
import clockIcon from "@/assets/icon/clock.svg";
import Image from "next/image";
import BookingDetails from "./form-step/booking/booking-details";
import AddOnService from "./form-step/add-on-service";
import Baggage from "./form-step/baggage";
import ReviewPayment from "./form-step/review-payment";

const STEPS = [
  { id: "booking", title: "Booking Details" },
  { id: "service", title: "Add-On Services" },
  { id: "baggage", title: "Extra Baggage's" },
  { id: "payment", title: "Review & Payment" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BookingDetails />;
      case 1:
        return <AddOnService />;
      case 2:
        return <Baggage />;
      case 3:
        return <ReviewPayment />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="section-container py-2 flex items-center gap-40">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Image src={clockIcon} alt="clock icon" />
            <p className="text-black">Time Remaining</p>
          </div>
          <p className="text-2xl font-semibold text-black">15:29</p>
        </div>
        <StepIndicator steps={STEPS} currentStep={currentStep} />
      </div>

      <form className="section-container  bg-background-secondary pt-10">{renderStep()}</form>
    </>
  );
};

export default MultiStepForm;
