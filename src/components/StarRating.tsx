import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    if (rate === rating) {
      /* User can reset the value by clicking on the current rating.
       * It tries to set the rating to a higher value than the maximum
       * allowed, with ends up setting it to 0.
       * @see {@link https://github.com/awran5/react-simple-star-rating/issues/47} */
      setRating(100);
      return;
    }
    setRating(rate);
  };

  //const onPointerEnter = () => console.log("Enter");
  //const onPointerLeave = () => console.log("Leave");
  //const onPointerMove = (value: number, index: number) => console.log(value, index);

  return (
    <div className="StarRating">
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        iconsCount={5}
        initialValue={rating ? rating : 0}
        transition={true}
        /* Available Props */
      />
    </div>
  );
}

export default StarRating;
