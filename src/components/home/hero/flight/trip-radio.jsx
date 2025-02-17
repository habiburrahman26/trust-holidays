import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const TripRadio = ({ selectedTrip, setSelectedTrip }) => {
  return (
    <RadioGroup
      defaultValue={selectedTrip}
      onValueChange={(value) => setSelectedTrip(value)}
      className="flex items-center gap-3.5"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="one-way"
          id="option-one"
          className={`shadow-none ${
            selectedTrip === 'one-way' ? 'border-primary' : ' border-darkGray2'
          }`}
        />
        <Label
          htmlFor="option-one"
          className={`${
            selectedTrip === 'one-way' ? 'text-primary' : 'text-darkGray2'
          }`}
        >
          One Way
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="round-way"
          id="round-way"
          className={`shadow-none ${
            selectedTrip === 'round-way'
              ? 'border-primary'
              : ' border-darkGray2'
          }`}
        />
        <Label
          htmlFor="round-way"
          className={`${
            selectedTrip === 'round-way' ? 'text-primary' : 'text-darkGray2'
          }`}
        >
          Round Way
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="multi-city"
          id="multi-city"
          className={`shadow-none ${
            selectedTrip === 'multi-city'
              ? 'border-primary'
              : ' border-darkGray2'
          }`}
        />
        <Label
          htmlFor="multi-city"
          className={`${
            selectedTrip === 'multi-city' ? 'text-primary' : 'text-darkGray2'
          }`}
        >
          {' '}
          Multi City
        </Label>
      </div>
    </RadioGroup>
  );
};

export default TripRadio;
