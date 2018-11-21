const exercise1 = require('../exercise1');

describe('FizzBuzz', ()=>{

    it('Should throw an exeception error', ()=>{

        expect(()=>{ exercise1.fizzBuzz('blabla'); }).toThrow();
        expect(()=>{ exercise1.fizzBuzz(null); }).toThrow();
        expect(()=>{ exercise1.fizzBuzz(undefined); }).toThrow();
        expect(()=>{ exercise1.fizzBuzz({}); }).toThrow();
    });

    it('Should return FizzBuzz', ()=>{
        const result = exercise1.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('Should return Fizz', ()=>{
        const result = exercise1.fizzBuzz(9);
        expect(result).toBe('Fizz');
    });

    it('Should return Buzz', ()=>{
        const result = exercise1.fizzBuzz(10);
        expect(result).toBe('Buzz');
    });

    it('Should return the number or input if not divisible by 3, 5', ()=>{
        const result = exercise1.fizzBuzz(2);
        expect(result).toBe(2);
    });

});
