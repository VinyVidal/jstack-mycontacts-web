import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";

export default function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
   isMounted.current = true;

   return () => {
    isMounted.current = false;
   }
  })

  const getIsMounted = useCallback(() => isMounted.current, []);

  return getIsMounted;
}
