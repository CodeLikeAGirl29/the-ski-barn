# 🏗️ THE SKI BARN // INVENTORY & LABOR SYSTEM

**Precision Salvage Logistics & Performance Repair Tracking**

[](https://nextjs.org/)
[](https://www.typescriptlang.org/)
[](https://tailwindcss.com/)

## 🛠️ THE MISSION

Designed for the high-humidity, high-stakes environment of a PWC graveyard. This system transforms a static CSV inventory into a dynamic **Shop Management Command Center**. It allows technicians to track real-time labor hours against specific salvage hulls and provides customers with a "Blueprint-style" technical spec sheet for every part in the barn.

-----

## ⚡ KEY FEATURES

### 1\. Industrial Spec Sheets

Every item in the inventory (SKU-mapped) receives a dedicated technical page.

  * **Dynamic Routing:** Automatic generation of `/inventory/[sku]` pages.
  * **Tech-First UI:** High-contrast "Industrial Orange" theme with monospaced typography for mechanical precision.
  * **Auto-Currency Formatting:** Clean, professional price rendering (e.g., `$4,500` vs `4500.0`).

### 2\. Live Labor Timer (The Clock)

A custom-built mechanical stopwatch integrated into every part page.

  * **Real-Time Tracking:** `useEffect` driven timer for live billable hour visualization.
  * **Server Actions:** Instant logging of "Start/Stop" timestamps to a persistent JSON shop database.
  * **One-Tap Logic:** Designed for mobile use in the barn—start a job while standing over the hull.

### 3\. Bulletproof CSV Parser

A case-insensitive, keyword-based parser that handles Sortly/inFlow exports without breaking.

  * **Auto-Mapping:** Connects "ITEM VALUE" to Price and "MANUFACTURER" to OEM specs automatically.

-----

## 📂 PROJECT STRUCTURE

```text
/the-ski-barn
├── /app
│   ├── /actions         # Server Actions (Labor Logging & Exports)
│   ├── /inventory       # Dynamic [sku] routing for the graveyard
│   └── /lib             # The CSV Parser and Currency Utilities
├── /components          # Industrial UI Components (LaborClock, SkiCard, Services)
├── /data                # The Source of Truth (Inventory CSV & Labor JSON)
└── /public              # High-res salvage imagery
```

-----

## 🚀 GETTING STARTED

### 1\. The Inventory Feed

Drop your latest export into `/data/The_Ski_Barn_Startup_Inventory.csv`. The system will automatically index the new units.

### 2\. Technical Setup

```bash
# Clone the repository
git clone https://github.com/CodeLikeAGirl/the-ski-barn.git

# Install heavy-duty dependencies
npm install

# Fire up the engine
npm run dev
```

### 3\. Recording Labor

Navigate to any inventory item and hit **START JOB**. The system will create (or update) `data/labor_logs.json`. **Do not delete this file; it is your billable history.**

-----

## 🧰 RECOMMENDED SHOP HARDWARE

For optimal performance in the Baker, FL environment, the following hardware is integrated into the workflow:

  * **[CANDooPro Diagnostic System](http://googleusercontent.com/shopping_content/0_link)**: For pulling engine hours and fault codes directly into the system.
  * **Pelican 1495 Laptop Case**: Essential armor for the diagnostic laptop. Watertight and dustproof for barn-floor coding.
  * **LG 34GP83A-B UltraGear Monitor**: The 21:9 Command Center for reviewing labor logs and inventory side-by-side.

-----

## 📝 TECH WRITER NOTES

  * **Typography:** Utilizes `Inter` for readability and `JetBrains Mono` for technical data strings.
  * **Palette:** `#F97316` (Industrial Orange), `#0F172A` (Deep Navy/Black), `#94A3B8` (Machine Steel).

-----

**Built by [CodeLikeAGirl] for The Ski Barn Graveyard.** *Drill the Concepts. Master the Exam. Rebuild the Ski.*
