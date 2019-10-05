module.exports = 
function check(str, bracketsConfig) { 
	
	let stack = [];
	
	let arrFromStr = str.split(''); 

	for (let i = 0; i <= arrFromStr.length-1; i++) {

		
		if(arrFromStr[0] == ')' || arrFromStr[0] == ']') {
			return false;
		} else if(arrFromStr[arrFromStr.length-1] == '(' || arrFromStr[arrFromStr.length-1] == '[') {
			return false;
		}
		
		if (arrFromStr[i] == "(" || arrFromStr[i] == "[" ||  arrFromStr[i] == "1" ||  arrFromStr[i] == "3" ||  arrFromStr[i] == "5") {
			stack.push(arrFromStr[i]);
		}; 
		if (arrFromStr[i] == ")" || arrFromStr[i] == "]") {
			if (arrFromStr[i] == ")" && stack[stack.length-1] == "(") {
				stack.pop();
			} else if (arrFromStr[i] == ")" && stack[stack.length-1] !== "(" ) {
				stack.push(arrFromStr[i]);
			 }
			 if (arrFromStr[i] == "]" && stack[stack.length-1] == "[") {
				stack.pop();
			} else if (arrFromStr[i] == "]" && stack[stack.length-1] !== "[" ) {
				stack.push(arrFromStr[i]);
			 }
		};
		
		if (arrFromStr[i] == "2" && stack[stack.length-1] == "1") {
			stack.pop();
		} else if (arrFromStr[i] == "2" && stack[stack.length-1] !== "1" ) {
			stack.push(arrFromStr[i]);
		 }
		 if (arrFromStr[i] == "4" && stack[stack.length-1] == "3") {
			stack.pop();
		} else if (arrFromStr[i] == "4" && stack[stack.length-1] !== "3" ) {
			stack.push(arrFromStr[i]);
		 }
		 if (arrFromStr[i] == "6" && stack[stack.length-1] == "5") {
			stack.pop();
		} else if (arrFromStr[i] == "6" && stack[stack.length-1] !== "5" ) {
			stack.push(arrFromStr[i]);
		 }


		if (arrFromStr[i] == "|" && stack[stack.length-1] == "|") {
			stack.pop();
		} else if (arrFromStr[i] == "|" && stack[stack.length-1] !== "|" ) {
			stack.push(arrFromStr[i]);
		}

		if (arrFromStr[i] == "7" && stack[stack.length-1] == "7") {
			stack.pop();
		} else if (arrFromStr[i] == "7" && stack[stack.length-1] !== "7" ) {
			stack.push(arrFromStr[i]);
		}
		if (arrFromStr[i] == "8" && stack[stack.length-1] == "8") {
			stack.pop();
		} else if (arrFromStr[i] == "8" && stack[stack.length-1] !== "8" ) {
			stack.push(arrFromStr[i]);
		}
		
		
	};

	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}

}