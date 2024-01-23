// Helper functions for usse in app.js

function mean(arr) {
    if (arr.length === 0) {
        return 0;
    }
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
    }
    let mean = (sum / arr.length);
    return mean;
}

// counts the frequency of numbers in a given array of numbers.
function freqCounter(nums) {
    const numFreq = {};
    for (let num of nums) {
        if (numFreq[num]) {
            numFreq[num] += 1;
        }
        else {
            numFreq[num] = 1;
        }
    }
    return numFreq;
}

// finds the mode from the frequency counters returned obj.
function mode(arr) {
    let numFreq = freqCounter(arr);
    let mode = 0;
    for (const key in numFreq) {
        if (numFreq[key] > mode) {
            mode = key;
        }
    }
    return mode;
}

function median(arr) {
    
    arr.sort((a, b) => a - b);
  
    const middleIndex = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
        
    } else {
      return arr[middleIndex];
    }
  }
  
function valNumAndMakeArr(strings) {
    let arr = [];

    for (let i = 0; i < strings.length; i++){
        let numToVal = Number(strings[i]);

        if (Number.isNaN(numToVal)) {
            return Error(`The input ${strings[i]} is not a valid number`);
        }
        else {
            arr.push(numToVal);
        }
    }
    return arr;
}

module.exports = {
    mode,
    mean,
    median,
    valNumAndMakeArr
};
