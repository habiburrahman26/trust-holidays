import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import searchIcon from '@/assets/icon/search.svg';

const SearchIcon = ({ link, searchText, className }) => {
  return (
    <Link
      href={link}
      className={cn(
        'flex items-center justify-center gap-2 sm:gap-0 w-full sm:w-[81px] sm:h-[77px] bg-primary p-2 sm:p-6 rounded-lg',
        className
      )}
    >
      <Image src={searchIcon} alt="search icon" className="size-5 sm:size-8" />
      <span className="block sm:hidden text-white text-sm font-medium">{searchText}</span>
    </Link>
  );
};

export default SearchIcon;
