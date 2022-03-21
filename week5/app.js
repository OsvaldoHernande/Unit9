// arrays 

var numbers = [];

for (var i = 1; i < 11; i++) {
    console.log(numbers)
    numbers.push(i)
}

console.log(numbers);

for (var i = 0; i < 10; i++) {
   console.log(numbers)
    numbers[i] = "hello";
}

console.log(numbers)


for (var i = 1; i < 11; i++) {
   console.log(numbers)
    numbers.pop()
}

console.log(numbers)

