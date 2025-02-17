# 📊 KPI Tracker Dashboard

A web-based dashboard application that visualizes key performance indicators (KPIs) for a production line. The dashboard includes data filtering, KPI cards, charts, and a rejection details table with dynamic filtering.

---

## 🚀 Features

✅ **Dynamic Filtering** - Users can filter data by Application, Line Number, Reason for Rejection, and Date Range
✅ **KPI Cards** - Displays Units Processed, Units Passed, Units Rejected, and Throughput (Units/Minute)
✅ **Interactive Charts** - Includes Bar Chart (Units Processed) and Pie Chart (Rejection Reasons)
✅ **React-Select for Dropdowns** – User-friendly multi-select dropdowns  
✅ **Data Table** - Shows rejection details with a minimum of 3 rows, even if filtering yields fewer results
✅ **Persistent Selection** - Filters are saved in localStorage so selections persist after page reloads
✅ **User Profile Section** - Displays the logged-in user's profile picture in the navbar

---

## 🛠 Tech Stack

**Frontend**: React.js, Tailwind CSS, Recharts, React-Select
**State Management**: Local Component State
**Data Storage**: Local Storage (for filters)
**Design System**: Tailwind CSS

---

### 🔄 Sidebar Navigation (Dynamic Page Switching)

- Sidebar allows navigation between:
  1. **KPI Dashboard (Main Component)**
  2. **Camera View**
  3. **Event Log**
- The displayed content updates **based on the selected sidebar option**.

### 📊 Charts & Tables

- **Recharts Bar & Pie Charts** reflect filtered data.
- The **Data Table** updates to show only filtered results.

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/Mallikarjuna-dev/prowiz-task.git

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Start the Development Server

npm start

The project will run on http://localhost:3000/

🌍 Deployment
The dashboard is deployed on Netlify.
🔗 Live Demo: https://prowiz-task.vercel.app/

📌 Credits
Developed by Aj
