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
