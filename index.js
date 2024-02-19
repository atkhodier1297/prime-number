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