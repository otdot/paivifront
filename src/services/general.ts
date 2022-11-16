import { StorageProductType } from "../Types";

export const getRandomDate = () => {
  const randomNum = Math.floor(Math.random() * 30) * 86400000;
  const today = new Date();
  const date = new Date(today.getTime() + randomNum).toString();
  return date;
};

export const displayDate = (newdate: string) => {
  const date = new Date(newdate);
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}.${month}.${year}`;
};

export const combineStorage = (storage: StorageProductType[]) => {
  return Object.values({
    ...storage.reduce((whole: any, curr: any) => {
      const name = capitalize(curr.name);
      if (!whole[`${curr.name}${curr.unit}`]) {
        whole[`${curr.name}${curr.unit}`] = { ...curr, name };
      } else {
        const temp = {
          ...curr,
          amount: whole[`${curr.name}${curr.unit}`].amount + curr.amount,
          name,
        };
        whole[`${curr.name}${curr.unit}`] = { ...temp };
      }
      return whole;
    }, {}),
  });
};

export const sortArr = (arr: any) => {
  return arr.sort((a: any, b: any) => a.name.localeCompare(b.name));
};

export const capitalize = (text: string) => {
  return `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
};
