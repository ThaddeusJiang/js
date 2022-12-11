export const diff = (value: any[], origin: any[]) => {
  const diff = value.map(item => {
    const originItem = origin.find(i => i.id === item.id);
    if (originItem) {
      return {
        ...item,
        name: originItem.name === item.name ? undefined : item.name,
      };
    }
    return {
      ...item,
      new: true,
    };
  });
  const deleted = origin
    .filter(item => !value.find(i => i.id === item.id))
    .map(item => ({ ...item, deleted: true }));
  return [...diff, ...deleted];
};
