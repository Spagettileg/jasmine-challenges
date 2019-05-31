describe("My fizzBuzz function", function() { 
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual. 
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9) /* 9 divided by 3 (=Fizz) = 3 */
            expect(result).toBe("Fizz");
        });
                
        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10) /* 10 divided by 5 (=Buzz) = 2 */
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15) /* 15 can be divided by 5 or 3 (=Fizzbuzz) */ 
            expect(result).toBe("FizzBuzz");
        });
        it("should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2) /* Number 2 is returned as not divisible by 3 or 5 */
            expect(result).toBe(2);
        });
    });
});