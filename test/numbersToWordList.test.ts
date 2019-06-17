const numbersToWordList = require('../server/numbersToWordList');


describe('numbersToWordList', () => {

  test('toWordList returns proper word list for 2', () => {
    const words = numbersToWordList.toWordList('2')
    expect(words).toBeDefined()
    expect(words).toContain('a')
    expect(words).toContain('b')
    expect(words).toContain('c')
  })

  test('toWordList returns proper word list for 3', () => {
    const words = numbersToWordList.toWordList('3')
    expect(words).toBeDefined()
    expect(words).toContain('d')
    expect(words).toContain('e')
    expect(words).toContain('f')
  })

  test('toWordList returns proper word list for 4', () => {
    const words = numbersToWordList.toWordList('4')
    expect(words).toBeDefined()
    expect(words).toContain('g')
    expect(words).toContain('h')
    expect(words).toContain('i')
  })

  test('toWordList returns proper word list for 5', () => {
    const words = numbersToWordList.toWordList('5')
    expect(words).toBeDefined()
    expect(words).toContain('j')
    expect(words).toContain('k')
    expect(words).toContain('l')
  })

  test('toWordList returns proper word list for 6', () => {
    const words = numbersToWordList.toWordList('6')
    expect(words).toBeDefined()
    expect(words).toContain('m')
    expect(words).toContain('n')
    expect(words).toContain('o')
  })

  test('toWordList returns proper word list for 7', () => {
    const words = numbersToWordList.toWordList('7')
    expect(words).toBeDefined()
    expect(words).toContain('p')
    expect(words).toContain('q')
    expect(words).toContain('r')
    expect(words).toContain('s')
  })

  test('toWordList returns proper word list for 8', () => {
    const words = numbersToWordList.toWordList('8')
    expect(words).toBeDefined()
    expect(words).toContain('t')
    expect(words).toContain('u')
    expect(words).toContain('v')
  })

  test('toWordList returns proper word list for 9', () => {
    const words = numbersToWordList.toWordList('9')
    expect(words).toBeDefined()
    expect(words).toContain('w')
    expect(words).toContain('x')
    expect(words).toContain('y')
    expect(words).toContain('z')
  })

  test('toWordList returns proper word list for 23', () => {
    const words = numbersToWordList.toWordList('23')
    expect(words).toBeDefined()
    expect(words.length).toEqual(9)
  })

  test('toWordList returns proper word list for 232', () => {
    const words = numbersToWordList.toWordList('232')
    expect(words).toBeDefined()
    expect(words.length).toEqual(27)
  })

  test('toWordList returns proper word list for 237', () => {
    const words = numbersToWordList.toWordList('237')
    expect(words).toBeDefined()
    expect(words.length).toEqual(36)
  })

  test('flat flattens an array', () => {
    const words = numbersToWordList.testOnly.flat([['1'], ['2'], '3'])
    expect(words).toBeDefined()
    expect(words).toContain('1')
    expect(words).toContain('2')
    expect(words).toContain('3')
  })

  test('combine adds suffix', () => {
    const words = numbersToWordList.testOnly.combine(['a', 'b', 'c'])('def')
    expect(words).toBeDefined()
    expect(words).toContain('defa')
    expect(words).toContain('defb')
    expect(words).toContain('defc')
  })

})