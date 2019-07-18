window.onload = function() {

 	// 数据容器
 	var left = 0; //被除数
 	var right = 0; //除数
 	var sum = 0; //和  

 	var numb = 0;     

 	function $(id) {
 		return document.getElementById(id);
 	}
 	// 运算函数
 	function operation(id) {
 		if ($("box").value != "0") {
 			if (left == 0) {
 				$("box").value = $("box").value + $(id).value;
 				left = parseFloat($("box").value);
 			}
 		}

 		numb = 0;
 	}

 	function figure(id) {


 		if (left == 0) {

 			if ($("box").value === "0") {
 				$("box").value = $(id).value;
 			} else {
 				$("box").value = $("box").value + $(id).value;
 			}
 		} else {
 			$("box").value = $("box").value + $(id).value;
 			var str = $("box").value;
 			var num = "";
 			for (var i = 0; i < str.length; i++) {
 				// 判断加减乘除
 				if (str[i] == "+") {
 					for (var j = i + 1; j < str.length; j++) {
 						num += str[j];

 					};
 					right = parseFloat(num);
 				} else if (str[i] == "-") {
 					for (var j = i + 1; j < str.length; j++) {
 						num += str[j];

 					};
 					right = parseFloat(num);
 				} else if (str[i] == "*") {
 					for (var j = i + 1; j < str.length; j++) {
 						num += str[j];

 					};
 					right = parseFloat(num);
 				} else if (str[i] == "/") {
 					for (var j = i + 1; j < str.length; j++) {
 						num += str[j];

 					};
 					right = parseFloat(num);
 				}
 			};
 		}

 		// 清空所有数据  
 		if (sum != 0) {
 			left = 0;
 			right = 0;
 			sum = 0;
 			numb = 0;
 			$("box").value = $(id).value;
 		}

 	}

 	$("one").onclick = function() {
 		figure("one");
 	}
 	$("two").onclick = function() {
 		figure("two");
 	}
 	$("three").onclick = function() {
 		figure("three");
 	}
 	$("four").onclick = function() {
 		figure("four");
 	}
 	$("five").onclick = function() {
 		figure("five");
 	}
 	$("six").onclick = function() {
 		figure("six");
 	}
 	$("seven").onclick = function() {
 		figure("seven");
 	}
 	$("eight").onclick = function() {
 		figure("eight");
 	}
 	$("nine").onclick = function() {
 		figure("nine");
 	}
 	$("zero").onclick = function() {
 		figure("zero");
 	}

 	// 加
 	$("add").onclick = function() {
 		operation("add");
 	}


 	//减
 	$("reduce").onclick = function() {
 		operation("reduce");
 	}

 	// 乘
 	$("ride").onclick = function() {
 		operation("ride");
 	}

 	// 除
 	$("division").onclick = function() {
 		operation("division");
 	}


 	$("round").onclick = function() {
 	
 		if (numb === 0 && sum == 0) {                      
 			$("box").value = $("box").value + $("round").value;
 			numb = ($("box").value); 
 		}

 	}

 	// 清空
 	$("res").onclick = function() {
 		if ($("box").value != "0") {
 			left = 0;
 			right = 0;
 			sum = 0;
 			numb = 0;
 			$("box").value = "0";
 		}
 	}
	// 清除
	$("back").onclick = function(){
		$("box").value = $("box").value.replace(/.$/,'')
	}
 	// 求和
 	$("sum").onclick = function() {
 		var symbol = "";
 		if (left != 0 && right != 0) {
 			for (var i = 0; i < $("box").value.length; i++) {
 				symbol = $("box").value[i];
 				if (symbol == "+") {
 					sum = left + right;
 					$("box").value = sum;
 				} else if (symbol == "-") {
 					sum = left - right;
 					$("box").value = sum;
 				} else if (symbol == "*") {
 					sum = left * right;
 					$("box").value = sum;

 				} else if (symbol == "/") {
 					sum = left / right;
 					$("box").value = sum;
 				}
 			};
 		}
 	}

 }
