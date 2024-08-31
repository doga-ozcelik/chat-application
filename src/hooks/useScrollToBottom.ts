import { useEffect, RefObject } from "react";
import { Message } from "../types";

const useScrollToBottom = (
  ref: RefObject<HTMLDivElement>,
  dependency: Message[]
) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);
};

export default useScrollToBottom;
