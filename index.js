function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "delta"
            break;
        case 4:
            answer = "gamma"
            break;
        default:
            answer = "There is no case like this one!";
            break;
    }

    return answer;
}

console.log(caseInSwitch(5));