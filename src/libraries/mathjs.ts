/**
 *
 * @param expression
 *
 * examples:
 * ```js
 * const raw = `ROUNDDOWN([[definitions.id1]] / [[definitions.id1]],0) * 8 * [[definitions.id2]] + ROUND([[definitions.id1]] / [[definitions.id1]],0) * [[definitions.id3]] - ROUNDUP([[definitions.id1]] / [[definitions.id1]],0) * [[definitions.id3]]`
 * parseMathjsExpression(raw)
 *
 * // {
 *  expression: 'floor(v1 / v2,0) * 8 * v3 + round(v4 / v5,0) * v6 - ceil(v7 / v8,0) * v9',
 *  scope: {
 *    v1: 'definitions.id1',
 *    v2: 'definitions.id1',
 *    v3: 'definitions.id2',
 *    v4: 'definitions.id1',
 *    v5: 'definitions.id1',
 *    v6: 'definitions.id3',
 *    v7: 'definitions.id1',
 *    v8: 'definitions.id1',
 *    v9: 'definitions.id3',
 *  }
 * }
 * ```
 */
export const parseMathjsExpression = (expression: string) => {
  const scope: Record<string, string> = {}
  const reg = /\[\[.*?\]\]/g
  const matches = expression.match(reg)
  if (matches) {
    matches.forEach((match, index) => {
      const key = `v${index + 1}`
      scope[key] = match.substring(2, match.length - 2)
      expression = expression.replace(match, key)
    })
  }

  expression = expression
    .replaceAll('ROUNDUP', 'ceil')
    .replaceAll('ROUNDDOWN', 'floor')
    .replaceAll('ROUND', 'round')

  return { expression, scope }
}
