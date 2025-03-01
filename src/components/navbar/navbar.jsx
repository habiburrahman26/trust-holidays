import Image from 'next/image';
import AppDownload from './app-download';
import companyLogo from '@/assets/icon/company-logo.svg';
import notificationIcon from '@/assets/icon/notification.svg';
import bdIcon from '@/assets/icon/country/bd.svg';
import arrowIcon from '@/assets/icon/arrow.svg';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <header>
      <AppDownload />
      <div className='bg-background-secondary section-container'>
        <nav className="h-[70px] flex items-center justify-between">
            <Link href="/" className='flex items-center gap-3 sm:gap-5 md:gap-7'>
                <Image src={companyLogo} alt="Company Logo" className="size-5 md:size-6 lg:size-8"/>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-medium'>Trust <span className='text-primary'>Holi</span>days</h3>
            </Link>

            <div className='flex items-center gap-7'>
                <div className='hidden sm:flex items-center gap-2.5 cursor-pointer'>
                    <Image src={bdIcon} alt="Bangladesh Flag" className="w-9 h-9"/>
                    <span className='text-black font-medium -mr-1'>BDT</span>
                    <Image src={arrowIcon} alt="Arrow Icon" className="w-4 h-4"/>
                </div>

                <div className='size-11 hidden sm:flex items-center justify-center border border-lightGray rounded-full cursor-pointer'>
                    <Image src={notificationIcon} alt="Notification Icon" className="size-6"/>
                </div>

                <Link href="/login">
                    <Button className="shadow-none bg-primaryLight">Login</Button>
                </Link>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
