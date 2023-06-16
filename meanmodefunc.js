//this code is about mean and mode functions of given set of N integers. 

//function to find the mean of set of integer numbers.

function calculateMean(numbers){
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
   return sum / numbers.length;
}

//calculate to find the mode of numbers

function calculateMode(numbers){
    //mode is to find to maxFrequency of a number. The array of numbers can have one or more maxFrequency. To store
    // the frequency, first create an object.

    const frequencyMap = {};
    let maxFrequency =0;


    // this forEach function will give us maxFrequency in the numbers.
    numbers.forEach(number => {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;
        maxFrequency =Math.max(maxFrequency, frequencyMap[number]);
    });

    //bc of there can be more than one number that can have maxFrequency, let's do
    //an array to store the values.

    const modes =[];
    for(const number in frequencyMap){
        if(frequencyMap[number] === maxFrequency){
            //number saved as 'string', therefore you should use parseInt to convert string to int. 
            modes.push(parseInt(number));
        }
    }
    return modes;
}

const numbers = [2,3,3,3,5,5,7,9];

const mean = calculateMean(numbers);
console.log(`mean: ${mean}`);

const mode = calculateMode(numbers);
console.log(`mode: ${mode}`);
