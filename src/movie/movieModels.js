const sequelize=require("../db/connection");
const {DataTypes}=require("sequelize");

const Movie=sequelize.define("Movie",{
    title:{
        type: DataTypes.STRING,
        allowNull:false       
    },
    actor:{
        type: DataTypes.STRING
    },
    rating:{
        type:DataTypes.INTEGER
    }
},{tableName:'MovieX'}

);


// const Actor=sequelize.define("Actor",{
//     actor:{
//         type: DataTypes.STRING,
//         allowNull:false       
//     },
//     DOB:{
//         type: DataTypes.INTEGER,
//     },
    
// },{tableName:'ActorX'}

// );

// Movie.hasOne(Actor);
// Actor.belongsTo(Movie);

module.exports={Movie}
//module.exports={Actor}