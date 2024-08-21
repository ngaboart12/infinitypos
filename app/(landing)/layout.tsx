import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function LandingLayout({children,}: Readonly<{children:React.ReactNode}>){
    return(
        <div className="flex flex-col w-full bg-white">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}