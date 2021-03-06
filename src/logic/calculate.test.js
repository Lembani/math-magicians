import calculate from './calculate';

describe('Number has been entered', () => {
  test('If entered number is from 0 to 9', () => {
    let btn = '2';
    let result = calculate({
      total: null, next: null, operation: null,
    }, btn);
    expect(result.next).toEqual('2');
    btn = '6';
    result = calculate(result, btn);
    expect(result.next).toEqual('26');
  });
});

describe('Number entered is decimal', () => {
  test('If dot (.) is pressed', () => {
    let btn = '2';
    let result = calculate({
      total: null, next: null, operation: null,
    }, btn);
    expect(result.next).toEqual('2');
    btn = '.';
    result = calculate(result, btn);
    btn = '5';
    result = calculate(result, btn);
    expect(result.next).toEqual('2.5');
  });
});

describe('Number is a negative', () => {
  test('If `+/-` is pressed', () => {
    let btn = '10';
    let result = calculate({
      total: null, next: null, operation: null,
    }, btn);
    expect(result.next).toEqual('10');
    btn = '+/-';
    result = calculate(result, btn);
    expect(result.next).toEqual('-10');
  });
});

describe('AC is pressed', () => {
  test('If result is cleared', () => {
    const btn = 'AC';
    const result = calculate({
      total: '20', next: '5', operation: '-',
    }, btn);
    expect(result).toEqual({
      total: null, next: null, operation: null,
    });
  });
});

describe('Get a result', () => {
  test('If equal sign (=) is pressed', () => {
    const btn = '=';
    const result = calculate({
      total: '10', next: '5', operation: '+',
    }, btn);
    expect(result.total).toEqual('15');
  });
});
