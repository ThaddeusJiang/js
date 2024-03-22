import { decodeId, encodeId, parseQuery } from './surrealdb'

it('parseQuery standard', () => {
  const params = {
    foo: 'bar',
    baz: 'qux',
    quux: 'quuz',
    group: 'Group:1',
  }
  const query = parseQuery(params)
  expect(query).toEqual('where foo = "bar" AND baz = "qux" AND quux = "quuz" AND group = Group:1')
})

it('parseQuery', () => {
  const params = {
    foo: '',
    baz: undefined,
    quux: null,
  }
  const query = parseQuery(params)
  expect(query).toEqual('')
})

it('decodeId', () => {
  const id = 'Group:1'
  const decoded = decodeId(id)
  expect(decoded).toEqual('1')
})

it('encodeId', () => {
  const PartitionKey = 'Group'
  const id = '1'
  const encoded = encodeId(PartitionKey, id)
  expect(encoded).toEqual('Group:1')
})
