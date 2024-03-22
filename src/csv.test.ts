import { csv2objects } from './csv'

test('csv2objects', () => {
  const definitions = [
    { text: '従業員識別子', value: 'employeeId' },
    { text: '従業員コード', value: 'employeeCode' },
    { text: '苗字', value: 'lastName' },
    { text: '名前', value: 'firstName' },
    { text: '事業所名', value: 'officeName' },
    { text: '部門名', value: 'departmentName' },
    { text: '職種名', value: 'jobName' },
    { text: '契約種別', value: 'contractTypeName' },
  ]
  const keys = ['従業員識別子', '従業員コード', '苗字', '名前', '事業所名', '部門名', '職種名', '契約種別']
  const values = [['	DSGdN_ER3Dg5TJKflyx8mg', '	F0002', '蒋', '継発', 'ビッグミッション株式会社', '', '', '契約社員']]
  const csv = [keys, ...values]
  const result = [
    {
      employeeId: 'DSGdN_ER3Dg5TJKflyx8mg',
      employeeCode: 'F0002',
      lastName: '蒋',
      firstName: '継発',
      officeName: 'ビッグミッション株式会社',
      departmentName: '',
      jobName: '',
      contractTypeName: '契約社員',
    },
  ]

  expect(csv2objects(definitions, csv)).toEqual(result)
})
