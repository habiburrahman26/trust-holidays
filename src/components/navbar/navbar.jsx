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
      <div className='bg-background-secondary px-40'>
        <nav className="h-[70px] flex items-center justify-between">
            <div className='flex items-center gap-7'>
                <Image src={companyLogo} alt="Company Logo" className="w-8 h-8"/>
                <h3 className='text-3xl font-medium'>Trust <span className='text-primary'>Holi</span>days</h3>
            </div>

            <div className='flex items-center gap-7'>
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image src={bdIcon} alt="Bangladesh Flag" className="w-9 h-9"/>
                    <span className='text-black font-medium -mr-1'>BDT</span>
                    <Image src={arrowIcon} alt="Arrow Icon" className="w-4 h-4"/>
                </div>

                <div className='size-11 flex items-center justify-center border border-lightGray rounded-full cursor-pointer'>
                    <Image src={notificationIcon} alt="Notification Icon" className="size-6"/>
                </div>

                <Link href="/login">
                    <Button>Login</Button>
                </Link>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
