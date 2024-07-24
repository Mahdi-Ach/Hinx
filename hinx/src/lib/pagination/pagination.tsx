import { HTMLAttributes, ReactNode, forwardRef } from "react"
import { PaginationProvider } from "./PaginationContext"
import React from "react";
type BasePaginationAttributes = React.ComponentPropsWithoutRef<"div">;
type Ref = HTMLDivElement;
interface AnchorProps extends BasePaginationAttributes {
  children: ReactNode
}
const Pagination = forwardRef<Ref, AnchorProps>(({ children, ...props }, ref) => {
    return(
      <PaginationProvider>
        <div {...props} ref={ref}>
            {children}
        </div>
      </PaginationProvider>
    )
})
export default Pagination