var btnBot1 = document.getElementById('btnBot1');
var btnBot2 = document.getElementById('btnBot2');
var btnBot3 = document.getElementById('btnBot3');
var btnBot4 = document.getElementById('btnBot4');
var btnBot5 = document.getElementById('btnBot5');
var btnBot6 = document.getElementById('btnBot6');
var btnBot7 = document.getElementById('btnBot7');
var btnBot8 = document.getElementById('btnBot8');
var btnBot9 = document.getElementById('btnBot9');

var arr = [id1, id2, id3, id4, id5, id6, id7, id8, id9];
var arrBtn = [btnBot1, btnBot2, btnBot3, btnBot4, btnBot5, btnBot6, btnBot7, btnBot8, btnBot9];
/* var arr = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'id7', 'id8', 'id9']; */

btnBot1.onclick = function () {
	if (btnBot1.innerHTML == '') {
		btnBot1.innerHTML = 'X'
		id1 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == true && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == null && id6 == null && id7 == null && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} else if (id1 == true && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == false && id6 == null && id7 == null && id8 == null && id9 == true) {
			btnBot2.innerHTML = 'O'
			id2 = false;
		} */

	}
}

btnBot2.onclick = function () {
	if (btnBot2.innerHTML == '') {
		btnBot2.innerHTML = 'X'
		id2 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == true && id3 == null && id4 == null &&  // Если все пустые, кроме второго, то ноль в середину
			id5 == null && id6 == null && id7 == null && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} */



	}
}

btnBot3.onclick = function () {
	if (btnBot3.innerHTML == '') {
		btnBot3.innerHTML = 'X'
		id3 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == null && id3 == true && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == null && id6 == null && id7 == null && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} else if (id1 == true && id2 == false && id3 == true && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == false && id6 == null && id7 == false && id8 == true && id9 == true) {
			btnBot6.innerHTML = 'O'
			id6 = false;
		} */

	}
}

btnBot4.onclick = function () {
	if (btnBot4.innerHTML == '') {
		btnBot4.innerHTML = 'X'
		id4 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == null && id3 == null && id4 == true &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == null && id6 == null && id7 == null && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} else if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} */

	}
}

btnBot5.onclick = function () {
	if (btnBot5.innerHTML == '') {
		btnBot5.innerHTML = 'X'
		id5 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == true && id6 == null && id7 == null && id8 == null && id9 == null) {
			btnBot3.innerHTML = 'O'
			id3 = false;
		} */

	}
}

btnBot6.onclick = function () {
	if (btnBot6.innerHTML == '') {
		btnBot6.innerHTML = 'X'
		id6 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == null && id6 == true && id7 == null && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} */

	}
}

btnBot7.onclick = function () {
	if (btnBot7.innerHTML == '') {
		btnBot7.innerHTML = 'X'
		id7 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

/* 		if (id1 == null && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == null && id6 == null && id7 == true && id8 == null && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} */

	}
}

btnBot8.onclick = function () {
	if (btnBot8.innerHTML == '') {
		btnBot8.innerHTML = 'X'
		id8 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

	/* 	if (id1 == null && id2 == null && id3 == null && id4 == null &&  // Если все пустые, кроме второго, то ноль в середину
			id5 == null && id6 == null && id7 == null && id8 == true && id9 == null) {
			btnBot5.innerHTML = 'O'
			id5 = false;
		} else if (id1 == true && id2 == false && id3 == null && id4 == null &&  // Если все пустые, кроме первого, то ноль в середину
			id5 == false && id6 == null && id7 == null && id8 == true && id9 == true) {
			btnBot7.innerHTML = 'O'
			id7 = false;
		} */
	}
}



btnBot9.onclick = function () {
	if (btnBot9.innerHTML == '') {
		btnBot9.innerHTML = 'X'
		id9 = true;

		if (id1 != null && id2 != null && id3 != null && id4 != null &&
			id5 != null && id6 != null && id7 != null && id8 != null && id9 != null) {
			alert('Ничья!!');
		} else {
			for (var random = Math.round(Math.random() * (8)) ; arr[random] == null;) {
				if (arr[random] == null) {
					arr[random] = false;
					arrBtn[random].innerHTML = 'O';
				}
			}
		}

	}
}


