import { Button } from "@/components/ui/button";
import React from "react";

const ModifySearch = () => {
  return (
    <div className="section-container  flex justify-center items-center gap-5 bg-white py-3.5">
      <p className="text-black text-lg">Search by Destination City</p>
      <Button size="lg" className="shadow-none text-white px-6 h-12">
        Modify Search
      </Button>
    </div>
  );
};

export default ModifySearch;
