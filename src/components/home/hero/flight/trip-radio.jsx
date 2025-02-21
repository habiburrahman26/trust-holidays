import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const TripRadio = ({ selectedTrip, setSelectedTrip }) => {
  const tripData = [
    {
      label: 'One Way',
      value: 'one-way',
    },
    {
      label: 'Round Way',
      value: 'round-way',
    },
    {
      label: 'Multi City',
      value: 'multi-city',
    },
  ];
  return (
    <RadioGroup
      defaultValue={selectedTrip}
      onValueChange={(value) => setSelectedTrip(value)}
      className="flex items-center gap-3.5"
    >
      {tripData.map((item,i) => (
        <div key={i} className="flex items-center space-x-2">
          <RadioGroupItem
            value={item.value}
            id={item.value}
            className={`shadow-none  ${
              selectedTrip === item.value
                ? 'border-primary'
                : ' border-darkGray2'
            }`}
          />
          <Label
            htmlFor={item.value}
            className={`${
              selectedTrip === item.value ? 'text-primary' : 'text-darkGray2'
            } text-sm`}
          >
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default TripRadio;
