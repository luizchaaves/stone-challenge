export const maskPercentage = (valueInput: string) => {
  const cleanedValue = valueInput.replace(/[^\d.]/g, '');
  const formattedValue = `${cleanedValue}%`;
  return formattedValue;
};
