window.onload = function() {
	console.log("cats cats cats")
};

/*  ROUND 1:  Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string. To get you started, you'll need to loop through each string in the array and get the length of each one. Those lengths should be stored in a different array that you will return.  */

var arr = ["cat","dog","rat","parrot"];
var words = ["hello", "what", "is", "up", "dude"];

function lengths(arrayOfStrings) {
	arrLengths = [];
	for (var i = 0 ; i < arrayOfStrings.length ; i++) {
		arrLengths.push(arrayOfStrings[i].length);
	}
	return arrLengths;
}
lengths(arr);
lengths(words);

/*  ROUND 2:  Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.  */

function transmogrifier(number1, number2, number3) {
	return Math.pow(number1*number2, number3);
}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);

/*  ROUND 3:  Write a function called toonify that takes two parameters, accent and sentence.
	-If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
	-If the accent is "elmer", replace all "r" with "w".
	-Feel free to add your own accents as well!
	-If the accent is not recognized, just return the sentence as-is.*/

function toonify(accent, sentence) {
	if (accent === "daffy") {
		return sentence.replace(/s/g,'th');
	} else if (accent === "elmer") {
		return sentence.replace(/r/g,'w');
	} else {
		return sentence;
	}
}
toonify("daffy", "so you smell like sausage");
toonify("elmer", "say you're prayers, rabbit");

/*  ROUND 4:  Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string). */

function wordReverse(aString) {
	var arrayOfWords = (aString.split(" ")).reverse();
	var sentenceReverse = arrayOfWords.join(" ");
	return sentenceReverse;
}
wordReverse("Now I know what a TV dinner feels like");
/* OR */
function wordReverse(aString) {
	var sentenceReverse = ((aString.split(" ")).reverse()).join(" ");
	return sentenceReverse;
}
wordReverse("Now I know what a TV dinner feels like");

/*  ROUND 5:  Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space. */

function letterReverse(aString) {
	var arrayOfWords = aString.split(" ");
	var reverseWords =[];
	for (var i = 0; i < arrayOfWords.length ; i++) {
		reverseWords.push(arrayOfWords[i].split("").reverse().join(""));
	}
	var reverseWordSentence = reverseWords.join(" ");
	return reverseWordSentence;
}
letterReverse("Now I know what a TV dinner feels like");
letterReverse("Put Hans back on the line");

/* ROUND 6:  Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.  */

function longest(stringArray) {
	var stringLength = "" ;
	for (var i = 0; i < stringArray.length; i++) {
		if (stringArray[i].length > stringLength.length) {
			stringLength = stringArray[i];
		} else {
			/* this will return the 1st item in the array should words be the same length since stringLength is not being updated.*/
			stringLength = stringLength;
		}
	}
	return stringLength;
}
longest(["oh", "good", "grief"]);
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]);
longest(["catssss","gats","batssss"]);

/*  FINAL ROUND:  Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.  */

function repMaster(input, newFunction) {
	return newFunction(input) + " " + "proves that I am the rep MASTER!";

}
repMaster(('I Love Cats'), wordReverse);

/*  BONUS QUESTION 1:  write a function square(x) that returns the argument passed multiplied by itself then write the functions cube(x), x times x times x, and quad(x), x times x times x times x, using the function square(x).  Verify that square(2) === 4, cube(3) === 27, and that quad(4) === 256  */
function square(x) {
	return x*x;
}
function cube(x) {
	return x*x*x;
}
function quad(x, squareFunction) {
	return squareFunction(x)*squareFunction(x);
}
square(2);
cube(3);
quad(4, square);

/*  BONUS QUESTION 2:  write a function sum(numbers, twiceOrHalf).  It should expect an array of numbers as the first argument and an optional flag, twiceOrHalf, as the second argument.  If the flag is undefined, sum should return the total of the numbers in the array.  If the flag is truthy, it should return twice that sum.  If the flag is falsy but not undefined, it should return half that sum.  */

function sum(numbers, twiceOrHalf) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total = numbers[i] + total;
	}
	if (twiceOrHalf === true ) {
		return total*2 ;
	} else if (twiceOrHalf === false ) {
		return total/2 ;
	} else {
		return total ;
	}
}

var nums = [2, 4, 6];
sum(nums, false);
sum(nums, true);
sum(nums);

/*  BONUS QUESTION 3:  Write a function, max() that loops through zero or more arguments and returns the largest number in that list */

/* TRYING OUT SOME THINGS, NO SUCCESS YET */
function max() {
	for (var i = 0 ; i < max().length ; i++) {
		biggestNumber = 	
	}
}
max(-1, -7, -4);

function max() {
  return Math.max.apply(0, max());
}
max(-1, -7, -4);

function max(numberArray) {
	return numberArray.sort(sortNumber);
}
max(-1, -7, -4);








