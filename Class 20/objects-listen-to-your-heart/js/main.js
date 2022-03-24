//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    id: 1,
    name: "Speedrun Attempt 23",
    startTime: 0,
    finishTime: 0,
    doStart: () => this.startTime  = new Date(),
    doFinish: () => this.finishTime = new Date(),
    logDifference: () => console.log(this.finishTime-this.startTime)
}

console.log(new Date());

stopwatch.doStart();
console.log(stopwatch)