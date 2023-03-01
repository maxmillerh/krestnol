var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var main1 = document.getElementById('main1');
var main2 = document.getElementById('main2');
var index = true;
var id1;
var id2;
var id3;
var id4;
var id5;
var id6;
var id7;
var id8;
var id9;

btn1.onclick = function () {
	if (btn1.innerHTML == '') {
		if (index == true) {
			btn1.innerHTML = 'X'
			index = !index;
			id1 = true;

			if (id1 == true && id2 == true && id3 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(id1 == true && id5 == true && id9 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id1 == true && id4 == true && id7 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn1.innerHTML = 'O'
			index = !index;
			id1 = false;
			if (id1 == false && id2 == false && id3 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(id1 == false && id5 == false && id9 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id1 == false && id4 == false && id7 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn2.onclick = function () {
	if (btn2.innerHTML == '') {
		if (index == true) {
			btn2.innerHTML = 'X'
			index = !index;
			id2 = true;
			if (id1 == true && id2 == true && id3 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id2 == true && id5 == true && id8 == true){
				alert('Победили крестики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn2.innerHTML = 'O'
			index = !index;
			id2 = false;
			if (id1 == false && id2 == false && id3 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id2 == false && id5 == false && id8 == false){
				alert('Победили нолики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn3.onclick = function () {
	if (btn3.innerHTML == '') {
		if (index == true) {
			btn3.innerHTML = 'X'
			index = !index;
			id3 = true;
			if (id1 == true && id2 == true && id3 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id7 == true && id5 == true && id3 == true){
				alert('Победили крестики!!');
				btn7.classList.add("cRed");
				btn5.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id9 == true && id6 == true && id3 == true){
				alert('Победили крестики!!');
				btn9.classList.add("cRed");
				btn6.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn3.innerHTML = 'O'
			index = !index;
			id3 = false;
			if (id1 == false && id2 == false && id3 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn2.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id7 == false && id5 == false && id3 == false){
				alert('Победили нолики!!');
				btn7.classList.add("cRed");
				btn5.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(	id9 == false && id6 == false && id3 == false){
				alert('Победили нолики!!');
				btn9.classList.add("cRed");
				btn6.classList.add("cRed");
				btn3.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn4.onclick = function () {
	if (btn4.innerHTML == '') {
		if (index == true) {
			btn4.innerHTML = 'X'
			index = !index;
			id4 = true;
			if (id1 == true && id4 == true && id7 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id4 == true && id5 == true && id6 == true){
				alert('Победили крестики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn4.innerHTML = 'O'
			index = !index;
			id4 = false;
			if (id1 == false && id4 == false && id7 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id4 == false && id5 == false && id6 == false){
				alert('Победили нолики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn5.onclick = function () {
	if (btn5.innerHTML == '') {
		if (index == true) {
			btn5.innerHTML = 'X'
			index = !index;
			id5 = true;
			if (id2 == true && id5 == true && id8 == true){
				alert('Победили крестики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(	id4 == true && id5 == true && id6 == true){
				alert('Победили крестики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(	id1 == true && id5 == true && id9 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id3 == true && id5 == true && id7 == true){
				alert('Победили крестики!!');
				btn3.classList.add("cRed");
				btn5.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn5.innerHTML = 'O'
			index = !index;
			id5 = false;
			if (id2 == false && id5 == false && id8 == false){
				alert('Победили нолики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(	id4 == false && id5 == false && id6 == false){
				alert('Победили нолики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(	id1 == false && id5 == false && id9 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id3 == false && id5 == false && id7 == false){
				alert('Победили нолики!!');
				btn3.classList.add("cRed");
				btn5.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn6.onclick = function () {
	if (btn6.innerHTML == '') {
		if (index == true) {
			btn6.innerHTML = 'X'
			index = !index;
			id6 = true;
			if (id3 == true && id6 == true && id9 == true){
				alert('Победили крестики!!');
				btn3.classList.add("cRed");
				btn6.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id4 == true && id5 == true && id6 == true){
				alert('Победили крестики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn6.innerHTML = 'O'
			index = !index;
			id6 = false;
			if (id3 == false && id6 == false && id9 == false){
				alert('Победили нолики!!');
				btn3.classList.add("cRed");
				btn6.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id4 == false && id5 == false && id6 == false){
				alert('Победили нолики!!');
				btn4.classList.add("cRed");
				btn5.classList.add("cRed");
				btn6.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn7.onclick = function () {
	if (btn7.innerHTML == '') {
		if (index == true) {
			btn7.innerHTML = 'X'
			index = !index;
			id7 = true;
			if (id1 == true && id4 == true && id7 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id3 == true && id5 == true && id7 == true){
				alert('Победили крестики!!');
				btn3.classList.add("cRed");
				btn5.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id7 == true && id8 == true && id9 == true){
				alert('Победили крестики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn7.innerHTML = 'O'
			index = !index;
			id7 = false;
			if (id1 == false && id4 == false && id7 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn4.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id3 == false && id5 == false && id7 == false){
				alert('Победили нолики!!');
				btn3.classList.add("cRed");
				btn5.classList.add("cRed");
				btn7.classList.add("cRed");
			}else if(	id7 == false && id8 == false && id9 == false){
				alert('Победили нолики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn8.onclick = function () {
	if (btn8.innerHTML == '') {
		if (index == true) {
			btn8.innerHTML = 'X'
			index = !index;
			id8 = true;
			if (id2 == true && id5 == true && id8 == true){
				alert('Победили крестики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(	id7 == true && id8 == true && id9 == true){
				alert('Победили крестики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn8.innerHTML = 'O'
			index = !index;
			id8 = false;
			if (id2 == false && id5 == false && id8 == false){
				alert('Победили нолики!!');
				btn2.classList.add("cRed");
				btn5.classList.add("cRed");
				btn8.classList.add("cRed");
			}else if(	id7 == false && id8 == false && id9 == false){
				alert('Победили нолики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}

btn9.onclick = function () {
	if (btn9.innerHTML == '') {
		if (index == true) {
			btn9.innerHTML = 'X'
			index = !index;
			id9 = true;
			if (id3 == true && id6 == true && id9 == true){
				alert('Победили крестики!!');
				btn3.classList.add("cRed");
				btn6.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id1 == true && id5 == true && id9 == true){
				alert('Победили крестики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id7 == true && id8 == true && id9 == true){
				alert('Победили крестики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		} else {
			btn9.innerHTML = 'O'
			index = !index;
			id9 = false;
			if (id3 == false && id6 == false && id9 == false){
				alert('Победили нолики!!');
				btn3.classList.add("cRed");
				btn6.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id1 == false && id5 == false && id9 == false){
				alert('Победили нолики!!');
				btn1.classList.add("cRed");
				btn5.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(	id7 == false && id8 == false && id9 == false){
				alert('Победили нолики!!');
				btn7.classList.add("cRed");
				btn8.classList.add("cRed");
				btn9.classList.add("cRed");
			}else if(id1 != null && id2 != null && id3 != null && id4 != null && 
				id5 != null && id6 != null && id7 != null && id8 != null && id9 != null){
				alert('Ничья!!');
			}else { }
		}
	}
}



