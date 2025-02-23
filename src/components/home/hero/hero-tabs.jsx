'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.jsx';
import flightIcon from '@/assets/icon/flight.svg';
import flightActiveIcon from '@/assets/icon/flight-active.svg';
import hotelIcon from '@/assets/icon/hotel.svg';
import hotelActiveIcon from '@/assets/icon/hotel-active.svg';
import tourIcon from '@/assets/icon/tour.svg';
import tourActiveIcon from '@/assets/icon/tour-active.svg';
import visaIcon from '@/assets/icon/visa-flight.svg';
import visaActiveIcon from '@/assets/icon/visa-active.svg';
import promotionIcon from '@/assets/icon/promotion.svg';
import promotionActiveIcon from '@/assets/icon/promotion-active.svg';
import Image from 'next/image';
import { useState } from 'react';
import FlightTab from './flight-tab';
import { Hotel } from './hotel/hotel';
import Tour from './tour-tab/tour';
import VisaTab from './visa-tab';

const tabs = [
  {
    value: 'flight',
    label: 'Flight',
    icon: flightIcon,
    activeIcon: flightActiveIcon,
    component: FlightTab,
  },
  {
    value: 'hotel',
    label: 'Hotel',
    icon: hotelIcon,
    activeIcon: hotelActiveIcon,
    component: Hotel,
  },
  {
    value: 'tour',
    label: 'Tour',
    icon: tourIcon,
    activeIcon: tourActiveIcon,
    component: Tour,
  },
  {
    value: 'visa',
    label: 'Visa',
    icon: visaIcon,
    activeIcon: visaActiveIcon,
    component: VisaTab,
  },
  {
    value: 'promotions',
    label: 'Promotions',
    icon: promotionIcon,
    activeIcon: promotionActiveIcon,
  },
];

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState('flight');
  return (
    <div className="bg-white rounded-lg max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto shadow z-10">
      <Tabs
        defaultValue="flight"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full h-auto bg-white pb-0 border-b border-darkGray2/50 shadow-none rounded-b-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center gap-3.5 py-3.5 border-b-2 border-white data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none"
            >
              <Image
                src={activeTab === tab.value ? tab.activeIcon : tab.icon}
                alt={`${tab.label} icon`}
                className="size-5"
              />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent className="h-auto" key={tab.value} value={tab.value}>
            <div className="px-10 pt-7 pb-12">
              {tab.component && <tab.component />}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HeroTabs;
