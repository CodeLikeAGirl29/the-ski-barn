export function formatPrice(price: string | number) {
  // Convert anything to a clean number
  const numericPrice = typeof price === 'string'
    ? parseFloat(price.replace(/[$,]/g, ''))
    : price;

  if (isNaN(numericPrice)) return price;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // Logic: If it's a whole number, show no decimals. If not, show 2.
    minimumFractionDigits: numericPrice % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}