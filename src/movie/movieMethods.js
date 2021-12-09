const Movie=require("./movieModels");
exports.addMovie=async(movieObj)=>{
try{
    await Movie.sync();
    await Movie.create({title:"Spiderman", actor:"Andrew G"})
    return `Successfully created ${movieObj.title}`;
}catch(error){
    console.log(error)
}

}
exports.listMovies=async()=>{
    try{
        console.log(await Movie.findAll({}));
    }catch(error){
        console.log(error)
    }
}