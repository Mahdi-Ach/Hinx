import PaginationItem from "./PaginationItem";
import PaginationPrevious from "./PaginationPrevious";
import Pagination from "./pagination";
import PaginationNext from "./PaginationNext";
import PaginationLink from "./PaginationLink";
import { useEffect, useState } from "react";
interface PaginationDemoProps {
  pagenumber: number;
  ChangePage:(e:any,currentpage:string)=>void
}
const PaginationDemo: React.FC<PaginationDemoProps> = ({ pagenumber,ChangePage }) => {

    let PageNumber = Array.from({ length: pagenumber }, (x, i) => i);
  
  return (
    <>
      <Pagination>
        <PaginationItem>
          <PaginationPrevious>
            <a >
                Previous
            </a>
          </PaginationPrevious>
          {PageNumber.map((page, index) => (
            <PaginationLink key={index}>
                <a onClick={(e:any)=>ChangePage(e,`${page+1}`)}>
                    {page+1}
                </a>
            </PaginationLink>
          ))}
          <PaginationNext>
            <a href="" >Next</a>
          </PaginationNext>
        </PaginationItem>
      </Pagination>
    </>
  );
};
export default PaginationDemo;
