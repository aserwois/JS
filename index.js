var names = ["Hole","Eagle","Birdie","Par","Bogey","Double Bogey"];

function golfScore (par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return name[1];
    }

    return "Change Me";
}

golfScore(5, 4)
