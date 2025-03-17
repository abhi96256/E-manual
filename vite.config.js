import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Accessible from other devices
    port: 3000, // Set the port to 3000
    strictPort: true, // Ensures Vite fails if port 3000 is unavailable
    open: true, // Automatically open the app in the browser
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Ensure React is optimized
  },
});

// export default defineConfig({
//   server: {
//     port: 3000,
//   },
// });


const loadContent = (topic) => {
  const contentMap = {
    "Introduction": "Welcome to the Introduction of this system. Learn more here.",
    "Scope": "This section covers the project scope. The system is aimed at...",
  };
  return contentMap[topic] || "No content available.";
};

const onClickSubmenu = (submenu) => {
  const topic = submenu.name;
  setContent(loadContent(topic)); // Dynamically load the content
  setFilteredTopics(submenu.topics || []); // Update filtered topics
  setIsContentEmpty(false);
  navigate(submenu.topics[0]?.path || "/");
};
