import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRightLeft, BadgePercent, ChevronDown, Info } from "lucide-react";
import usBanglaIcon from "@/assets/icon/flight/us.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import planeIcon from "@/assets/icon/paper-plane.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import discountIcon from '@/assets/icon/flight/discount.svg';
import convenienceIcon from "@/assets/icon/flight/convenience.svg"

const BookingPaymentDetails = () => {
  return (
    <Card className="col-span-2 h-fit shadow-none border-none mt-12">
        <CardHeader className="flex flex-row items-center justify-between py-5 bg-[#FFF1E4] rounded-tl-lg rounded-tr-lg">
          <div className="flex items-center gap-3.5">
            <Image src={usBanglaIcon} alt="air icon" className="size-7" />
            <div>
              <div className="flex items-center gap-3.5">
                <p className="font-medium text-primary">DAC</p>
                <ArrowRightLeft className="fill-primary stroke-primary size-5" />
                <p className="font-medium text-primary">COX</p>
              </div>

              <div className="flex items-center gap-1 text-xs text-black/50">
                <p>Round Trip</p>
                <div className="size-1 bg-primary"></div>
                <p>04 Mar - 06 Mar</p>
              </div>
            </div>
          </div>
          <Button className="h-8 shadow-none rounded-md">Details</Button>
        </CardHeader>
        <CardContent className="pt-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="w-full flex flex-row items-center justify-between  text-sm border-none">
                <div asChild className="flex items-center gap-2">
                  <Image src={planeIcon} alt="plane icon" className="size-8" />
                  <span className="text-primary block ml-2 mr-2.5 font-medium">Air Fare</span>
                  <ChevronDown className="stroke-primary size-5" />
                </div>
                <p className="text-primary">10,398 BDT</p>
              </AccordionTrigger>
              <AccordionContent>test</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center">
              <Image src={discountIcon} alt="discount icon" className="size-7"/>
              <p className="text-sm text-gray ml-5 mr-2.5 font-medium">Discount Availed</p>
            </div>

            <p className="font-medium text-gray text-sm">- 1,224 BDT</p>
          </div>

          <div className="flex items-center justify-between pt-5">
            <div className="flex items-center">
            <Image src={convenienceIcon} alt="discount icon" className="size-5"/>
              <p className="text-sm text-black/50 ml-6 mr-2.5 font-medium">Convenience Fee</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="stroke-gray/90 size-4 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray">
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <p className="font-medium text-black/50 text-sm">+183 BDT</p>
          </div>
        </CardContent>
        <CardFooter className="bg-primary flex items-center justify-between py-5 rounded-bl-lg rounded-br-lg">
          <p className="font-medium text-white">Total Price</p>
          <p className="font-medium text-xl text-white">9,357 BDT</p>
        </CardFooter>
      </Card>
  )
}

export default BookingPaymentDetails