//hold the numbers to display
var numbers = ['3', '2100'];


//function to determine the greater number
function greaterNumbers(x, y) {
    if (x > y) {
        console.log(numbers[0]);
    } else if (x < y) {
        console.log(numbers[1]);
    } else {
        console.log('They are equal to.');
    }
    return;
}

//to display numbers
console.log(numbers);

//display greater number of the two
greaterNumbers(3, 2100);