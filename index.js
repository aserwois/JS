var myStorage = {
    car: {
        inside: {
            gloveBox: "maps",
            passengerSeat: "crumbs"
        },
        outside: {
            trunk: "jack",
            dupa: "niewiem"
        }
    }
}

var myCarInside = myStorage.car.outside;

console.log(myCarInside);