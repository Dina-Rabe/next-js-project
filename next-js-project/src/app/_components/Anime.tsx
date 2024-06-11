'use client';

import React, { useState, useEffect } from 'react';
import { AnimeObject } from './AnimeObject';

const Anime = ({ id }:{id:string}) => {
  const [animeData, setAnimeData] = useState<AnimeObject | null>(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(`https://myanimelist.p.rapidapi.com/anime/${id}`, {
          headers: {
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
            'x-rapidapi-key': 'd551b82177msh620e24e00b96810p18500fjsnd671745e3359',
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
        <div className="anime-container">
            <div className="anime-header">
                <h2>{animeData.title_en}</h2>
                <h3>{animeData.title_ov}</h3>
            </div>
            <div className="anime-image">
                <img src={animeData.picture_url} alt={animeData.title_en}/>
            </div>
            <div className="anime-info">
                <div className="anime-synopsis">
                <h3>Synopsis</h3>
                <p>{animeData.synopsis}</p>
                </div>
                <div className="anime-details">
                <h3>Details</h3>
                </div>
            </div>
            <div className="anime-statistics">
                <h3>Statistics</h3>
                <ul>
                <li>Score: {animeData.statistics.score}/10</li>
                <li>Rank: {animeData.statistics.ranked}</li>
                <li>Popularity: {animeData.statistics.popularity}</li>
                <li>Members: {animeData.statistics.members}</li>
                <li>Favorites: {animeData.statistics.favorites}</li>
                </ul>
            </div>
            
            </div>
      );
  }
};

export default Anime;