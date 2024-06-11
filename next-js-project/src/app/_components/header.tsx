import React from "react";
import Link from "next/link";

const Header = () => {

    return (
        <div>
            <header className="flex items-center justify-between px-4 py-3 bg-Sand-Dollar">
            <Link href="/" className="flex items-center">
                <img src="/allo-win.png" alt="Allo-Win Logo" className="h-8 w-auto" />
            </Link>
            <div>
                <nav className="hidden md:flex space-x-4">
                    <ul>
                        <li> <Link href="/" className="text-Black hover:text-Tangerine font-medium">Home</Link> </li>
                        <li> <Link href="/top" className="text-Black hover:text-Tangerine font-medium">Top 50</Link> </li>
                        <li> <Link href="/categories" className="text-Black hover:text-Tangerine font-medium">Categories</Link> </li>
                    </ul>
                </nav>
            </div>
            </header>
        </div>

    )
};

export default Header;