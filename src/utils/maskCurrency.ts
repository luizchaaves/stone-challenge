export const maskCurrency = (value: string) => {
  const cleanedValue = value.replace(/[^\d]/g, '');
  const valueNumber = parseFloat(cleanedValue);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(valueNumber / 100);
};
