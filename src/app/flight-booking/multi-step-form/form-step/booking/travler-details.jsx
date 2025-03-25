import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectBox from "@/components/ui/select-box";
import { CircleCheck } from "lucide-react";

const TravlerDetails = () => {
  return (
    <div className="col-span-3">
      <h3 className="text-2xl font-medium pb-6">Provide Traveller Details</h3>

      <Card className="shadow-none border-none rounded-lg">
        <CardContent className="px-11 pt-7">
          <SelectBox
            data={[
              {
                label: "My Self",
                value: "my-self",
              },
            ]}
            className="h-12 border-none bg-light"
            placeholder="Select from Favorite Travellers"
          />

          <div className="py-8 relative">
            <p className="w-full h-[1px] bg-lighterGray2"></p>
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-0.5 text-sm text-black/50">
              Or, Enter Traveler Details below
            </p>
          </div>

          <div className="flex items-center gap-3 w-full pb-7">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name" className="font-normal text-black">
                Given Name
              </Label>
              <Input
                type="text"
                id="name"
                className="h-12 border-none bg-light"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="surname" className="font-normal text-black">
                Surname <span className="text-red">*</span>
              </Label>
              <Input
                type="text"
                id="surname"
                className="h-12 border-none bg-light"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 w-full">
            <div className="w-full">
              <Label htmlFor="surname" className="font-normal text-black">
                Gender <span className="text-red">*</span>
              </Label>
              <SelectBox
                data={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                className="h-12 border-none bg-light w-full"
                placeholder="Select"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="surname" className="font-normal text-black">
              Select Nationality <span className="text-red">*</span>
              </Label>
              <SelectBox
                data={[
                  { label: "Bangladesh", value: "bd" },
                  { label: "India", value: "india" },
                ]}
                className="h-12 border-none bg-light w-full"
                placeholder="Select"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="space-x-3">
          <Button className="h-12 bg-black/50 text-white w-full hover:bg-black/40">
            Back to Payment Options
          </Button>
          <Button className="h-12 w-full">Save & Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TravlerDetails;
