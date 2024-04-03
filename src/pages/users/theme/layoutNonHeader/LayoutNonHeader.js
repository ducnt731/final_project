import { memo } from "react"

const LayoutNonHeader = ({ children, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default memo(LayoutNonHeader)