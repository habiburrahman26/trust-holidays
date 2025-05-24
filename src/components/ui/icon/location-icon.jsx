const LocationIcon = ({className, fill = "#f9953e"}) => {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.51458 0C8.55986 0 11.0292 2.40991 11.0292 5.38195C11.0292 8.354 8.55986 12.1535 5.51458 15.6246C2.4693 12.1535 0 8.354 0 5.38195C0 2.40991 2.4693 0 5.51458 0Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5154 7.57887C6.7548 7.57887 7.76419 6.5919 7.76419 5.38416C7.76419 4.17457 6.7529 3.18945 5.5154 3.18945C4.2779 3.18945 3.2666 4.17642 3.2666 5.38416C3.2647 6.5919 4.276 7.57887 5.5154 7.57887Z"
        fill="white"
      />
    </svg>
  );
};

export default LocationIcon;
