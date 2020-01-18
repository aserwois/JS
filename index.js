function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (100 > val > 10) {
        return "Over 10";
    }

    return "10 or under";
}

console.log(testGreaterThan(101));

