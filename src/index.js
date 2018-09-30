module.exports = function check(str, bracketsConfig) {
	const stack = [];
	for(let i = 0; i < str.length; i++){
		configLoop: for (let j = 0; j < bracketsConfig.length; j++){
			for( let k = 0; k < bracketsConfig[j].length; k++){
				if(str[i] === bracketsConfig[j][k]){
					if(k === 0 && stack[stack.length - 1] !== str[i]){
						stack.push(bracketsConfig[j][1]);
						break configLoop;
					}else if(stack.pop() === str[i]){
						break configLoop;
					} else {
						return false;
					}
					
				}
			}
			
		}

	
	}
	return !stack.length;
}
  
 

