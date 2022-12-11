import { diff } from '../src';
test('diff: should return the diff between two arrays', () => {
  const data = [
    {
      id: 'org:2',
      name: 'ソリューション（旧）',
    },
    {
      id: 'org:3',
      name: '新規開拓室',
    },
    {
      id: 'org:4',
      name: '営業部',
    },
  ];

  const origin = [
    {
      id: 'org:1',
      name: 'SES',
    },
    {
      id: 'org:2',
      name: 'ソリューション',
    },
    {
      id: 'org:3',
      name: '新規開拓室',
    },
  ];

  const diffData = [
    {
      id: 'org:2',
      name: 'ソリューション（旧）',
    },
    {
      id: 'org:3',
    },
    {
      id: 'org:4',
      name: '営業部',
      new: true, // don't need this if DB client has upsert
    },
    {
      id: 'org:1',
      name: 'SES',
      deleted: true, // equal to deleted_at: new Date()
    },
  ];

  const result = diff(data, origin);

  expect(result).toEqual(diffData);
});
