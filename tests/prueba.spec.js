function sumar(num1, num2) {
    return num1 + num2
}


describe('pruebas para la funcion sumar', () => {
    it('Debería devolver la suma de los dos números', () => {
        const result = sumar(4, 5);
        expect(result).toBe(9);
        expect(sumar(3, 4)).toBe(7);

    });
});