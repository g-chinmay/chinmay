function Pair(v1, v2) {
    return [v1, v2];
}
function demo(k1, k2) {
    return [k1, k2];
}
console.log(Pair(30, 40));
console.log(Pair("generic", "example"));
console.log(Pair(true, true));
console.log(demo(4, 16));
console.log(demo("sri", 90));
function creatr(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
console.log(creatr("Hello", 6));
