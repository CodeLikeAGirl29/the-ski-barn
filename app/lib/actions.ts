"use server";

import { promises as fs } from 'fs';
import path from 'path';

export async function getInventory() {
  try {
    // Path to your inFlow CSV export in the project root
    const filePath = path.join(process.cwd(), 'data', 'inflow_export.csv');
    const fileContent = await fs.readFile(filePath, 'utf8');

    // Simple CSV parser logic
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
      const values = line.split(',');
      return {
        id: values[headers.indexOf('Product ID')] || Math.random().toString(),
        year: parseInt(values[headers.indexOf('Year')]) || 0,
        make: values[headers.indexOf('Manufacturer')] || 'Unknown',
        model: values[headers.indexOf('Product Name')] || 'Unknown',
        price: values[headers.indexOf('Price')] || '$0',
        status: values[headers.indexOf('Status')] as 'Ready' | 'Salvage' | 'Pending'
      };
    });
  } catch (error) {
    console.error("Failed to load inventory:", error);
    return [];
  }
}