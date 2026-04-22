import { promises as fs } from 'fs';
import path from 'path';

export async function getInventoryFromCSV() {
  const filePath = path.join(process.cwd(), 'data', 'The_Ski_Barn_Startup_Inventory.csv');
  const fileContent = await fs.readFile(filePath, 'utf8');

  const rows = fileContent.split('\n').filter(row => row.trim() !== '');
  const headers = rows[0].split(',').map(h => h.trim().toUpperCase()); // Force Uppercase for matching

  // Helper to find index by looking for keywords in the headers
  const getIdx = (keyword: string) => headers.findIndex(h => h.includes(keyword.toUpperCase()));

  return rows.slice(1).map(row => {
    const values = row.split(',');

    return {
      sku: values[getIdx('ID')] || values[getIdx('SKU')] || 'N/A',
      name: values[getIdx('NAME')] || 'Unknown Part',
      manufacturer: values[getIdx('MANUFACTURER')] || 'OEM',
      category: values[getIdx('DESCRIPTION')] || values[getIdx('CATEGORY')] || 'General',
      price: values[getIdx('VALUE')] || values[getIdx('PRICE')] || '0.00',
      status: values[getIdx('NOTES')] || values[getIdx('STATUS')] || 'Salvage',
      location: values[getIdx('LOCATION')] || 'Barn',
      year: values[getIdx('YEAR')] || '',
    };
  });
}