const be = be();
function receivesAFunction(be){
    be();
}
function returnsANamedFunction() {
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am anonymous");
    };
}