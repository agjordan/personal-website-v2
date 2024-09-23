import React, { RefObject, useEffect, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: 0.7 },
      ),
    [],
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
