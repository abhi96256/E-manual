import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})




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