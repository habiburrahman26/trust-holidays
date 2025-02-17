import { useState } from 'react';
import TripRadio from './flight/trip-radio';
import Oneway from './flight/one-way';

const FlightTab = () => {
  const [selectedTrip, setSelectedTrip] = useState('one-way');

  // let component = null;

  // if (selectedTrip === 'one-way') {
  //   component = <Onewayy />;
  // } else if (selectedTrip === 'round-way') {
  //   component = <Roundway />;
  // }

  return (
    <div>
      <TripRadio
        selectedTrip={selectedTrip}
        setSelectedTrip={setSelectedTrip}
      />

      <Oneway/>
    </div>
  );
};

export default FlightTab;
