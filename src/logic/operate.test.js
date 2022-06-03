import operate from './operate';

test('multiplication', () => {
    const result = operate('5', '2', 'x');
    expect(result).toBe('10');
});
