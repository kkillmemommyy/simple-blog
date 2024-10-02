import { useMemo } from "react";

export const usePagination = (pageCount) => {
  const pagesArray = useMemo(() => {
    const result = [];

    for (let i = 1; i <= pageCount; i++) {
      result.push(i);
    }

    return result;
  }, [pageCount]);

  return pagesArray;
};
