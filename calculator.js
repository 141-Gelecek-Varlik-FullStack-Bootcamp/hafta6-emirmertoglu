// Calculator
function calculator(operation, initialValue, numbers) {
    let total = initialValue
    for (const number of numbers) {
        total = operation(total, number)
    }
    return total
}

// Addition
function sum(n1, n2) {
    return n1 + n2
}

// Subtraction
function minus(n1, n2) {
    return n1 - n2
}

// Multiplication
function multiply(n1, n2) {
    return n1 * n2
}

// Division
function divider(n1, n2) {
    return n1 / n2
}

result = calculator(divider, 48, [3, 2]) // You can change calculator parameters

console.log(result)