import React, { ReactNode, forwardRef } from "react";
import { PaginationItemProvider, usePaginationContext } from "./PaginationContext";
type BasePaginationItemAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface DivProps extends BasePaginationItemAttributes {
  children: ReactNode
}
const PaginationItem = forwardRef<Ref, DivProps>(({ children, ...props },ref) => {
    let context = usePaginationContext()
    if(!context){
        throw new Error("PaginationItem should be within a Pagination Component")
    }
    return(
      <PaginationItemProvider>
          {children}
      </PaginationItemProvider>
    )
})
export default PaginationItem