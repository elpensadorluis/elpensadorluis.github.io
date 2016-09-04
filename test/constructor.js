/***********************************************************************
Fibonacci Finding (easy)

You're given three numbers: a, b, and n, and all you have to do is to find the number where

As the number can be very large, output it modulo .

Consider the following link: http://en.wikipedia.org/wiki/Fibonacci_number#Matrix_form

Input Format

First line contains a single integer - the number of tests. lines follow, each containing three integers: , and .

Constraints
1<=T<=1000
1<=a,b,n<=10^9

Output Format
f[n]
For each test case output a single integer .

Sample Input

8
2 3 1
9 1 7
9 8 3
2 4 9
1 7 2
1 8 1
4 3 1
3 7 5

Sample Output

3
85
25
178
8
8
3
44

Explanation

First test case is obvious.
Let's look through the second one

************************************************************************/
function SabioGuruStudio() {
		lines = [
		 " ____        _     _        ____                  ",
		 "/ ___|  __ _| |__ (_) ___  / ___|_   _ _ __ _   _ ",
		 "\\___ \\ / _` | '_ \\| |/ _ \\| |  _| | | | '__| | | |",
		 " ___) | (_| | |_) | | (_) | |_| | |_| | |  | |_| |",
		 "|____/ \\__,_|_.__/|_|\\___/ \\____|\\__,_|_|   \\__,_|",
		 "__________________________________________________",
		 "                                  www.SabioGuru.me"
		]

		for (i = 0; i < lines.length; i ++) {
				console.log(lines[i]);
		}
}
function inicio(archivo){
	var table = document.getElementById("myTable");
	$("tbody").children().remove()

//	document.write("<h1> Calculadora Fibonacci </h1>");
	var input = archivo;
	var input = input.split("\n");
	var n = parseInt(input[0]);
	//____IMPRIMIR_______________________________________________________________
	console.log("Valor de n: " + n);
//	document.write("<h2> Valores a Calcular </h2>");
	//____fin-Imprimir_________________________________________________________
	for (var i = 0; i <= n; i++) {
		input[i] = input[i].split(" ");
	}
	//____IMPRIMIR_______________________________________________________________
	console.log("primer ciclo for {} ");
		//____fin-Imprimir_________________________________________________________
	for (var i = 0; i < input.length; i++) {
		for(var j=0; j<input[i].length; j++) {
			input[i][j] = parseInt(input[i][j],10);
		}
	}
	//-.>>> IMPRIMIR_____________________________________________________________
//	document.write("<h3>");
		for (var i = 1; i < input.length -1; i++) {
//			document.write(i+" = [" + input[i]  +"] " );
//			document.write("<br/>");
		}
//	document.write("</h3>");
	//___________________________________________________________________________
//	document.write("<h2>Calculando valores de Fibonacci Fib(n)</h2> <h4>(con Algoritmo Matriz Optimizada para valores Fib(0) y Fib(1) aleatorios)</h4>");
//	document.write("<h3>");
	//document.write("<form>");
	//document.write("<table class=\"table table-striped\"><tbody>");
	for (var i = 1; i < input.length-1; i++) {
			/*
			if (n>=1 && n<=1000 && input[i][0]>=1 && input[i][0]<=1000000000 && input[i][1]>=1 && input[i][1]<=1000000000 && input[i][2]>=1 && input[i][2]<=1000) {
				var fib = {};
				(function() {
				    var sqrt_5  = Math.sqrt(5),
				        phi     = (1 + sqrt_5) / 2;
				    fib.round = function(n) {
				        return Math.floor(Math.pow(phi, n) / sqrt_5 + 0.5);
				    };
				})();
				(function() {
				    fib.loop = function(n) {
				        var i = 0,
				            j = 1;
				        while(n--) {
				            var tmp = i;
				            i = j;
				            j += tmp;
				        }
				        return i;
				    };
				})();
				(function () {
				    var cache = [0, 1];
				    fib.loop_cached = function(n) {
				        if(n >= cache.length) {
				            for(var i = cache.length; i <= n; ++i)
				                cache[i] = cache[i - 1] + cache[i - 2];
				        }
				        return cache[n];
				    };
				})();
				(function() {
				    var m;
				    var odd = [[1,1],[1,0]];
				    function matrix(a,b) {
				        var c=[[0,0],[0,0]];
				        var m1=(a[0][0]+a[1][1])*(b[0][0]+b[1][1]);
				        var m2=(a[1][0]+a[1][1])*b[0][0];
				        var m3=a[0][0]*(b[0][1]-b[1][1]);
				        var m4=a[1][1]*(b[1][0]-b[0][0]);
				        var m5=(a[0][0]+a[0][1])*b[1][1];
				        var m6=(a[1][0]-a[0][0])*(b[0][0]+b[0][1]);
				        var m7=(a[0][1]-a[1][1])*(b[1][0]+b[1][1]);
				        c[0][0]=m1+m4-m5+m7;
				        c[0][1]=m3+m5;
				        c[1][0]=m2+m4;
				        c[1][1]=m1-m2+m3+m6;
				        return c;
				    }
				    function mat(n) {
				        if(n > 1) {
				            mat(n/2);
				            m = matrix(m,m);
				        }
				        m = (n%2<1) ? m : matrix(m,odd);
				    }
				    fib.matrix = function(n) {
				        m = [[1,0],[0,1]];
				        mat(n-1);
				        return m[0][0];
				    };
				})();
				(function() {
				    var a;
				    function square() {
				        var a00 = a[0][0],
				            a01 = a[0][1],
				            a10 = a[1][0],
				            a11 = a[1][1];
				        var a10_x_a01 = a10 * a01,
				            a00_p_a11 = a00 + a11;
				        a[0][0] = a10_x_a01 + a00 * a00;
				        a[0][1] = a00_p_a11 * a01;
				        a[1][0] = a00_p_a11 * a10;
				        a[1][1] = a10_x_a01 + a11 * a11;
				    }
				    function powPlusPlus() {
				        var a01 = a[0][1],
				            a11 = a[1][1];
				        a[0][1] = a[0][0];
				        a[1][1] = a[1][0];
				        a[0][0] += a01;
				        a[1][0] += a11;
				    }
				    function compute(n) {
				        if(n > 1) {
				            compute(n >> 1);
				            square();
				            if(n & 1)
				                powPlusPlus();
				        }
				    }
				    fib.matrix_optimised = function(n) {
				        if(n == 0)
				            return 0;
				        a = [[1, 1], [1, 0]];
				        compute(n - 1);
				        return a[0][0];
				    };
				})();
				(function() {
				    var cache = {};
				    cache[0] = [[1, 0], [0, 1]];
				    cache[1] = [[1, 1], [1, 0]];
				    function mult(a, b) {
				        return [
				            [a[0][0] * b[0][0] + a[0][1] * b[1][0],
				                a[0][0] * b[0][1] + a[0][1] * b[1][1]],
				            [a[1][0] * b[0][0] + a[1][1] * b[1][0],
				                a[1][0] * b[0][1] + a[1][1] * b[1][1]]
				        ];
				    }
				    function compute(n) {
				        if(!cache[n]) {
				            var n_2 = n >> 1;
				            compute(n_2);
				            cache[n] = mult(cache[n_2], cache[n_2]);
				            if(n & 1)
				                cache[n] = mult(cache[1], cache[n]);
				        }
				    }
				    fib.matrix_cached = function(n) {
				        if(n == 0)
				            return 0;
				        compute(--n);
				        return cache[n][0][0];
				    };
				})();
				var bfiborig = fib.matrix_optimised(input[i][2]);
				var afiborig = fib.matrix_optimised(input[i][2]-1);
				var afib = input[i][0] * afiborig;
				var bfib = input[i][1] * bfiborig;
				var totalfib = afib + bfib;
				console.log(totalfib);
				document.write(i + " = [" + totalfib + "] <br/>");
			}//fin si
			*/
			if (input[i].length<1 || input[i].length>1000 || input[i][0]<1 || input[i][0]>1000000000 || input[i][1]<1 || input[i][1]>1000000000 || input[i][2]<1 || input[i][2]>1000) {
				console.log("Valores fuera del rango permitido");
				var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				cell1.innerHTML = "Fib(0) = " + input[i][0];
				cell2.innerHTML = "Fib(1) = " + input[i][1];
				cell3.innerHTML = "Fib(" + input[i][2] + ") = <strong>Valor de n fuera del rango permitido</strong>";
	//			document.write("<tr><td>Fib(0) = " + input[i][0] + "</td><td>Fib(1) = " + input[i][1] + "</td><td> <strong> Valor de \"n\" fuera del rango permitido </strong> <td></td></tr>");

				//____fin-Imprimir_________________________________________________________
			}
			else {
				 var fib = {};
					(function() {
							var sqrt_5  = Math.sqrt(5),
									phi     = (1 + sqrt_5) / 2;
							fib.round = function(n) {
									return Math.floor(Math.pow(phi, n) / sqrt_5 + 0.5);
							};
					})();
					(function() {
							fib.loop = function(n) {
									var i = 0,
											j = 1;
									while(n--) {
											var tmp = i;
											i = j;
											j += tmp;
									}
									return i;
							};
					})();
					(function () {
							var cache = [0, 1];
							fib.loop_cached = function(n) {
									if(n >= cache.length) {
											for(var i = cache.length; i <= n; ++i)
													cache[i] = cache[i - 1] + cache[i - 2];
									}
									return cache[n];
							};
					})();
					(function() {
							var m;
							var odd = [[1,1],[1,0]];
							function matrix(a,b) {
									var c=[[0,0],[0,0]];
									var m1=(a[0][0]+a[1][1])*(b[0][0]+b[1][1]);
									var m2=(a[1][0]+a[1][1])*b[0][0];
									var m3=a[0][0]*(b[0][1]-b[1][1]);
									var m4=a[1][1]*(b[1][0]-b[0][0]);
									var m5=(a[0][0]+a[0][1])*b[1][1];
									var m6=(a[1][0]-a[0][0])*(b[0][0]+b[0][1]);
									var m7=(a[0][1]-a[1][1])*(b[1][0]+b[1][1]);
									c[0][0]=m1+m4-m5+m7;
									c[0][1]=m3+m5;
									c[1][0]=m2+m4;
									c[1][1]=m1-m2+m3+m6;
									return c;
							}
							function mat(n) {
									if(n > 1) {
											mat(n/2);
											m = matrix(m,m);
									}
									m = (n%2<1) ? m : matrix(m,odd);
							}
							fib.matrix = function(n) {
									m = [[1,0],[0,1]];
									mat(n-1);
									return m[0][0];
							};
					})();
					(function() {
							var a;
							function square() {
									var a00 = a[0][0],
											a01 = a[0][1],
											a10 = a[1][0],
											a11 = a[1][1];
									var a10_x_a01 = a10 * a01,
											a00_p_a11 = a00 + a11;
									a[0][0] = a10_x_a01 + a00 * a00;
									a[0][1] = a00_p_a11 * a01;
									a[1][0] = a00_p_a11 * a10;
									a[1][1] = a10_x_a01 + a11 * a11;
							}
							function powPlusPlus() {
									var a01 = a[0][1],
											a11 = a[1][1];
									a[0][1] = a[0][0];
									a[1][1] = a[1][0];
									a[0][0] += a01;
									a[1][0] += a11;
							}
							function compute(n) {
									if(n > 1) {
											compute(n >> 1);
											square();
											if(n & 1)
													powPlusPlus();
									}
							}
							fib.matrix_optimised = function(n) {
									if(n == 0)
											return 0;
									a = [[1, 1], [1, 0]];
									compute(n - 1);
									return a[0][0];
							};
					})();
					(function() {
							var cache = {};
							cache[0] = [[1, 0], [0, 1]];
							cache[1] = [[1, 1], [1, 0]];
							function mult(a, b) {
									return [
											[a[0][0] * b[0][0] + a[0][1] * b[1][0],
													a[0][0] * b[0][1] + a[0][1] * b[1][1]],
											[a[1][0] * b[0][0] + a[1][1] * b[1][0],
													a[1][0] * b[0][1] + a[1][1] * b[1][1]]
									];
							}
							function compute(n) {
									if(!cache[n]) {
											var n_2 = n >> 1;
											compute(n_2);
											cache[n] = mult(cache[n_2], cache[n_2]);
											if(n & 1)
													cache[n] = mult(cache[1], cache[n]);
									}
							}
							fib.matrix_cached = function(n) {
									if(n == 0)
											return 0;
									compute(--n);
									return cache[n][0][0];
							};
					})();
					var bfiborig = fib.matrix_optimised(input[i][2]);
					var afiborig = fib.matrix_optimised(input[i][2]-1);
					var afib = input[i][0] * afiborig;
					var bfib = input[i][1] * bfiborig;
					var totalfib = afib + bfib;
					console.log(totalfib);
					//document.write("<tr><td>Fib(0) = " + input[i][0] + "</td><td>Fib(1) = " + input[i][1] + "</td><td>Fib(" + input[i][2] + ") = " + totalfib + "</tr></td>");
//					var table = document.getElementById("myTable");
					var row = table.insertRow(-1);
    			var cell1 = row.insertCell(0);
    			var cell2 = row.insertCell(1);
					var cell3 = row.insertCell(2);
    			cell1.innerHTML = "Fib(0) = " + input[i][0];
    			cell2.innerHTML = "Fib(1) = " + input[i][1];
					cell3.innerHTML = "Fib(" + input[i][2] + ") = " + totalfib;



			}
			/*
			else {
				alert("Valores fuera del rango permitido, presione Ok para continuar...");
			}
			*/
	}
	//document.write("</tbody></table></form>");
	//document.write("</h3>");

	//document.write("<h2> Fin del Algoritmo </h2>");
}
