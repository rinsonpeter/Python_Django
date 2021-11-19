/*
 * Created by vaio on 06-08-2015.
 * Exports Circle constructor
 */
function Circle(r) {

    function r_squared() {
        return Math.pow(r, 2);
    }
    function area() {
        return Math.PI * r_squared();
    }
    return area()
    
}
module.exports = Circle;

if (require.main === module) {
    console.log(Circle(2))
}
