import { useEffect, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Counts down to an ISO date string. Returns padded strings and a done flag.
 */
export default function useCountdown(isoDate) {
  const target = new Date(isoDate).getTime();

  const compute = () => {
    const diff = target - Date.now();
    if (Number.isNaN(target) || diff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", done: true };
    }
    const s = Math.floor(diff / 1000);
    return {
      days: pad(Math.floor(s / 86400)),
      hours: pad(Math.floor((s % 86400) / 3600)),
      minutes: pad(Math.floor((s % 3600) / 60)),
      seconds: pad(s % 60),
      done: false,
    };
  };

  const [time, setTime] = useState(compute);

  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isoDate]);

  return time;
}
