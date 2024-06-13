'use client'

import React, { useState, useEffect } from 'react';
import Anime from './Anime';

  
interface AnimeItem {
    title: string;
    description: string;
    picture_url: string;
    myanimelist_url: string;
    myanimelist_id: string;
    
  }

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
                'x-rapidapi-key': 'eee4687985mshf5ddc741af3285cp100c2ajsnf64ba57afc6c',
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
      <h1>Anime Search Results for "{q}"</h1>
      <div>
        {animeData?.map((item, index) => (
          <Anime key={index} id={item.myanimelist_id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;