const {Actor,Movie} = require("./movieModels");


exports.addMovie=async(movieObj)=>{
try{console.log(movieObj)
    await Movie.sync();
    await Movie.create(movieObj)
    console.log( `Successfully created ${movieObj.title}`);
}catch(error){
    console.log(error)
}}

exports.listMovies=async()=>{
    try{
        console.log(await Movie.findAll({}));
    }catch(error){
        console.log(error)
    }
}

exports.findMovie = async(movieOb)=>{
    try{
 console.log(await Movie.findOne({ where: movieOb }));
    }catch(error){
        console.log(error)
    }};

exports.updateActor = async (movieOb, updateActor) => {
    try {
        await Movie.update( updateActor , {
            where: movieOb            
          });
        console.log(`${movieOb.title} has updated "actor" to ${updateActor.actor}`)
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateRating = async (movieOb, updatedRating) => {
    try {
        await Movie.update(
            updatedRating,{where:movieOb})
        console.log(`${movieOb.title} has updated "rating" to ${updatedRating.rating}`);
    }
    catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieOb) => {
    try {
        await Movie.destroy({where: movieOb}) 
        console.log(`${movieOb.title} has been deleted.`)
        
    } catch (error) {
        console.log(error);
    }};
    exports.addActor=async(movieObj)=>{
        try{console.log(movieObj)
            await Actor.sync();
            await Actor.create(movieObj)
            console.log( `Successfully created ${movieObj.actor}`);
        }catch(error){
            console.log(error)
        }}
        exports.listActors=async()=>{
            try{
                console.log(await Actor.findAll({}));
            }catch(error){
                console.log(error)
            }
        }