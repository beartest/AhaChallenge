//找一个整数他可以整除1～10之间任意一个整数，并且要求这个整数越小越好——这是整数是2520。如果想找一个可以整除1～20之间任意一个整数，这个整数最小是？

//最小公倍数
function lcm(x, y) {
	var i = x;
	var j = y;
	while(i != j) {
		if(i > j) {
			i = i - j;
		} else {
			j = j - i;
		}
	}
	return x * y / i;
}

var lcmNum = 1;
var maxNum = 20;
for(var i = 2; i <= maxNum; i++) {
	lcmNum = lcm(lcmNum, i);
}
console.log(lcmNum);