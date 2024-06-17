'use client'

import React, { useState, useEffect } from 'react';
import '/styles/globals.css'
import { list } from 'postcss';
import Link from 'next/link';

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

const listTop50 : Array<AnimeItem> = [
    {
      "title": "Sousou no Frieren",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
      "myanimelist_id": 52991,
      "rank": 1,
      "score": 9.36,
      "type": "TV (28 eps)",
      "aired_on": "Sep 2023 - Mar 2024",
      "members": 774224
    },
    {
      "title": "Fullmetal Alchemist: Brotherhood",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      "myanimelist_id": 5114,
      "rank": 2,
      "score": 9.09,
      "type": "TV (64 eps)",
      "aired_on": "Apr 2009 - Jul 2010",
      "members": 3363326
    },
    {
      "title": "Steins;Gate",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/9253/Steins_Gate",
      "myanimelist_id": 9253,
      "rank": 3,
      "score": 9.07,
      "type": "TV (24 eps)",
      "aired_on": "Apr 2011 - Sep 2011",
      "members": 2576979
    },
    {
      "title": "Gintama°",
      "picture_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/28977/Gintama°",
      "myanimelist_id": 28977,
      "rank": 4,
      "score": 9.06,
      "type": "TV (51 eps)",
      "aired_on": "Apr 2015 - Mar 2016",
      "members": 634529
    },
    {
      "title": "Shingeki no Kyojin Season 3 Part 2",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
      "myanimelist_id": 38524,
      "rank": 5,
      "score": 9.05,
      "type": "TV (10 eps)",
      "aired_on": "Apr 2019 - Jul 2019",
      "members": 2294594
    },
    {
      "title": "Gintama: The Final",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1245/116760.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/39486/Gintama__The_Final",
      "myanimelist_id": 39486,
      "rank": 6,
      "score": 9.04,
      "type": "Movie (1 eps)",
      "aired_on": "Jan 2021 - Jan 2021",
      "members": 152315
    },
    {
      "title": "Gintama'",
      "picture_url": "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/9969/Gintama",
      "myanimelist_id": 9969,
      "rank": 7,
      "score": 9.03,
      "type": "TV (51 eps)",
      "aired_on": "Apr 2011 - Mar 2012",
      "members": 559642
    },
    {
      "title": "Hunter x Hunter (2011)",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
      "myanimelist_id": 11061,
      "rank": 8,
      "score": 9.03,
      "type": "TV (148 eps)",
      "aired_on": "Oct 2011 - Sep 2014",
      "members": 2852163
    },
    {
      "title": "Ginga Eiyuu Densetsu",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1976/142016.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu",
      "myanimelist_id": 820,
      "rank": 9,
      "score": 9.02,
      "type": "OVA (110 eps)",
      "aired_on": "Jan 1988 - Mar 1997",
      "members": 324465
    },
    {
      "title": "Gintama': Enchousen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1452/123686.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/15417/Gintama__Enchousen",
      "myanimelist_id": 15417,
      "rank": 10,
      "score": 9.02,
      "type": "TV (13 eps)",
      "aired_on": "Oct 2012 - Mar 2013",
      "members": 327201
    },
    {
      "title": "Bleach: Sennen Kessen-hen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen",
      "myanimelist_id": 41467,
      "rank": 11,
      "score": 9.01,
      "type": "TV (13 eps)",
      "aired_on": "Oct 2022 - Dec 2022",
      "members": 549436
    },
    {
      "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic",
      "myanimelist_id": 43608,
      "rank": 12,
      "score": 9.01,
      "type": "TV (13 eps)",
      "aired_on": "Apr 2022 - Jun 2022",
      "members": 939096
    },
    {
      "title": "Gintama.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/3/83528.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/34096/Gintama",
      "myanimelist_id": 34096,
      "rank": 13,
      "score": 8.98,
      "type": "TV (12 eps)",
      "aired_on": "Jan 2017 - Mar 2017",
      "members": 316635
    },
    {
      "title": "Fruits Basket: The Final",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1085/114792.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/42938/Fruits_Basket__The_Final",
      "myanimelist_id": 42938,
      "rank": 14,
      "score": 8.97,
      "type": "TV (13 eps)",
      "aired_on": "Apr 2021 - Jun 2021",
      "members": 483220
    },
    {
      "title": "Gintama",
      "picture_url": "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/918/Gintama",
      "myanimelist_id": 918,
      "rank": 15,
      "score": 8.94,
      "type": "TV (201 eps)",
      "aired_on": "Apr 2006 - Mar 2010",
      "members": 1070044
    },
    {
      "title": "Clannad: After Story",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1299/110774.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/4181/Clannad__After_Story",
      "myanimelist_id": 4181,
      "rank": 16,
      "score": 8.93,
      "type": "TV (24 eps)",
      "aired_on": "Oct 2008 - Mar 2009",
      "members": 1199181
    },
    {
      "title": "Koe no Katachi",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/28851/Koe_no_Katachi",
      "myanimelist_id": 28851,
      "rank": 17,
      "score": 8.93,
      "type": "Movie (1 eps)",
      "aired_on": "Sep 2016 - Sep 2016",
      "members": 2346190
    },
    {
      "title": "3-gatsu no Lion 2nd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/3/88469.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season",
      "myanimelist_id": 35180,
      "rank": 18,
      "score": 8.92,
      "type": "TV (22 eps)",
      "aired_on": "Oct 2017 - Mar 2018",
      "members": 404438
    },
    {
      "title": "Code Geass: Hangyaku no Lelouch R2",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1088/135089.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2",
      "myanimelist_id": 2904,
      "rank": 19,
      "score": 8.91,
      "type": "TV (25 eps)",
      "aired_on": "Apr 2008 - Sep 2008",
      "members": 1790919
    },
    {
      "title": "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
      "picture_url": "https://cdn.myanimelist.net/images/anime/10/51723.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare",
      "myanimelist_id": 15335,
      "rank": 20,
      "score": 8.9,
      "type": "Movie (1 eps)",
      "aired_on": "Jul 2013 - Jul 2013",
      "members": 242120
    },
    {
      "title": "Kusuriya no Hitorigoto",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1708/138033.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto",
      "myanimelist_id": 54492,
      "rank": 21,
      "score": 8.9,
      "type": "TV (24 eps)",
      "aired_on": "Oct 2023 - Mar 2024",
      "members": 415199
    },
    {
      "title": "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/51535/Shingeki_no_Kyojin__The_Final_Season_-_Kanketsu-hen",
      "myanimelist_id": 51535,
      "rank": 22,
      "score": 8.89,
      "type": "TV Special (2 eps)",
      "aired_on": "Mar 2023 - Nov 2023",
      "members": 657261
    },
    {
      "title": "Gintama.: Shirogane no Tamashii-hen - Kouhan-sen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1776/96566.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen",
      "myanimelist_id": 37491,
      "rank": 23,
      "score": 8.88,
      "type": "TV (14 eps)",
      "aired_on": "Jul 2018 - Oct 2018",
      "members": 200364
    },
    {
      "title": "Monster",
      "picture_url": "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/19/Monster",
      "myanimelist_id": 19,
      "rank": 24,
      "score": 8.88,
      "type": "TV (74 eps)",
      "aired_on": "Apr 2004 - Sep 2005",
      "members": 1131570
    },
    {
      "title": "Owarimonogatari 2nd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/6/87322.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season",
      "myanimelist_id": 35247,
      "rank": 25,
      "score": 8.87,
      "type": "TV Special (7 eps)",
      "aired_on": "Aug 2017 - Aug 2017",
      "members": 401473
    },
    {
      "title": "Violet Evergarden Movie",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1825/110716.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/37987/Violet_Evergarden_Movie",
      "myanimelist_id": 37987,
      "rank": 26,
      "score": 8.86,
      "type": "Movie (1 eps)",
      "aired_on": "Sep 2020 - Sep 2020",
      "members": 617337
    },
    {
      "title": "Boku no Kokoro no Yabai Yatsu 2nd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1643/138581.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/55690/Boku_no_Kokoro_no_Yabai_Yatsu_2nd_Season",
      "myanimelist_id": 55690,
      "rank": 27,
      "score": 8.85,
      "type": "TV (13 eps)",
      "aired_on": "Jan 2024 - Mar 2024",
      "members": 183623
    },
    {
      "title": "Kimi no Na wa.",
      "picture_url": "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/32281/Kimi_no_Na_wa",
      "myanimelist_id": 32281,
      "rank": 28,
      "score": 8.84,
      "type": "Movie (1 eps)",
      "aired_on": "Aug 2016 - Aug 2016",
      "members": 2758793
    },
    {
      "title": "Jujutsu Kaisen 2nd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/51009/Jujutsu_Kaisen_2nd_Season",
      "myanimelist_id": 51009,
      "rank": 29,
      "score": 8.82,
      "type": "TV (23 eps)",
      "aired_on": "Jul 2023 - Dec 2023",
      "members": 957674
    },
    {
      "title": "Kingdom 3rd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1443/111830.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/40682/Kingdom_3rd_Season",
      "myanimelist_id": 40682,
      "rank": 30,
      "score": 8.82,
      "type": "TV (26 eps)",
      "aired_on": "Apr 2020 - Oct 2021",
      "members": 104897
    },
    {
      "title": "Gintama.: Shirogane no Tamashii-hen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/12/89603.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/36838/Gintama__Shirogane_no_Tamashii-hen",
      "myanimelist_id": 36838,
      "rank": 31,
      "score": 8.81,
      "type": "TV (12 eps)",
      "aired_on": "Jan 2018 - Mar 2018",
      "members": 214359
    },
    {
      "title": "Vinland Saga Season 2",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1170/124312.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2",
      "myanimelist_id": 49387,
      "rank": 32,
      "score": 8.81,
      "type": "TV (24 eps)",
      "aired_on": "Jan 2023 - Jun 2023",
      "members": 622358
    },
    {
      "title": "Mob Psycho 100 II",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1918/96303.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/37510/Mob_Psycho_100_II",
      "myanimelist_id": 37510,
      "rank": 33,
      "score": 8.79,
      "type": "TV (13 eps)",
      "aired_on": "Jan 2019 - Apr 2019",
      "members": 1542249
    },
    {
      "title": "Kizumonogatari III: Reiketsu-hen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1084/112813.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/31758/Kizumonogatari_III__Reiketsu-hen",
      "myanimelist_id": 31758,
      "rank": 34,
      "score": 8.78,
      "type": "Movie (1 eps)",
      "aired_on": "Jan 2017 - Jan 2017",
      "members": 465346
    },
    {
      "title": "Shingeki no Kyojin: The Final Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
      "myanimelist_id": 40028,
      "rank": 35,
      "score": 8.78,
      "type": "TV (16 eps)",
      "aired_on": "Dec 2020 - Mar 2021",
      "members": 2014259
    },
    {
      "title": "Bocchi the Rock!",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1448/127956.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/47917/Bocchi_the_Rock",
      "myanimelist_id": 47917,
      "rank": 36,
      "score": 8.78,
      "type": "TV (12 eps)",
      "aired_on": "Oct 2022 - Dec 2022",
      "members": 581933
    },
    {
      "title": "Haikyuu!! Karasuno Koukou vs. Shiratorizawa Gakuen Koukou",
      "picture_url": "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/32935/Haikyuu_Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou",
      "myanimelist_id": 32935,
      "rank": 37,
      "score": 8.78,
      "type": "TV (10 eps)",
      "aired_on": "Oct 2016 - Dec 2016",
      "members": 1211848
    },
    {
      "title": "Hajime no Ippo",
      "picture_url": "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/263/Hajime_no_Ippo",
      "myanimelist_id": 263,
      "rank": 38,
      "score": 8.77,
      "type": "TV (75 eps)",
      "aired_on": "Oct 2000 - Mar 2002",
      "members": 599270
    },
    {
      "title": "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1670/130060.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/52198/Kaguya-sama_wa_Kokurasetai__First_Kiss_wa_Owaranai",
      "myanimelist_id": 52198,
      "rank": 39,
      "score": 8.77,
      "type": "Movie (1 eps)",
      "aired_on": "Dec 2022 - Dec 2022",
      "members": 270632
    },
    {
      "title": "Sen to Chihiro no Kamikakushi",
      "picture_url": "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi",
      "myanimelist_id": 199,
      "rank": 40,
      "score": 8.77,
      "type": "Movie (1 eps)",
      "aired_on": "Jul 2001 - Jul 2001",
      "members": 1865509
    },
    {
      "title": "Monogatari Series: Second Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1807/121534.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/17074/Monogatari_Series__Second_Season",
      "myanimelist_id": 17074,
      "rank": 41,
      "score": 8.76,
      "type": "TV (26 eps)",
      "aired_on": "Jul 2013 - Dec 2013",
      "members": 672884
    },
    {
      "title": "Shingeki no Kyojin: The Final Season Part 2",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2",
      "myanimelist_id": 48583,
      "rank": 42,
      "score": 8.76,
      "type": "TV (12 eps)",
      "aired_on": "Jan 2022 - Apr 2022",
      "members": 1306429
    },
    {
      "title": "The First Slam Dunk",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1745/129284.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/45649/The_First_Slam_Dunk",
      "myanimelist_id": 45649,
      "rank": 43,
      "score": 8.76,
      "type": "Movie (1 eps)",
      "aired_on": "Dec 2022 - Dec 2022",
      "members": 45582
    },
    {
      "title": "Vinland Saga",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/37521/Vinland_Saga",
      "myanimelist_id": 37521,
      "rank": 44,
      "score": 8.75,
      "type": "TV (24 eps)",
      "aired_on": "Jul 2019 - Dec 2019",
      "members": 1532206
    },
    {
      "title": "Cowboy Bebop",
      "picture_url": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/1/Cowboy_Bebop",
      "myanimelist_id": 1,
      "rank": 45,
      "score": 8.75,
      "type": "TV (26 eps)",
      "aired_on": "Apr 1998 - Apr 1999",
      "members": 1877418
    },
    {
      "title": "Kimetsu no Yaiba: Yuukaku-hen",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen",
      "myanimelist_id": 47778,
      "rank": 46,
      "score": 8.75,
      "type": "TV (11 eps)",
      "aired_on": "Dec 2021 - Feb 2022",
      "members": 1446619
    },
    {
      "title": "Kingdom 4th Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1566/122794.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/50160/Kingdom_4th_Season",
      "myanimelist_id": 50160,
      "rank": 47,
      "score": 8.74,
      "type": "TV (26 eps)",
      "aired_on": "Apr 2022 - Oct 2022",
      "members": 65785
    },
    {
      "title": "Kingdom 5th Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1050/139641.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/53223/Kingdom_5th_Season",
      "myanimelist_id": 53223,
      "rank": 48,
      "score": 8.74,
      "type": "TV (13 eps)",
      "aired_on": "Jan 2024 - Mar 2024",
      "members": 36106
    },
    {
      "title": "Shiguang Dailiren",
      "picture_url": "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/44074/Shiguang_Dailiren",
      "myanimelist_id": 44074,
      "rank": 49,
      "score": 8.74,
      "type": "ONA (11 eps)",
      "aired_on": "Apr 2021 - Jul 2021",
      "members": 371434
    },
    {
      "title": "Mushishi Zoku Shou 2nd Season",
      "picture_url": "https://cdn.myanimelist.net/images/anime/9/68095.jpg",
      "myanimelist_url": "https://myanimelist.net/anime/24701/Mushishi_Zoku_Shou_2nd_Season",
      "myanimelist_id": 24701,
      "rank": 50,
      "score": 8.73,
      "type": "TV (10 eps)",
      "aired_on": "Oct 2014 - Dec 2014",
      "members": 268703
    }
  ];

