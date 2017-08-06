//小明特别喜欢开关灯。现在有编号为1～100的灯初始状态是全开着的，现进行如下操作：
//编号是1的倍数的灯拨一下开关；
//编号是2的倍数的灯再拨一下开关；
//编号是3的倍数的灯再拨一下开关；
//…………
//如此直到100的倍数。
//问：此时还有多少盏灯仍然是开着的。
var lights = [];
for(var i = 0; i < 100; i++) {
	lights.push(true);
}

for(var i = 1; i <= 100; i++) {
	for(var j = 0; j < 100; j++) {
		if((j + 1) % i == 0) {
			lights[j] = !lights[j];
		}
	}
}

var num = 0;
for(var i = 0; i < 100; i++) {
	if(lights[i]) {
		num++;
	}
}

console.log(num);