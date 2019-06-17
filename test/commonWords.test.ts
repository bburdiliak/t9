const commonWords = require('../server/commonWords');
import { pathEq, hasPath } from "rambdax";

describe('commonWords', () => {

  test('build tree contains all words it was built from', () => {
    const tree = commonWords.buildTree(['argh', 'aed', 'bc', 'a', 'b'])
    expect(tree).toBeDefined()
    expect(hasPath('children.a.contained', tree)).toBeTruthy()
    expect(pathEq('children.a.contained', true, tree)).toBeTruthy()

    expect(hasPath('children.b.contained', tree)).toBeTruthy()
    expect(pathEq('children.b.contained', true, tree)).toBeTruthy()

    expect(hasPath('children.a.children.e.contained', tree)).toBeTruthy()
    expect(pathEq('children.a.children.e.contained', false, tree)).toBeTruthy()

    expect(hasPath('children.a.children.r.contained', tree)).toBeTruthy()
    expect(pathEq('children.a.children.r.contained', false, tree)).toBeTruthy()
  })

  test('toPath builds tree path to a letter', () => {
    const path = commonWords.toPath(['a', 'b', 'c', 'd', 'e'])
    expect(path).toBeDefined()
    expect(path).toEqual('children.a.children.b.children.c.children.d.children.e')
  })

  test('toChildrenPath builds tree path to children', () => {
    const path = commonWords.toChildrenPath(['a', 'b', 'c', 'd', 'e'])
    expect(path).toBeDefined()
    expect(path).toEqual('children.a.children.b.children.c.children.d.children')
  })

  test('allPaths builds tree path', () => {
    const path = commonWords.allPaths('argh')
    expect(path).toBeDefined()
    expect(path).toEqual(['a', 'ar', 'arg', 'argh'])
  })
})