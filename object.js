// var movies = [
//     {
//         title: "Yes Man",
//         watched: true,
//         rating: 4.5
//     },
//     {
//         title: "Wojna",
//         watched: false,
//         rating: 1.5
//     },
//     {
//         title: "No man",
//         watched: false,
//         rating: 5
//     }
// ]

// movies.forEach(function(movie) {
//     if(movie.watched) {
//         console.log("I have seen that movie called " + movie.title + ". Rating of that is " + movie.rating + " stars.");
//     }
//     console.log("I have not seen that movie called " + movie.title + ". Rating of that is " + movie.rating + " stars.");
// })

var obj = {
    name: "Chuck",
    age: 45,
    isCool: true,
    friends: ["Bogdan","Mati"],
    add: function(x, y) {
        return x + y;
    }
}

obj.maybe = function() {
    return "I dont know!"
}