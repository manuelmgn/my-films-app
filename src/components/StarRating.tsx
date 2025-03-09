import { useState } from "react";
import { Rating } from "react-simple-star-rating";

import "./StarRating.css";

/**
 * Imported StarRating component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.value - The current rating value.
 * @param {Function} props.onChange - The callback function to change the rating value.
 * @returns {JSX.Element} The rendered component.
 */
const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [rating, setRating] = useState(value);

  const handleRating = (rate: number) => {
    if (rate === rating) {
      /* User can reset the value by clicking on the current rating.
       * It tries to set the rating to a higher value than the maximum
       * allowed, with ends up setting it to 0.
       * @see {@link https://github.com/awran5/react-simple-star-rating/issues/47} */
      setRating(100);
      onChange(100);
      return;
    }
    setRating(rate);
    onChange(rate);
  };

  return (
    <Rating
      onClick={handleRating}
      initialValue={rating}
      transition={true}
      fillColor={"var(--color-1)"}
      iconsCount={5}
    />
  );
};

export default StarRating;
