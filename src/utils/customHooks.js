import { useState, useEffect, useRef } from "react";

// I cannot use this hook in ProfileHeader.jsx ( Friend buttons ) because there are multiple dropdowns with multiple ref and if I use it whenever I accept a friend request, it opens the " removeFriend " dropdown as well. If you know how to fix this create a PR.

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
