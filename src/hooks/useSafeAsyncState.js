import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useIsMounted from "./useIsMounted";

export function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  const setSafeStateAsync = useCallback((data) => {
    if(isMounted()) {
      setState(data);
    }
  }, [])

  return [state, setSafeStateAsync];
}


