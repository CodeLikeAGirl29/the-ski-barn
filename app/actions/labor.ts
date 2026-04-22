"use server";

import { promises as fs } from 'fs';
import path from 'path';

export async function clockLabor(sku: string, action: 'start' | 'stop') {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const logPath = path.join(dataDir, 'labor_logs.json');

    // 1. ENSURE THE 'DATA' FOLDER EXISTS
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir);
    }

    // 2. READ EXISTING DATA
    let logs = [];
    try {
      const existing = await fs.readFile(logPath, 'utf8');
      // If the file is empty, JSON.parse will crash, so we check content
      logs = existing ? JSON.parse(existing) : [];
    } catch (e) {
      logs = []; // File doesn't exist yet, that's fine
    }

    // 3. APPEND NEW ENTRY
    const newEntry = {
      sku,
      action,
      timestamp: new Date().toISOString()
    };
    logs.push(newEntry);

    // 4. WRITE BACK TO DISK
    await fs.writeFile(logPath, JSON.stringify(logs, null, 2));

    console.log(`✅ Log successful: ${action} for SKU ${sku}`);
    return { success: true };

  } catch (error) {
    // This will show up in your VS Code / Terminal window
    console.error("❌ SERVER ERROR IN CLOCKLABOR:", error);
    return { success: false, error: String(error) };
  }
}

export async function exportLaborCSV() {
  const logPath = path.join(process.cwd(), 'data', 'labor_logs.json');

  try {
    const data = await fs.readFile(logPath, 'utf8');
    const logs = JSON.parse(data);

    // Header for the CSV
    let csvContent = "SKU,Action,Timestamp,Duration_Minutes\n";

    logs.forEach((log: any, index: number) => {
      let duration = 0;
      // If it's a 'stop' action, find the previous 'start' to calculate time
      if (log.action === 'stop' && index > 0 && logs[index - 1].sku === log.sku) {
        const start = new Date(logs[index - 1].timestamp).getTime();
        const stop = new Date(log.timestamp).getTime();
        duration = Math.round((stop - start) / 60000); // Minutes
      }

      csvContent += `${log.sku},${log.action},${log.timestamp},${duration}\n`;
    });

    return csvContent;
  } catch (e) {
    return "Error: No logs found.";
  }
}