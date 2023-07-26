import { useState, useEffect } from "react";

export enum Breakpoints {
    xsm = 320,
    sm = 768,
    md = 1024,
    lg = 1280,
    xlg = 1440
}


const GetBreakpoint = (width: number): Breakpoints => {
    if (width < 0) {
        throw new Error("Width can't be negative")
    }

    let breakpoint = Breakpoints.xlg
    for (const key in Breakpoints) {
        const breakpointWidth = Number(Breakpoints[key])
        if (width <= breakpointWidth) {
            breakpoint = breakpointWidth
            break;
        }
    }

    return breakpoint
}

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
