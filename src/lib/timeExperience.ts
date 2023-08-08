export function timeExperience(startDate: string) {
  const start = new Date(startDate);
  const end = new Date();
  const diff = end.getTime() - start.getTime();

  // Calculate the total number of months
  const totalMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  // Calculate the number of years and remaining months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return {
    years,
    months,
  };
}
