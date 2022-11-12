export const getRandomDate = () => {
  const randomNum = Math.floor(Math.random() * 30) * 86400000;
  const today = new Date();
  const date = new Date(today.getTime() + randomNum).toString();
  // const year = date.getFullYear();
  // const month = (1 + date.getMonth()).toString().padStart(2, "0");
  // const day = date.getDate().toString().padStart(2, "0");
  // return `${month}/${day}/${year}`;
  return date;
};

export const displayDate = (newdate: string) => {
  const date = new Date(newdate);
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}/${day}/${year}`;
};
