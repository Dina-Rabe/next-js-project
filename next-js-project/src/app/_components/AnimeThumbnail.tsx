'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimeItem } from './AnimeThumbnailObject';

const AnimeThumbnail = ({ animeData }:{animeData:AnimeItem}) => {
  
  if (!animeData) {
    return <div>Loading...</div>;
  }else {
    return (
        <>
        <Link href={`/${animeData.myanimelist_id}`} >
          <div className="anime-container">
            <h5 className="text-Sand-Dollar font-bold text-center mb-1">
              {animeData.title}
            </h5>
            <div className="anime-image flex justify-center mb-1">
              <img
                src={animeData.picture_url}
                alt={animeData.title}
                className="rounded"
              />
            </div>
            <div className="anime-statistics mb-1 mr-5 ml-5">
              <p className="text-center text-Sand-Dollar">
                {animeData.description}
              </p>
            </div>
          </div>
        </Link>
        </>
      );
  }
};

export default AnimeThumbnail;