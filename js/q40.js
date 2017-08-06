//在一个9×9格的大九宫格中有9个3×3格的小九宫格。默认已经在其中填写了一些数字，现在请在其它的空格上填入1到9的数字。每个数字在每个小九宫格内只能出现一次，每个数字在每行、每列也只能出现一次。请问下面这个数独有多少种不同的解法。
var matrix = [
	[0, 9, 0, 0, 0, 2, 0, 0, 1],
	[0, 0, 0, 0, 6, 0, 0, 0, 2],
	[0, 0, 0, 0, 0, 0, 4, 0, 0],
	[6, 0, 0, 0, 8, 0, 0, 0, 0],
	[0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 7, 0, 4, 0, 0, 0],
	[3, 6, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 7, 0, 0, 0, 5, 0, 0],
	[9, 5, 0, 0, 0, 7, 0, 0, 8]
];
var count = 0;

function check(x, y) {
	var curr = matrix[x][y];
	for(var i = 0; i < matrix.length; i++) {
		if(matrix[i][y] == curr && i != x) {
			return false;
		}
	}
	for(var j = 0; j < matrix[x].length; j++) {
		if(matrix[x][j] == curr && j != y) {
			return false;
		}
	}
	var startx = Math.floor(x / 3) * 3;
	var starty = Math.floor(y / 3) * 3;
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			if(matrix[startx + i][starty + j] == curr && (startx + i != x || starty + j != y)) {
				return false;
			}
		}
	}
	return true;
}

var count = 0;

function sudoku(x, y) {
	if(x == 9) {
		count++;
		return;
	}
	if(matrix[x][y] == 0) {
		for(var i = 1; i <= 9; i++) {
			matrix[x][y] = i;
			if(check(x, y)) {
				if(y == 8) {
					sudoku(x + 1, 0);
				} else {
					sudoku(x, y + 1);
				}
			}
		}
		matrix[x][y] = 0;
		return;
	} else {
		if(y == 8) {
			sudoku(x + 1, 0);
		} else {
			sudoku(x, y + 1);
		}
	}
}
sudoku(0, 0);

console.log(count);

function display() {
	var html = "";
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j++) {
			html = html + matrix[i][j] + " ";
		}
		html += "<br/>";
	}
	document.body.innerHTML = html;
}