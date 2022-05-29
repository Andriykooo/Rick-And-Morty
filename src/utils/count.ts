const getCount = async (callback: Function): Promise<number[]> => {
  const { count } = await callback();

  const arrayOfIds: number[] = [];

  for (let i = 1; i <= count; i++) {
    arrayOfIds.push(i)
  }

  return arrayOfIds;
}

export default getCount;
