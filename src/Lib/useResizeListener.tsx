import { useState, useEffect } from "react";
import BP, {GetBreakpoint} from "./Breakpoints";

const useResizeListener = () => {
    const [breakpoint, setBreakpoint] = useState(GetBreakpoint(window.innerWidth))

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(GetBreakpoint(window.innerWidth))
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return breakpoint
}

export default useResizeListener
