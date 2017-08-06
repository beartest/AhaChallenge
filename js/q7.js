//将20分解质因数20=2＊2＊5，5是最大的质因子。那么将987654321分解质因数，所得到的最大的质因子是？
var num = 987654321;
var res = 0;
while(res < num) {
	for(var i = 2; i <= num; i++) {
		if(num % i == 0) {
			num /= i;
			if(i > res) {
				res = i;
			}
			break;
		}
	}
}
console.log(res);