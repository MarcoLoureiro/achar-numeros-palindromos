import { palindromo } from "../models/Palindromo";


describe('testing Palindromo.ts model function',()=>{
    test('palindromo function',()=>{
        expect(palindromo("10","34")).toBe("|11|22|33|");
    });
});