console.log("test");

let suite = ["a", "b", "c", "d"];


function printReverse(array1) {

    for (let i = (array1.length - 1); i >= 0; i--) {
        console.log(array1[i]);
    }
}



function isUniform(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== firstElement) {
            return false;
        }
    }
    return true;
}

    function sumArray(suite3) {
        let result = 0;

        // for (let i = 0; i < suite3.length; i++) {
        //     result += suite3[i]

        // }

        suite3.forEach(x) {
             result += x;
        });
        console.log(result);
    }


    function max(suite4) {
        suite4.sort(function (a, b) { return a - b });
        suite4.reverse();
        console.log(suite4[0]);
    }