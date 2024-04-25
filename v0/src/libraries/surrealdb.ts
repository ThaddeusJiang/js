export const parseQuery = (params: Record<string, string | undefined | null>) => {
  const validParams = Array.from(Object.entries(params)).filter(([_, value]) => value)

  if (validParams.length === 0) {
    return ''
  }

  const query = validParams
    .reduce((acc, [key, value]) => {
      acc += value?.includes(':') ? `${key} = ${value} AND ` : `${key} = "${value}" AND `
      return acc
    }, '')
    .slice(0, -5)

  return 'where ' + query
}

export const decodeId = (id: string) => {
  const [, entityId] = id.split(':')
  return entityId
}

export const encodeId = (PartitionKey: string, id: string) => {
  return `${PartitionKey}:${id}`
}
