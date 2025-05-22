import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import searchIcon from '@/assets/icon/search.svg';

const SearchIcon = ({ link, searchText, className }) => {
  return (
    <Link
      href={link}
      className={cn(
        'flex items-center justify-center gap-2 lg:gap-0 w-full lg:w-[81px] lg:h-[77px] bg-primary p-2 lg:p-6 rounded-lg',
        className
      )}
    >
      <Image src={searchIcon} alt="search icon" className="size-5 lg:size-8" />
      <span className="block lg:hidden text-white text-sm font-medium">{searchText}</span>
    </Link>
  );
};

export default SearchIcon;
