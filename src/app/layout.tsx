import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/UI/Navbar";
import Footer from "@/app/components/UI/Footer";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Swam Htet',
    description: 'My portfolio',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body>
        <Navbar/>
        <div className={'container mx-auto px-5 py-5 lg:px-40'}>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}
