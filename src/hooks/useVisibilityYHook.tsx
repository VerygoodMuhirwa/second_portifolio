/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";

export function useVisibilityY(
  visibilityConfigStateProp: any,
  elementPositionsState: {
    initialPosition: number;
    endPosiotion: number;
  },
  interval: [number, number],
) {
  const [visibilityConfigState, setVisibilityConfigState] =
    visibilityConfigStateProp;
  const { initialPosition, endPosiotion } = elementPositionsState;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const [startInterval, endInterval] = interval;
      const pageCordenateY = window.scrollY;
      const appear =
        pageCordenateY >= startInterval && pageCordenateY <= endInterval
          ? true
          : false;

      const config = {
        transform: `translateY(${appear ? endPosiotion : initialPosition}px)`,
        opacity: appear ? 1 : 0,
      };

      setVisibilityConfigState(config);
    });
  });
}
