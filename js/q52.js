//有一个3项的等差递增数列1487, 4817, 8147, 他们的公差是3330。但是这并不是一个普通的等差递增数列，仔细研究后你会发现两个特征。其一：这个数列每一项都是质数；其二：每一项都是由1，4，7，8这几个数组成。
//啊哈磊，在1位数，2位数和3位数中，都没有找到像上面一样的特殊数列，但是啊哈磊在4位数中发现了另外一组符合上述规则的特殊数列，你知道是什么吗？请输出这个特殊的等差递增数列。
//注意：一共有3个数，每个数用空格隔开，末尾没有多余的空格
function isPrimeNumber(n) {
	if(n == 1) {
		return false;
	}
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function getKey(num) {
	var s = num.toString().split("").sort().join("");
	return s;
}

var order = {};
for(var i = 1000; i < 10000; i++) {
	if(isPrimeNumber(i)) {
		var key = getKey(i);
		if(order[key] == null) {
			order[key] = [i];
		} else {
			order[key].push(i);
		}
	}
}

var res = [];
for(var key in order) {
	var arr = order[key];
	if(arr.length > 2) {
		for(var i = 0; i < arr.length - 2; i++) {
			for(var j = i + 1; j < arr.length - 1; j++) {
				for(var k = j + 1; k < arr.length; k++) {
					if(arr[j] - arr[i] == arr[k] - arr[j]) {
						console.log(arr[i] + " " + arr[j] + " " + arr[k]);
					}
				}
			}
		}
	}
}