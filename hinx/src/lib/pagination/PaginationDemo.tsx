import { useEffect, useState } from "react";
import Option from "../Select/Option";
import Select from "../Select/Select";
import PaginationItem from "./PaginationItem";
import PaginationLink from "./PaginationLink";
import PaginationNext from "./PaginationNext";
import PaginationPrevious from "./PaginationPrevious";
import Pagination from "./pagination";

interface PaginationDemoProps {
  ChangePage: (e: any, currentpage: string) => void;
  currentpage: string;
  totalpage: number;
  ChangeLimit:(e: any) => void;
}
const PaginationDemo: React.FC<PaginationDemoProps> = ({
  totalpage,
  currentpage,
  ChangePage,
  ChangeLimit
}) => {
  const [editableContent, setEditableContent] = useState<number>(+currentpage);
  useEffect(() => {
    setEditableContent(+currentpage);
  }, [currentpage]);
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      const newPage = +e.target.innerText;
      if (newPage && newPage <= totalpage && newPage >= 1) {
        ChangePage(e, `${newPage}`);
        setEditableContent(newPage);
      } else {
        setEditableContent(+currentpage);
      }
      e.target.blur();
      e.preventDefault()
    }
  };
  return (
    <>
      <Pagination>
        <PaginationItem>
          <PaginationPrevious>
            <button
              onClick={(e: any) => {
                if (+currentpage <= 1) return;
                ChangePage(e, `${+currentpage - 1}`);
                setEditableContent(+currentpage - 1)
              }}
            >
              Previous
            </button>
          </PaginationPrevious>
          <PaginationLink>
            <button onClick={(e: any) =>{setEditableContent(+currentpage);ChangePage(e, `${currentpage}`)}}>
              {currentpage}
            </button>
          </PaginationLink>
          <PaginationNext>
            <button
              onClick={(e: any) => {
                if (+currentpage >= totalpage) return;
                ChangePage(e, `${+currentpage + 1}`);
                setEditableContent(+currentpage + 1)
              }}
            >
              Next
            </button>
          </PaginationNext>
        </PaginationItem>
      </Pagination>
      <div>
      <span
          contentEditable={true}
          onInput={(e: any) => setEditableContent(+e.target.innerText)}
          onKeyDown={handleKeyDown}
        >
        {editableContent}
        </span>
        <span> / {totalpage}</span>
      </div>
      <Select onChange={ChangeLimit}>
            <Option value={3}>
                3
            </Option>
            <Option value={5}>
                5
            </Option>
            <Option value={10}>
                10
            </Option>
            <Option value={20}>
                20
            </Option>
        </Select>
    </>
  );
};

export default PaginationDemo;
