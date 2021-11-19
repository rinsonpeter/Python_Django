/**
 * Created by vaio on 06-08-2015.
 */
var first = function () {
    console.log('a called');
};
var second = function () {
    console.log('b called');
};
// module.exports = {
//     first: a,
//     second: b
// };
//Can be done like this=================================================
module.exports.a = function () {
    console.log('a called');
};
module.exports.b = function () {
    console.log('b called');
};
//=================================================================================
exports.a = function () {
    console.log('a called');
};
exports.b = function () {
    console.log('b called');
};
