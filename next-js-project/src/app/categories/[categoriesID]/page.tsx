export default function ShowCategorie(
    {params,}:{
        params : {categoriesID: string}
    }

){
    return <h1> List of categorie {params.categoriesID} </h1>
}