import React from "react";

export default function LandingLayout({children,}: Readonly<{children:React.ReactNode}>){
    return(
        <div className="flex flex-col w-full bg-gradient-to-l from-[white] to-[#01A653]/10">
            <main>{children}</main>
        </div>
    )
}