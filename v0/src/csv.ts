const names2Keys = (names: string[], definitions: { text: string; value: string }[]) => {
  const keys = names
    .map(name => definitions.find(d => d.text === name)?.value ?? 'undefined')
    .filter(key => key !== 'undefined')
  return keys
}

const array2object = (keys: string[], values: string[]) => {
  const entries = keys.map((key, index) => [key, values[index].trim()])
  const result = Object.fromEntries(entries)
  return result
}

type ItemDefinition = { text: string; value: string }
export const csv2objects = (definitions: ItemDefinition[], csv: string[][]) => {
  const [names, ...values] = csv
  const result = values.map(values => {
    const keys = names2Keys(names, definitions)
    const result = array2object(keys, values)
    return result
  })
  return result
}
