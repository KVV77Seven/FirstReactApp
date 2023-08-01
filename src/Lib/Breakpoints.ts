enum Breakpoints {
    xsm = 320,
    sm = 768,
    md = 1024,
    lg = 1280,
    xlg = 1440
}


export const GetBreakpoint = (width: number): Breakpoints => {
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

export default Breakpoints