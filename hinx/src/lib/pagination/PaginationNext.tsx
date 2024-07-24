import React, { ReactNode, forwardRef } from "react";
import { PaginationNextProvider, usePaginationItemContext } from "./PaginationContext";
type BaseAnchorAttributes = React.ComponentPropsWithoutRef<"a">;
type Ref = HTMLAnchorElement;
interface AnchorProps extends BaseAnchorAttributes {
  children: ReactNode
}
const PaginationNext = forwardRef<Ref, AnchorProps>(({ children, ...props }, ref) => {
    let context = usePaginationItemContext()
    if(!context){
        throw new Error("PaginationNext should be within a PaginationItem Component")
    }
    return(
      <PaginationNextProvider>
        {children}
      </PaginationNextProvider>
    )
})
export default PaginationNext