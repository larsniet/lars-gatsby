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
    if (typeof window !== `undefined`) {
        const [dimension, setDimension] = useState([window.innerWidth, window.innerHeight]);

        useEffect(() => {
            window.addEventListener("resize", () => {
                setDimension([window.innerWidth, window.innerHeight])
            });
            return () => {
                window.removeEventListener("resize", () => {
                    setDimension([window.innerWidth, window.innerHeight])
                })
            }
        }, []);
        
        return dimension;
    } else {
        return [1000, 1000] // Fallback
    }
};
