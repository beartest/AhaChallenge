//某一天早晨，有一个猴子摘下了若干个桃子，当即就吃了一半，还不过瘾，又多吃了一个。第二天又将剩下的桃子吃了一半多一个。以后每天早上都吃了前一天剩下的一半多一个。到第10天的时候再想吃的时，发现只剩下一个桃子了。这个贪吃的猴子第一天究竟摘了多少个桃子呢？
var a = [];
a[9] = 1;
for(var i = 8; i >= 0; i--) {
	a[i] = (a[i + 1] + 1) * 2;
}
console.log(a[0]);