export function getApperConfig(
  interval: [number, number],
  initialPosition: number,
  endPosiotion: number,
) {
  const [startInterval, endInterval] = interval;
  const pageCordenateY = window.scrollY;

  const appear =
    pageCordenateY >= startInterval && pageCordenateY <= endInterval
      ? true
      : false;

  return {
    transform: `translateY(${appear ? endPosiotion : initialPosition}px)`,
    opacity: appear ? 1 : 0,
  };
}
