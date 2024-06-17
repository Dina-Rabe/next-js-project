import Anime from "../_components/Anime"
export default function GetAnime(
    {params,}:{
        params : {animeID: string}
    }

){
    return (
        <>
            <div className="bg-Black w-full justify-center">
                <h1 className="text-Tangerine text-4xl font-bold mb-4 flex justify-center"> Anime {params.animeID}</h1>
                <Anime id={params.animeID}></Anime>
            </div>
                
        </>
        
    )
}