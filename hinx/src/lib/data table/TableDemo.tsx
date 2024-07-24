import React, { useEffect, useState } from "react";
import CheckBox from "./../checkbox/CheckBox";
import useSelectRow from './SelectingHook';
import Table from "./Table";
import TBody from "./TableBody";
import THead from "./TableHeader";
import Td from "./Td";
import Tr from "./Tr";
import PaginationDemo from "../pagination/PaginationDemo";
import Accordion from "../Accordion/Accordion";
import AccorditionItem from './../Accordion/AccordionItem';
const TableDemo = () => {
  const data = [
    { id: 1, value1: "1", value2: "a", value3: "dsqdqs" },
    { id: 2, value1: "2", value2: "b", value3: "dsqdqs" },
    { id: 3, value1: "3", value2: "a", value3: "dsqdqs" },
    { id: 4, value1: "4", value2: "a", value3: "dsqdqs" },
    { id: 5, value1: "5", value2: "b", value3: "dsqdqs" },
    { id: 6, value1: "6", value2: "d", value3: "dsqdqs" },
    { id: 7, value1: "7", value2: "c", value3: "dsqdqs" },
  ];
  const urlParams = new URLSearchParams(window.location.search);
  let myParam:string|null = urlParams.get('page');
  if(!myParam) myParam = "1"
  const [newData,setData] = useState<any[]>([])
  const [page,setPage] =  useState(myParam)
  const {selectedRowIds,selectedRows,isAllSelected,selectAll,handleCheckboxChange} = useSelectRow(newData,page)
  function ChangePage(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,currentpage:string){
    setPage(currentpage)
    if(currentpage){
      window.history.pushState(null, '', `?page=${+currentpage }`);

    }
    e.preventDefault()
  }
  useEffect(()=>{
    setData(data.slice((+page-1)*3,((+page-1)*3)+3))},[page])
  return (
    <>
      <Table>
        <THead>
          <Tr>
            <Td><CheckBox checked={isAllSelected()} onChange={() => selectAll()}/></Td>
            <Td>dsqdqs</Td>
            <Td>dsqdqs</Td>
            <Td>dsqdqs</Td>
          </Tr>
        </THead>
        <TBody>
          <Accordion>
          {newData.map((row) => (
            <AccorditionItem value={row.id}>
              <Tr key={row.id}>
              <Td>
                <CheckBox
                  checked={selectedRowIds[page] ? selectedRowIds[page].includes(row.id):false}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </Td>
              <Td>{row.id}</Td>
              <Td>{row.value1}</Td>
              <Td>{row.value2}</Td>
              <Td>{row.value3}</Td>
            </Tr>
            </AccorditionItem>
          ))}
            
          </Accordion>
        </TBody>
      </Table>
      <div>
        <h3>Selected Rows:</h3>
        <pre>{JSON.stringify(selectedRowIds, null, 2)}</pre>
        <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
      </div>
      <PaginationDemo pagenumber={10} ChangePage={ChangePage} />

    </>
  );
};
export default TableDemo;
