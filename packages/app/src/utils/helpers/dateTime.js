export const getDateAfterDays = (days = 1) => {
  let d = new Date();
  return d.setDate(d.getDate() + days);
};
