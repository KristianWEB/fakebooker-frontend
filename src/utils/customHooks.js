import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useComponentVisible = initialIsVisible => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      isComponentVisible
    ) {
      setIsComponentVisible(false);
    }
    if (ref.current && ref.current.contains(event.target)) {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};
