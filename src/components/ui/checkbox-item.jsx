const { Checkbox } = require("./checkbox");

const CheckboxItem = ({ label, value, selectItems, setSelectItems }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={value}
        checked={selectItems.includes(value)}
        onCheckedChange={(checked) => {
          setSelectItems((prevState) => {
            if (checked) {
              return [...prevState, value];
            } else {
              return prevState.filter((item) => item !== value);
            }
          });
        }}
      />
      <label
        htmlFor={value}
        className={`text-xs ${
          selectItems.includes(value) ? "text-primary" : "text-black/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
};


export default CheckboxItem