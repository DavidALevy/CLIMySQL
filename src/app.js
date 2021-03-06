require ("./db/connection")
const yargs = require("yargs");
const { addMovie, listMovies, updateActor, deleteMovie, findMovie, updateRating ,addActor,listActors} = require("./movie/movieMethods");
const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addMovie({ title: args.title, actor: args.actor, rating: args.rating });
            console.log("adding...")
            break;
        case "list":
            listMovies();
            break;
        case "findMovie":
            findMovie({ title: args.title});
            break;
        case "updateActor":
            updateActor({ title: args.title}, {actor: args.actor });
            break;
        case "updateRating":
            updateRating({ title: args.title}, {rating: args.rating });
            break;
        case "deleteMovie":
            deleteMovie({ title: args.title });
            break;
        
            case "addActor":
            addActor({ actor: args.actor, DOB:args.DOB });
            console.log("adding...")
            break;
            case "listActors":
                listActors();
                break;
        default:
            console.log("Incorrect command");      
    }
}
app(yargs.argv);