export default function GetAnime(
    {params,}:{
        params : {animeID: string}
    }

){
    return <h1>Anime {params.animeID}</h1>
}