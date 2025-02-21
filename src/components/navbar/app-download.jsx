import Link from 'next/link';
import mobileIcon from '@/assets/icon/mobile.svg';
import facebookIcon from '@/assets/icon/facebook.svg';
import youtubeIcon from '@/assets/icon/youtube.svg';
import instagramIcon from '@/assets/icon/instagram.svg';
import tiktokIcon from '@/assets/icon/tik-tok.svg';
import xIcon from '@/assets/icon/twitter.svg';
import Image from 'next/image';

const AppDownload = () => {
  const platform = [
    { name: 'facebook', icon: facebookIcon },
    { name: 'youtube', icon: youtubeIcon },
    { name: 'instagram', icon: instagramIcon },
    { name: 'tiktok', icon: tiktokIcon },
    { name: 'twitter', icon: xIcon },
  ];

  return (
      <div className="hidden section-container h-10 lg:flex items-center justify-between text-sm">
        {/* Left - App Download Link */}
        <div className="flex items-center gap-11">
          <div className='flex items-center gap-2'>
            <Image src={mobileIcon} alt="Phone icon" className="w-6 h-6"/>
            <span className="text-black/50 text-sm font-medium">Download Holydays App Here</span>
          </div>
          
          <div>
            <span className="font-medium text-black">News: </span>
            <span className='text-black/50'>
               Chelsoa reject De Bruyno could get the last laugh.
            </span>
          </div>
        </div>

        {/* Center - News Ticker */}

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          {platform.map((platform) => (
            <Link
              key={platform.name}
              href="#"
              className="w-6 h-6 flex items-center justify-center"
              aria-label={platform.name}
            >
              <Image src={platform.icon} alt={platform.name} />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default AppDownload;
