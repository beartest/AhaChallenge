//1406357289是一个很有趣的数，首先他是由0~9这10个数字组成，而且每个数字只用了一次。我们把1406357289的第一位称作d1，第二位称作d2……，最后一位称作d10。你会发现以下规律
//d2d3d4=406 可以被 2 整除
//d3d4d5=063 可以被 3 整除
//d4d5d6=635 可以被 5 整除
//d5d6d7=357 可以被 7 整除
//d6d7d8=572 可以被 11 整除
//d7d8d9=728 可以被 13 整除
//d8d9d10=289 可以被 17 整除
//2,3,5,7,11,13,17恰好是连续的质数
//请问用0~9这10个数字可以组成多少个像1406357289这样的数呢？（每个数字只能使用一次）
//请输出所有可能的数之和！
function isPrimeNumber(n) {
	for(var i = 2; i <= Math.sqrt(n); i++) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

function check() {
	//将10位数，从左边第2位开始，每三位组成一个数。
	var nums = [];
	for(var i = 1; i < arr.length - 2; i++) {
		nums.push(arr[i] * 100 + arr[i + 1] * 10 + arr[i + 2]);
	}

	for(var p = 2; p <= nums[0]; p++) {
		if(isPrimeNumber(p) && nums[0] % p == 0) {
			var temp = p + 1;
			for(var i = 1; i < nums.length; i++) {
				while(!isPrimeNumber(temp)) {
					temp++;
				}
				if(nums[i] % temp != 0) {
					break;
				}
				temp++;
			}
			if(i == nums.length) {
				return true;
			}
		}
	}
	return false;
}

var arr = [];
var book = [];
var sum = 0;

function dfs(step) {
	if(step == 10) {
		if(check()) {
			//console.log(arr);
			sum += Number.parseInt(arr.join(""));
		}
		return;
	}
	for(var i = 0; i < 10; i++) {
		if(book[i] != 1) {
			book[i] = 1;
			arr[step] = i;
			dfs(step + 1);
			book[i] = 0;
		}
	}
}
dfs(0);
console.log(sum);