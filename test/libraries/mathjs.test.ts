import { parseMathjsExpression } from '../../src/libraries/mathjs'
it('mathjs parseMathjsExpression', () => {
  const raw = `ROUNDDOWN([[definitions.id1]] / [[definitions.id1]],0) * 8 * [[definitions.id2]] + ROUND([[definitions.id1]] / [[definitions.id1]],0) * [[definitions.id3]] - ROUNDUP([[definitions.id1]] / [[definitions.id1]],0) * [[definitions.id3]]`
  const { expression, scope } = parseMathjsExpression(raw)
  expect(expression).toEqual('floor(v1 / v2,0) * 8 * v3 + round(v4 / v5,0) * v6 - ceil(v7 / v8,0) * v9')
  expect(scope).toEqual({
    v1: 'definitions.id1',
    v2: 'definitions.id1',
    v3: 'definitions.id2',
    v4: 'definitions.id1',
    v5: 'definitions.id1',
    v6: 'definitions.id3',
    v7: 'definitions.id1',
    v8: 'definitions.id1',
    v9: 'definitions.id3',
  })
})
