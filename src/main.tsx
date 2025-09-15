import { StrictMode } from 'react'
import { Header } from "./components/Header";
import { createRoot } from 'react-dom/client'
import Footer from "./components/Footer";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
