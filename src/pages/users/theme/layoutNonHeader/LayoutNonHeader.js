import { memo } from "react"
import Header from "../header/header"
import Footer from "../footer"

const LayoutNonHeader = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default memo(LayoutNonHeader)