import React, { ChangeEvent, useEffect, useState } from "react";
import CheckBox from "../Checkbox/CheckBox";
import PaginationDemo from "../pagination/PaginationDemo";
import useSelectRow from './SelectingHook';
import Table from "./Table";
import TBody from "./TableBody";
import THead from "./TableHeader";
import Td from "./Td";
import Tr from "./Tr";
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
  const [limit,setLimit] = useState<string>("3")
  if(!myParam) myParam = "1"
  const [newData,setData] = useState<any[]>([])
  const [page,setPage] =  useState<string>(myParam)
  const {selectedRowIds,isAllSelected,selectAll,handleCheckboxChange,unCheckAll} = useSelectRow(newData,page)
  function ChangePage(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,currentpage:string){
    setPage(currentpage)
    if(currentpage){
      window.history.pushState(null, '', `?page=${+currentpage }`);
    }
    e.preventDefault()
  }
  function ChangeLimit(e:ChangeEvent<HTMLSelectElement>){
    setLimit(e.target.value)
    unCheckAll()
  } 
  useEffect(()=>{
    let elements = data.slice((+page-1)*(+limit),((+page-1)*(+limit))+(+limit))
    console.log(page,limit)
    if(elements.length !== 0){
      setData(elements)
      window.history.pushState(null, '', `?page=${page}`);
    }else{
      elements = data.slice(- (+limit))
      setData(elements)
      window.history.pushState(null, '', `?page=${Math.ceil(+data.length / (+limit)) }`);
    }

    const urlParams = new URLSearchParams(window.location.search);
    let param : string | null =  urlParams.get('page')
    if(param) setPage(param)
  },[page,limit])
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
          {newData.map((row) => (
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
          ))}
            
        </TBody>
      </Table>
      <PaginationDemo  totalpage={Math.ceil(+data.length / (+limit))} currentpage={page} ChangePage={ChangePage} ChangeLimit={ChangeLimit} />

    </>
  );
};
export default TableDemo;
