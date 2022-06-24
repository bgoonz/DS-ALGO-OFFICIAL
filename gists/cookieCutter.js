(function () {
    var cookieParts = {};
    window.top.document.cookie.split("; ").forEach(cookieCutter);
    function cookieCutter(part) {
        var split = part.split("=");
        cookieParts[split[0]] = split[1];
    }
})();
