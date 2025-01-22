# Realtime Data Monitor

This project is a **Realtime Data Monitor** built using **Next.js** and **Firebase**. The application pulls data from a Firebase database and visualizes it in **table** and **graph** formats, depending on the route you visit. The UI is styled with **Tailwind CSS** for a modern and responsive experience.

---

## Folder Structure

The project is organized as follows:

```
.
├── components
│   ├── App.js
│   ├── DataGraph.js
│   ├── DataTable.js
│   ├── NavBar.js
│   └── Navigation.js
├── firebase
│   └── firebaseConfig.js
├── pages
│   ├── styles
│   │   └── global.css
│   ├── _app.js
│   ├── graph.js
│   ├── index.js
│   └── table.js
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── components.json
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.mjs
```

---

## Key Features

- **Table View:** Displays Firebase data in a neatly formatted table.
- **Graph View:** Visualizes Firebase data with interactive graphs.
- **Navigation:** Switch seamlessly between views using the navigation bar.
- **Responsive UI:** Built with Tailwind CSS for modern design and usability.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/SatishBanchhere/ESP32_RealTime_Data_Monitor.git
   cd realtime-data-monitor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
    - Replace the configuration in `firebase/firebaseConfig.js` with your Firebase project credentials.
    - Update the database reference paths in `pages/table.js` and `pages/graph.js` based on the dataset you want to display.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

---

## Customization

To display different datasets:
1. Go to `pages/table.js` or `pages/graph.js`.
2. Locate the following code snippet:
   ```javascript
   const dbRef = ref(database, "UsersData/YourID/readings");
   ```
3. Replace `"UsersData/YourID/readings"` with your desired database path.

---

## External Libraries

- [Firebase](https://firebase.google.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Feel free to enhance this application further by adding new views, integrating additional datasets, or customizing the UI! If you encounter any issues, please raise them in the repository's issue tracker.
