module.exports = function check(str, bracketsConfig) {
	
	let config = [].concat.apply([], bracketsConfig);
	let openBrackets = config.filter((item, i) => i % 2 === 0);
	let closeBrackets = config.filter((item, i) => i % 2 === 1);
	let arr = str.split('');
	let cache = []; // if the symbols in subarray are equal
	let stack = []; 

	for(let i = 0; i < arr.length; i++){
	    outer:
		for(let j = 0; j < openBrackets.length; j++){
		    if (openBrackets[j] === closeBrackets[j]){
		        if(arr[i] === cache[cache.length - 1]){
                      stack.pop();
                      cache.pop();
                  } else {
                    stack.push(arr[i]);
                    cache.push(arr[i]);  
                  }	
		        break outer;
		    } else if (arr[i] === openBrackets[j]) {
			    stack.push(arr[i]);
			    break outer;
			} else if (arr[i] === closeBrackets[j]) {
			    let index = config.indexOf(closeBrackets[j]);
				let tmp = config[index - 1];

				if (tmp !== stack.pop()) return false;
				break outer;
			}   
		}
	}
	
    return (stack.length === 0) ? true : false;
}