import Anime from "../_components/Anime"
export default function GetAnime(
    {params,}:{
        params : {animeID: string}
    }

){
    return (
        <div>
            <h1>Anime {params.animeID}</h1>
            <Anime id={params.animeID}></Anime>
        </div>
    )
}