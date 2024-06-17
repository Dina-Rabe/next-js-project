'use client'

import SearchResult from "./_components/SearchResult"
import '/styles/globals.css'
import { useState } from "react";

export default function Home(){
    const [searchText, setSearchText] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setShowSearchResult(true);
    };
    return (
    <div 
        className="min-h-screen flex flex-col items-center justify-center bg-Black w-full"
    >
        <h1
            className="text-Tangerine text-4xl font-bold mb-4"
        >
            Find your favorite Anime
        </h1>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full mb-4"
            >
            <div className="w-6/12 mb-4">
                <input
                type="text"
                placeholder="Your favorite Anime ..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-2 border-2 border-Tangerine rounded-md focus:outline-none mb-4"
                />
                
            </div>
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-Tangerine text-Sand-Dollar rounded-md hover:bg-Red hover:text-Black focus:outline-none w-1/4 mb-4"
            >
                Search
            </button>
        </form>

        {showSearchResult && 
        <div>
            <SearchResult q={searchText} />
        </div>}
    </div>
    )
}