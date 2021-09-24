import { useEffect, useRef, useState } from "react";
import { debounce } from 'debounce'

export const useDimensionsWithRef = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};


export const getDimensions = () => {
  let height;
  let width;

  if (typeof window !== `undefined`) {
    height = window.innerHeight
    width = window.innerWidth
  }

  const [dimensions, setDimensions] = useState({
    windowHeight: height,
    windowWidth: width,
  })

  const debouncedHandleResize = debounce(function handleResize() {
    setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    });
  }, 1000);
  
  window.addEventListener(`resize`, debouncedHandleResize)
  return dimensions;
};
