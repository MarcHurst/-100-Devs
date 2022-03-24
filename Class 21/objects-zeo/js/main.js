//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    state: "stopped",
    count: 0,
    id: 17,
    increment: _ => this.count ++,
    log: _ => console.log(this.count),
}

console.log(stopwatch.count)
stopwatch.increment()
console.log(stopwatch.count)
stopwatch.log()