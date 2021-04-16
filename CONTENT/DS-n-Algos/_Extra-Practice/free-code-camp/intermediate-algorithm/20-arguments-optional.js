function addTogether(x) {
    var args = arguments;

    function numOrWhat(x) {
        if (Number.isInteger(x) === false) {
            return undefined;
        } else
        return x;
    }

    if (arguments.length > 1) {
        var a = numOrWhat(arguments[0]);
        var b = numOrWhat(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else
        return a + b;
    } else
    var c = arguments[0];
    if (numOrWhat(c)) {
        return function(missingArg) {
            if (c === undefined || numOrWhat(missingArg) === undefined) {
                return undefined;
            } else
            return c + missingArg;
        };
    }
}

console.log('answer: ', addTogether(2));
