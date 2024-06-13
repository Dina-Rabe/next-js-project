'use client'

import React, { useState, useEffect } from 'react';

interface AnimeItem {
  title: string;
  picture_url: string;
  myanimelist_url: string;
  myanimelist_id: number;
  rank: number;
  score: number;
  type: string;
  aired_on: string;
  members: number;
}


const TopAnime = () => {
  const [animeData, setAnimeData] = useState<AnimeItem[] | null>(null);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const response = await fetch(
          'https://myanimelist.p.rapidapi.com/anime/top/all',
          {
            headers: {
              'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
              'x-rapidapi-key': 'eee4687985mshf5ddc741af3285cp100c2ajsnf64ba57afc6c',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAnimeData(data);
        } else {
          console.error('Error fetching top anime data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching top anime data:', error);
      }
    };

    fetchTopAnime();
  }, []);

  if (!animeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Top Anime</h1>
      <ul>
        {animeData.map((item, index) => (
          <li key={index}>
            <h3><a href={item.myanimelist_url}>{item.title}</a></h3>
            <img src={item.picture_url}></img>
            <p>Rank: {item.rank}</p>
            <p>Score: {item.score}</p>
            <p>Type: {item.type}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopAnime;