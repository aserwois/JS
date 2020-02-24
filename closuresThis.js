function specialMultiply(a, b) {
    if (b == null) {
        return function (b) {
            return a * b;
        };
    }
    return a * b;
}

specialMultiply(3)(4); // 12