'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    const numberOfElements = arr.length
    const positiveNumbers = arr.filter(listNumber => listNumber > 0).length
    const negativeNumbers = arr.filter(listNumber => listNumber < 0).length
    const neutralNumbers = arr.reduce((acc, curr) => {
        if (curr === 0) {
            acc++;
        }
        return acc;
    }, 0)

    const positiveRatio = positiveNumbers/numberOfElements
    const negativeRatio = negativeNumbers/numberOfElements
    const neutralRatio = neutralNumbers/numberOfElements

    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(neutralRatio.toFixed(6))

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
