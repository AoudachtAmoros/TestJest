// Methods
// for calcule first equation

function equation1(a, b) {
            if (a == 0 && b == 0) {
                        return 6
            }
            if (a != 0 && b == 0) {
                        return 0
            }
            if (a != 0 && b != 0) {
                        return -b / a
            }
}
// for calcule second equation
function equation2(a, b, c) {
            let D = delta(a, b, c)
            let result
            if (D == 0) {
                        result = -b / (2 * a)

            }
            if (D > 0) {
                        let x1 = (-b + Math.sqrt(D)) / (2 * a)
                        let x2 = (-b - Math.sqrt(D)) / (2 * a)
                        result = { "x1": x1, "x2": x2 }
            }
            if (D < 0) {
                        result = null
            }
            return result
}
// Calcul delta
function delta(a, b, c) {
            return (b * b) - (4 * a * c)
}
module.exports.equation1 = equation1;
module.exports.equation2 = equation2;

