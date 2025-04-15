import Image from "next/image";
import Link from "next/link";
import mapPinIcon from "@/assets/icon/map-pin.svg";
import playSoreIcon from "@/assets/icon/play-store.svg";
import bkash from "@/assets/icon/bkash.svg";
import nagad from "@/assets/icon/nagod.svg";
import visa from "@/assets/icon/visa.svg";
import masterCard from "@/assets/icon/master-card.svg";
import companyLogo from "@/assets/icon/trust-logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="section-container bg-background-secondary">
        <div className="w-full bg-primary h-12 md:h-24"></div>

        <div className="py-4 md:py-8 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-7 lg:gap-10">
            {/* Company Info */}
            <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 sm:gap-5 md:gap-7 relative w-48 md:w-56 4xl:w-64 h-10"
                >
                  <Image
                    src={companyLogo}
                    alt="Company Logo"
                    fill
                    className="object-contain w-full h-full"
                  />
                </Link>
                <p className="max-w-md text-black/50 text-sm">
                  Since our inception, we have dreamt of making travel easier
                  for people of all ages and we move forward to make that dream
                  into reality.
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
            <div className="space-y-2 md:space-y-4">
              <h3 className="font-semibold text-black uppercase tracking-wider">
                SERVICES
              </h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                {["Flight", "Hotel", "Holiday", "Visa"].map((item) => (
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
            <div className="space-y-2 md:space-y-4">
              <h3 className="font-semibold text-gray-900 uppercase tracking-wider">
                VIDEO LINKS
              </h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                {[
                  "Travel Guide",
                  "Travel Advisory",
                  "Visa Guide",
                  "Visa Application",
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
            <div className="space-y-2 md:space-y-4">
              <h3 className="font-semibold text-black uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                {[
                  "Travel Guide",
                  "Travel Advisory",
                  "Visa Guide",
                  "Visa Application",
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
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
                CONTACT US
              </h3>
              <ul className="space-y-1.5 md:space-y-2.5">
                <li>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-black/50">
                      Hot Line:{" "}
                      <Link href="tel:+8801332541105" className="text-orange-500">
                        +8801332541105
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-sm">
                    {/* <Mail className="w-4 h-4 text-gray-600" /> */}
                    <span className="text-black/50">
                      Email:{" "}
                      <Link
                        href="mailto:info@trustholidays.net"
                        className="text-orange-500"
                      >
                        info@trustholidays.net
                      </Link>
                    </span>
                  </div>
                </li>
              </ul>

              <div className="space-y-1.5 md:space-y-2.5 pt-4">
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

      <div className="section-container">
        <div className="py-7 flex flex-col items-center justify-center gap-6">
          <p className="font-semibold text-black">We Accept</p>

          <div className="flex items-center gap-4 sm:gap-9">
            <Image src={bkash} alt="bkash" width={70} height={50} />
            <Image src={nagad} alt="nagad" width={60} height={50} />
            <Image src={visa} alt="visa" width={50} height={50} />
            <Image src={masterCard} alt="masterCard" width={50} height={50} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t pb-6 text-xs md:text-sm text-black/50">
          <div className="flex pt-3 sm:pt-6">
            <Link
              href="#"
              className="pr-2 md:pr-4 before-content relative hover:text-primary transition-all"
            >
              Support Center
            </Link>
            <Link
              href="#"
              className="px-2 md:px-4 before-content relative hover:text-primary transition-all"
            >
              Payment Security
            </Link>
            <Link
              href="#"
              className="pl-2 md:pl-4 relative hover:text-primary transition-all"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="pt-3 sm:pt-6">
            Copyright ©{new Date().getFullYear()} Trust{" "}
            <span className="text-primary">Hoil</span>days. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