const TopAnime = () => {
//   const [animeData, setAnimeData] = useState<AnimeItem[] | null>(null);

//   useEffect(() => {
//     const fetchTopAnime = async () => {
//       try {
//         const response = await fetch(
//           'https://myanimelist.p.rapidapi.com/anime/top/all',
//           {
//             headers: {
//               'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
//               'x-rapidapi-key': '03dc7223ffmsh66934660fc2f8dep1e8c36jsn2191959a91d5',
//             },
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data)
//           setAnimeData(data);
//         } else {
//           console.error('Error fetching top anime data:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching top anime data:', error);
//       }
//     };

//     fetchTopAnime();
//   }, []);

//   if (!animeData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className='bg-Black'>
      <h1 className="text-Tangerine text-4xl font-bold mb-4 text-center">Top 50 Anime</h1>
      {/* <ul>
        {animeData.map((item, index) => (
          <li key={index}>
            <h3><a href={item.myanimelist_url}>{item.title}</a></h3>
            <img src={item.picture_url}></img>
            <p>Rank: {item.rank}</p>
            <p>Score: {item.score}</p>
            <p>Type: {item.type}</p>
            
          </li>
        ))}
      </ul> */}

    <div className="flex flex-wrap justify-center pr-2 pl-2 w-full">
        {listTop50.map((item, index) => (
          <div 
          key={index}
          className="w-1/5 ml-10 border border-solid border-Tangerine mb-10 pt-5 pb-5 rounded-xl"
          >
            <h3 className="text-Sand-Dollar font-bold text-center mb-1"> 
                <Link href={item.myanimelist_url}>{item.title}</Link>
            </h3>
            <div className='flex justify-center'>
                <img 
                    src={item.picture_url}
                    className="rounded"
                ></img>
            </div>
            <p className="text-center text-Sand-Dollar">Rank: {item.rank}</p>
            <p className="text-center text-Sand-Dollar">Score: {item.score}/10</p>
            <p className="text-center text-Sand-Dollar">Type: {item.type}</p>
            
          </div>
        ))}
    </div>

    </div>
  );
};

export default TopAnime;