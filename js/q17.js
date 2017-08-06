//一天，鬼谷子随意从2-99中选取了两个数。他把这两个数的和告诉了庞涓，把这两个数的乘积告诉了孙膑。但孙膑和庞涓彼此不知到对方得到的数。第二天，庞涓很有自信的对孙膑说：虽然我不知到这两个数是什麽，但我知道你一定也不知道。随后，孙膑说：我知道了。庞涓说：我也知道了。请问：这两个数是什么？
//注意：请按从小到大的顺序填写这两个数，并用一个空格隔开！
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

//是否为两质数之和
function isPrimeSum(n) {
	for(var i = 2; i < n; i++) {
		if(isPrimeNumber(i) && isPrimeNumber(n - i)) {
			return true;
		}
	}
	return false;
}

var arr = [];
for(var i = 2; i <= 99; i++) {
	for(var j = i + 1; j <= 99; j++) {
		var sum = i + j;
		if(sum > 53 || isPrimeSum((sum))) {
			continue;
		}
		var product = i * j;
		var matchnum = 0;
		for(var m = 2; m < Math.sqrt(product); m++) {
			if(product % m == 0) {
				if(!isPrimeSum(m + Math.floor(product / m))) {
					matchnum++;
				}
			}
		}
		if(matchnum == 1) {
			if(arr[sum] == undefined) {
				arr[sum] = [];
			}
			arr[sum].push([i, j]);
		}
	}
}
for(var i = 0; i < arr.length; i++) {
	if(arr[i] != undefined && arr[i].length == 1) {
		console.log(arr[i][0]);
	}
}