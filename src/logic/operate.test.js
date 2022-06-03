import operate from './operate';

test('multiplication', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
});

test('addition', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
});

test('subtraction', () => {
    const result = operate('7', '4', '-');
    expect(result).toBe('3');
});

test('division', () => {
    const result = operate('10', '5', '÷');
    expect(result).toBe('2');
});
