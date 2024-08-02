import { useState } from "react";
type select = {
  [key: string]: number[];
};
export default function useSelectRow(data: any[], page: string) {
  const [selectedRowIds, setSelectedRowIds] = useState<select>({});
  const handleCheckboxChange = (id: number) => {
    setSelectedRowIds((prevSelectedRowIds: select) => {
      const currentIds: number[] = prevSelectedRowIds[page] || [];
      const newIds = currentIds.includes(id)
        ? currentIds.filter((selectedId: number) => selectedId !== id)
        : [...currentIds, id];
      return { ...prevSelectedRowIds, [page]: newIds };
    });
  };

  const selectAll = () => {
    setSelectedRowIds((prev: select) => {
      const newSelectedRowIds = { ...prev };

      if (isAllSelected()) {
        delete newSelectedRowIds[page];
      } else {
        const allIds = data.map((val) => val.id);
        newSelectedRowIds[page] = allIds;
      }

      return newSelectedRowIds;
    });
  };
  const isAllSelected = () => {
    return selectedRowIds[page]?.length === data.length;
  };
  const selectedRows = data.filter((row: { id: number }) =>
    selectedRowIds[page]?.includes(row.id)
  );
  const unCheckAll = ()=>{
    setSelectedRowIds({})
  }
  return {
    selectedRowIds,
    selectedRows,
    selectAll,
    isAllSelected,
    handleCheckboxChange,
    unCheckAll
  };
}
