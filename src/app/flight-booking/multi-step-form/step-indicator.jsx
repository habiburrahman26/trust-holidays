"use client";

import { cn } from "@/lib/utils";

const StepIndicator = (props) => {
  const { currentStep, steps, className } = props;

  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className={`flex items-center ${index < steps.length-1 ? "border-r pr-2.5" :""}`}>
          <div
            className={cn(
              "flex px-6 py-3 items-center justify-center rounded-md font-medium cursor-pointer",
              currentStep === index
                ? "border-primary bg-[#FFEDDD] text-primary"
                : currentStep > index
                ? "border-primary bg-primary text-primary-foreground"
                : "border-muted-foreground/25 text-muted-foreground"
            )}
          >
            <p className={`px-2 flex items-start justify-center rounded-[2px] text-white mr-4 ${currentStep === index ? "bg-primary" :"bg-lighterGray"}`}>{index+1}</p>
            {step.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
