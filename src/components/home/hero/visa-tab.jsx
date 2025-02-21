import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import searchIcon from '@/assets/icon/search.svg';
import { useState } from 'react';

const VisaTab = () => {
  const [citizen, setCitizen] = useState('bd');
  const [travel, setTravel] = useState('canada');
  const [visaCategory, setVisaCategory] = useState('student-visa');

  return (
    <div className="flex items-end gap-3">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="space-y-3.5 w-full">
          <label
            htmlFor="citizen"
            className="text-xs text-black font-medium before-label-dot"
          >
            I’m a Citizen of
          </label>
          <Select value={citizen} onValueChange={setCitizen}>
            <SelectTrigger className="w-full h-[77px] text-lg shadow-none">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="bd">Bangladesh</SelectItem>
                <SelectItem value="ind">India</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="nepal">Nepal</SelectItem>
                <SelectItem value="bhutan">Bhutan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3.5 w-full">
          <label
            htmlFor="citizen"
            className="text-xs text-black font-medium before-label-dot"
          >
            Traveling to
          </label>
          <Select value={travel} onValueChange={setTravel}>
            <SelectTrigger className="w-full h-[77px] text-lg shadow-none">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="bd">Bangladesh</SelectItem>
                <SelectItem value="ind">India</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="nepal">Nepal</SelectItem>
                <SelectItem value="bhutan">Bhutan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3.5 w-full">
          <label
            htmlFor="citizen"
            className="text-xs text-black font-medium before-label-dot"
          >
            Visa Category
          </label>
          <Select value={visaCategory} onValueChange={setVisaCategory}>
            <SelectTrigger className="w-full h-[77px] shadow-none text-lg">
              <SelectValue placeholder="Select your visa category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="student-visa">Student Visa</SelectItem>
                <SelectItem value="worker-visa">Worker Visa</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-[81px] h-[77px] flex items-center justify-center p-6 rounded-lg bg-primary ">
        <Image src={searchIcon} alt="search icon" className="size-8" />
      </div>
    </div>
  );
};

export default VisaTab;
