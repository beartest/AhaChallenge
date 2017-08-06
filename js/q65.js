//如果用英文写出数字1到5: one, two, three, four, five, 那么一共需要3 + 3 + 5 + 4 + 4 = 19个字母。
//如果数字1到1000（包含1000）用英文写出，那么一共需要多少个字母？
//注意: 空格和连字符不算在内。例如，342 (three hundred and forty-two)包含23个字母；
//115 (one hundred and fifteen)包含20个字母。"and" 的使用与英国标准一致。
var nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var numty = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var hundred = "hundred";
var and = "and";
var thousand = "thousand";

function letterCount(n) {
	var count = 0;
	if(n == 1000) {
		count = nums[0].length + thousand.length;
	} else if(n > 99) {
		count = nums[Math.floor(n / 100) - 1].length + hundred.length;
		if(n % 100 != 0) {
			count = count + and.length + letterCount(n % 100);
		}
	} else if(n > 19) {
		count = numty[Math.floor(n / 10) - 2].length;
		if(n % 10 != 0) {
			count += letterCount(n % 10);
		}
	} else if(n) {
		count = nums[n - 1].length;
	}
	return count;
}

var sum = 0;
for(var i = 1; i <= 1000; i++) {
	sum += letterCount(i);
}
console.log(sum);