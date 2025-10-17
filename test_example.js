// 示例测试用例 (使用 Jest 框架)
// 被测试的函数
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// 测试用例
describe('数学运算函数测试', () => {
  test('加法运算', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('减法运算', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(-2, -3)).toBe(1);
  });
});

// 异步函数测试示例
function asyncAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
}

describe('异步函数测试', () => {
  test('异步加法运算', async () => {
    const result = await asyncAdd(3, 4);
    expect(result).toBe(7);
  });
});