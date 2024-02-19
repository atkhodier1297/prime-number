// Problem: Given an integer 'n', determine if its a prime number.
// Prime numbers can only be multiplied by 1 and itself.

function isPrime(n){
    if(n < 2) {
        return false
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(15))
console.log(isPrime(20))

// Big O === O(n)


function isOptPrime(n){
    if(n < 2) {
        return false
    }
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0) {
            return false
        }
    }
    return true
}

// If a number is not prime, it can be broken down into two smaller numbers that multiply together to make the big number. At least one of these smaller numbers must be less than or equal to the square root of the big number.

// If you checked all the numbers up to the square root and didn't find any that divide evenly into the big number, then you won't find any beyond the square root either.

