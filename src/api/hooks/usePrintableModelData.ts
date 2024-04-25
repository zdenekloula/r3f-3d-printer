import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { ParsedGcodeData } from "@/store";

function getPrintableModelData(): Promise<ParsedGcodeData> {
  return fetch("./plabs_data.json").then((response) => {
    return response.json();
  });
}

export function usePrintableModelData({
  onDataChange,
}: {
  onDataChange: (data: ParsedGcodeData | undefined) => void;
}) {
  const query = useQuery({
    queryKey: ["printableModelData"],
    queryFn: getPrintableModelData,
  });

  useEffect(() => {
    onDataChange(query.data);
  }, [query.data, onDataChange]);

  return query;
}
