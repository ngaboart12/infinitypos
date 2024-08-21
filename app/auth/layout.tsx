import React from "react";

export default function LandingLayout({children,}: Readonly<{children:React.ReactNode}>){
    return(
        <div className="flex flex-col w-full bg-white">
            <main>{children}</main>
        </div>
    )
}