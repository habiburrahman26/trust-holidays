import { Checkbox } from './checkbox';

const CheckboxItem = ({ label, value, selectItems, setSelectItems }) => {
  const handleChange = (checked) => {
    setSelectItems((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
  };

  return (
    <div
      className="flex items-center space-x-2 touch-manipulation"
      role="button"
      tabIndex={0}
    >
      <Checkbox
        id={value}
        checked={selectItems.includes(value)}
        onCheckedChange={handleChange}
        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
      <label
        htmlFor={value}
        className={`text-xs cursor-pointer ${
          selectItems.includes(value) ? 'text-primary' : 'text-black/50'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
