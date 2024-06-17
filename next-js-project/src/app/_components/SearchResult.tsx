'use client'

import React, { useState, useEffect } from 'react';
import Anime from './Anime';
import AnimeThumbnail from './AnimeThumbnail';
import { AnimeItem } from './AnimeThumbnailObject';
import '/styles/globals.css'

  

const sampleResult:Array<AnimeItem> = [
    {
      "title": "Naruto: Shippuuden",
      "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the myster...read more.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
      "myanimelist_id": 1735
    },
    {
      "title": "Naruto",
      "description": "Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the l...read more.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/20/Naruto",
      "myanimelist_id": 20
    },
    {
      "title": "Road of Naruto",
      "description": "In celebration of 20 years of Naruto, Studio Pierrot posted an anniversary PV on their YouTube channel. The PV is a compilation of newly reworked scenes from Naruto containing new animation.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1731/128787.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/53236/Road_of_Naruto",
      "myanimelist_id": 53236
    },
    {
      "title": "Shoujo Kakumei Utena",
      "description": "Years ago, a tragic incident befell a young princess when both her parents died. Devastated, it seemed nothing would calm this poor soul. However, a prince traveling through the area came to see the p...read more.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1078/95285.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/440/Shoujo_Kakumei_Utena",
      "myanimelist_id": 440
    },
    {
      "title": "Ginga Eiyuu Densetsu: Arata naru Tatakai no Overture",
      "description": "Led by Reinhard von Müsel, the Galactic Empire crushes the Free Planets Alliance in the Fourth Battle of Tiamat. Arriving in the Imperial capital of Odin to a hero's welcome, Reinhard's victory earns...read more.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/8/22498.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/3016/Ginga_Eiyuu_Densetsu__Arata_naru_Tatakai_no_Overture",
      "myanimelist_id": 3016
    }
  ];


const SearchResult = ({ q }:{q:string}) => {
  const [animeData, setAnimeData] = useState<AnimeItem[] | null>(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(
            `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${encodeURIComponent(
                q
              )}&n=5&score=8`,
          {
            headers: {
                'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
                'x-rapidapi-key': '03dc7223ffmsh66934660fc2f8dep1e8c36jsn2191959a91d5',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAnimeData(data);
        } else {
          console.error('Error fetching anime data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, [q]);

  return (
    <div>
        <h3 className="text-Tangerine font-bold mb-4 text-center">Anime Search Results for {q}</h3>
        <div className="flex flex-wrap justify-center pr-2 pl-2 w-full">
            {animeData?.map((item, index) => (
                <div
                key={index}
                className="w-1/3 ml-10 border border-solid border-Tangerine mb-10 pt-5 pb-5 rounded-xl"
                >
                <AnimeThumbnail animeData={item} />
                </div>
            ))} 
        </div>
    </div>
  );
};

export default SearchResult;