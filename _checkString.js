function CheckStringPronun(input) {
    for (var i = 0; input.length - i > 4; i++) {
        var c = 0;
        for (var j = i; j < input.length; j++) {
            if (Object.values(checking).includes(input[j])) {
                c++;
            }
        }
        if (c === 4) {
            break;
        }
    }
    return true;
}
var checking;
(function (checking) {
    checking["A"] = "a";
    checking["E"] = "e";
    checking["I"] = "i";
    checking["O"] = "o";
    checking["U"] = "u";
})(checking || (checking = {}));
console.log(CheckStringPronun("pperufnjjuf"));
