import React from "react";
import Link from "next/link";
import Image from "next/image";
import '/styles/globals.css'

const Header = () => {

    return (
        <>
            <header className="flex items-center justify-between px-4 py-3 bg-Black sm:px-6 md:px-8">
                <Link href="/" className="flex items-center">
                    <Image 
                        src="/allo-win.png" 
                        alt="Allo-Win Logo" 
                        className="h-8 w-auto" 
                        width={500}
                        height={500}
                        />
                </Link>

                <div className="flex items-center">
                    <nav className="hidden md:flex items-center space-x-4">
                    <Link
                        href="/"
                        className="bg-Tangerine text-Sand-Dollar hover:bg-Red hover:text-Black font-medium py-2 px-4 rounded-md"
                    >
                        Home
                    </Link>
                    <Link
                        href="/top"
                        className="bg-Tangerine text-Sand-Dollar hover:bg-Red hover:text-Black font-medium py-2 px-4 rounded-md"
                    >
                        Top 50
                    </Link>
                    </nav>
                </div>
            </header>
        </>

    )
};

export default Header;