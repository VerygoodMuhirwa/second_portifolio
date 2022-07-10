/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { getApperConfig } from "../modules/getApperConfig";

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
      const config = getApperConfig(interval, initialPosition, endPosiotion);

      setVisibilityConfigState(config);
    });
  });
}
