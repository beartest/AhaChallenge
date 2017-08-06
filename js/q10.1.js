//可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶，有的时候一次爬三个台阶。如果这个楼梯有36个台阶，小明一共有多少种爬法呢？
var stair = 36;
var fn = [1, 2, 4];

for(var i = 3; i < stair; i++) {
	fn[i] = fn[i - 1] + fn[i - 2] + fn[i - 3];
}
console.log(fn[stair - 1]);