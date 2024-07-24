import React, { ReactNode, forwardRef } from "react";
import { PaginationPreviousProvider, usePaginationItemContext } from "./PaginationContext";
type BaseAnchorAttributes = React.ComponentPropsWithoutRef<"a">;
type Ref = HTMLAnchorElement;
interface AnchorProps extends BaseAnchorAttributes {
  children: ReactNode
}
const PaginationPrevious = forwardRef<Ref, AnchorProps>(({ children, ...props }, ref) => {
    let context = usePaginationItemContext()
    if(!context){
        throw new Error("PaginationPrevious should be within a PaginationItem Component")
    }
    return(
      <PaginationPreviousProvider>
        {children}
      </PaginationPreviousProvider>
    )
})
export default PaginationPrevious