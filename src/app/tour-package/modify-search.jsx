import { Button } from '@/components/ui/button';
import { CircleX, FilterIcon, Pencil } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Filter from './filter';

const ModifySearch = () => {
  return (
    <div className="section-container bg-white py-3.5">
      <div className='flex justify-center items-center gap-5'>
        <p className="hidden lg:block text-black text-sm sm:text-base lg:text-lg truncate">
        Search by Destination City
      </p>
      <Button
        size="lg"
        className="hidden lg:block shadow-none text-white px-3 sm:px-6 h-8 lg:h-12"
      >
        Modify Search
      </Button>
      </div>

      <div className="flex items-center justify-between lg:hidden">
        <p className="text-black text-sm sm:text-base truncate">
          Search by Destination
        </p>
        <div className="flex items-center gap-2">
          <Button className="block lg:hidden">
            <Pencil />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full">
                <FilterIcon /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0">
              <SheetHeader className="px-4 py-2">
                <SheetClose asChild>
                  <CircleX size={24} />
                </SheetClose>
              </SheetHeader>
              <Filter className="h-[calc(100vh-60px)] overflow-y-auto px-4 pb-20" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ModifySearch;
