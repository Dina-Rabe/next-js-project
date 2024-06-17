'use client';

import React, { useState, useEffect } from 'react';
import { AnimeObject } from './AnimeObject';
import '/styles/globals.css'

const Anime = ({ id }:{id:string}) => {
  const [animeData, setAnimeData] = useState<AnimeObject | null>(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(`https://myanimelist.p.rapidapi.com/anime/${id}`, {
          headers: {
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
            'x-rapidapi-key': '03dc7223ffmsh66934660fc2f8dep1e8c36jsn2191959a91d5',
          },
        });
        const data = await response.json();
        setAnimeData(data);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, [id]);

  if (!animeData) {
    return <div>Loading...</div>;
  }else {
    return (
        <div className="w-full px-8 mb-8 flex flex-col items-center bg-Black">
            
            {animeData.title_ov ? (
                <div className='w-full items-center justify-center pb-6'>
                <div className="anime-header text-center pb-6">
                  <h2 className="text-Tangerine">{animeData.title_en}</h2>
                  <h3 className="text-Tangerine">{animeData.title_ov}</h3>
                </div>
                <div className="anime-image flex justify-center pb-6">
                  <img src={animeData.picture_url} alt={animeData.title_en} className="rounded" />
                </div>
                <div className="anime-info text-center pb-6">
                  <div className="anime-synopsis pb-6">
                    <h3 className="text-Sand-Dollar text-3xl font-bold">Synopsis:</h3>
                    <p className="text-Sand-Dollar">{animeData.synopsis}</p>
                  </div>
                  <div className="anime-details">
                    <h3 className="text-Sand-Dollar text-3xl font-bold">Details</h3>
                  </div>
                </div>
            
                <div className="anime-statistics text-center text-Sand-Dollard pb-6">
                  <ul className="text-Sand-Dollar">
                    <li>Score: {animeData.statistics.score}/10</li>
                    <li>Rank: {animeData.statistics.ranked}</li>
                    <li>Popularity: {animeData.statistics.popularity}</li>
                    <li>Members: {animeData.statistics.members}</li>
                    <li>Favorites: {animeData.statistics.favorites}</li>
                  </ul>
                </div>
              </div>
            
        ) : (
                    <h1>AnimeID doesn't exist!</h1>
                )
            }
            
            </div>
      );
  }
};

export default Anime;