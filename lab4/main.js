// Завдання 1. Іменована функція: більше з двох чисел.
function findMax(a, b) {
    return a > b ? a : b;
}

// Завдання 2. Функціональний вираз: віднімання.
const subtract = function(a, b) {
    return a - b;
};

// Завдання 3. Стрілкова функція: квадратний корінь.
const sqrt = n => Math.sqrt(n);

// Завдання 4. Рекурсивна сума n членів геометричної прогресії.
function geometricProgression(n, a, r) {
    if (n === 0) {
        return 0;
    }
    return a + r * geometricProgression(n - 1, a, r);
}

// Завдання 5. Замикання, яке ділить число на заданий дільник.
function createDivider(divisor) {
    return function(number) {
        return number / divisor;
    };
}

// Завдання 6. Функція, що приймає колбек для двох чисел.
function applyOperation(a, b, func) {
    return func(a, b);
}

// Завдання 7*. Застосування колбека до кожного елемента Set.
function processSet(set, callback) {
    set.forEach(callback);
}

console.log("Завдання 1 — findMax(12, 7):", findMax(12, 7));
console.log("Завдання 2 — subtract(12, 7):", subtract(12, 7));
console.log("Завдання 3 — sqrt(81):", sqrt(81));
console.log("Завдання 4 — geometricProgression(4, 2, 3):", geometricProgression(4, 2, 3));

const divideByTwo = createDivider(2);
console.log("Завдання 5 — divideByTwo(20):", divideByTwo(20));

console.log("Завдання 6 — додавання:", applyOperation(5, 3, (a, b) => a + b));
console.log("Завдання 6 — множення:", applyOperation(5, 3, (a, b) => a * b));

console.log("Завдання 7* — processSet(new Set([1, 2, 3])):");
processSet(new Set([1, 2, 3]), value => console.log(value * 2));
