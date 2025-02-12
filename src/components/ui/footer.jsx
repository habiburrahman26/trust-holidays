import Image from 'next/image';
import Link from 'next/link';
import mapPinIcon from '@/assets/icon/map-pin.svg';
import playSoreIcon from '@/assets/icon/play-store.svg';
import bkash from '@/assets/icon/bkash.svg';
import nagad from '@/assets/icon/nagod.svg';
import visa from '@/assets/icon/visa.svg';
import masterCard from '@/assets/icon/master-card.svg';

const Footer = () => {
  return (
    <footer>
      <div className="bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="w-full bg-primary h-24"></div>

          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-3xl font-medium">
                    Trust <span className="text-orange-500">Holi</span>days
                  </h2>
                  <p className="max-w-md text-black/50 text-sm">
                    Since our inception, we have dreamt of making travel easier
                    for people of all ages and we move forward to make that
                    dream into reality.
                  </p>
                  <div className="flex items-start gap-2 text-black/50 text-sm">
                    <Image
                      src={mapPinIcon}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <p className="text-black/50">
                      House #28/B(Level-4), Road #3, OLD DOHS Banani, Dhaka,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="font-semibold text-black uppercase tracking-wider">
                  SERVICES
                </h3>
                <ul className="space-y-2.5">
                  {['Flight', 'Hotel', 'Holiday', 'Visa'].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-black/50 hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 uppercase tracking-wider">
                  VIDEO LINKS
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Travel Guide',
                    'Travel Advisory',
                    'Visa Guide',
                    'Visa Application',
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-black/50 hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div className="space-y-4">
                <h3 className="font-semibold text-black uppercase tracking-wider">
                  Explore
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Travel Guide',
                    'Travel Advisory',
                    'Visa Guide',
                    'Visa Application',
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-black/50 hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Download */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
                  CONTACT US
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-black/50">
                        Hot Line:{' '}
                        <Link
                          href="tel:+88018000000"
                          className="text-orange-500"
                        >
                          +88018000000
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-sm">
                      {/* <Mail className="w-4 h-4 text-gray-600" /> */}
                      <span className="text-black/50">
                        Email:{' '}
                        <Link
                          href="mailto:info@gmail.com"
                          className="text-orange-500"
                        >
                          info@gmail.com
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="space-y-2.5 pt-4">
                  <h4 className="font-semibold">DOWNLOAD APP</h4>
                  <Link href="#" className="inline-block">
                    <Image
                      src={playSoreIcon}
                      alt="Get it on Google Play"
                      width={135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="py-7 flex flex-col items-center justify-center gap-6">
          <p className="font-semibold text-black">We Accept</p>

          <div className="flex items-center gap-9">
            <Image src={bkash} alt="bkash" width={70} height={50} />
            <Image src={nagad} alt="nagad" width={60} height={50} />
            <Image src={visa} alt="visa" width={50} height={50} />
            <Image src={masterCard} alt="masterCard" width={50} height={50} />
          </div>
        </div>

        <div className="flex justify-between items-center border-t pb-6 text-sm text-black/50">
          <div className="flex pt-6">
            <Link
              href="#"
              className="pr-4 before-content relative hover:text-primary transition-all"
            >
              Support Center
            </Link>
            <Link
              href="#"
              className="px-4 before-content relative hover:text-primary transition-all"
            >
              Payment Security
            </Link>
            <Link
              href="#"
              className="pl-4 before-content relative hover:text-primary transition-all"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="pt-6">
            Copyright ©{new Date().getFullYear()} Trust{' '}
            <span className="text-primary">Hoil</span>days. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
