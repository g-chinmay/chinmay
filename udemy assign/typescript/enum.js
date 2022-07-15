var color;
(function (color) {
    color[color["red"] = 2] = "red";
    color[color["blue"] = 3] = "blue";
    color[color["green"] = 4] = "green";
    color[color["orange"] = 5] = "orange";
    color[color["yellow"] = 9] = "yellow";
    color[color["purple"] = 10] = "purple";
    color["fade"] = "light";
    color[color["white"] = 4] = "white";
    color["transition"] = "minimum";
})(color || (color = {}));
;
console.log(color.red);
console.log(color.orange);
console.log(color.yellow);
console.log(color.purple);
// enum strings
console.log(color.fade);
console.log(color.transition);
