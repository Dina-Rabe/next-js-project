export interface AnimeObject {
    title_ov: string;
    title_en: string;
    synopsis: string;
    alternative_titles: {
      synonyms: string;
      japanese: string;
      english: string;
    };
    information: {
      type: {
        type_name: string;
        type_url: string;
      }[];
      episodes: string;
      status: string;
      aired: string;
      premiered: {
        premiered_name: string;
        premiered_url: string;
      }[];
      broadcast: string;
      producers: {
        producers_name: string;
        producers_url: string;
      }[];
      licensors: string;
      studios: {
        studios_name: string;
        studios_url: string;
      }[];
      source: string;
      genre: string;
      theme: string;
      duration: string;
      rating: string;
      genres: {
        genre_name: string;
        genre_url: string;
      }[];
      demographic: {
        demographic_name: string;
        demographic_url: string;
      }[];
    };
    statistics: {
      score: number;
      ranked: number;
      popularity: number;
      members: number;
      favorites: number;
    };
    characters: {
      characters_name: string;
      picture_url: string;
      myanimelist_url: string;
      voice_actor_name: string;
      voice_actor_picture_url: string;
      voice_actor_myanimelist_url: string;
    }[];
    picture_url: string;
  }