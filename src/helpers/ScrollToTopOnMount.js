import { useEffect } from "react";

const ScrollToTopOnMount = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return null; // Render nothing, it's just for the side effect
};

export default ScrollToTopOnMount;
