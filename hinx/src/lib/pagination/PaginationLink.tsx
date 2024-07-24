import React, { ReactNode, forwardRef } from "react";
import { PaginationLinkProvider, usePaginationItemContext } from "./PaginationContext";
type BaseAnchorAttributes = React.ComponentPropsWithoutRef<"a">;
type Ref = HTMLAnchorElement;
interface AnchorProps extends BaseAnchorAttributes {
  children: ReactNode
}
const PaginationLink = forwardRef<Ref, AnchorProps>(({ children, ...props }, ref) => {
    let context = usePaginationItemContext()
    if(!context){
        throw new Error("PaginationLink should be within a PaginationItem Component")
    }
    return(
      <PaginationLinkProvider>
          {children}
      </PaginationLinkProvider>
    )
})
export default PaginationLink