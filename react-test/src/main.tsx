import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DetailComponent from './components/DetailComponent.tsx';
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/:detailId" element={<DetailComponent />} />
    </Routes>
  </BrowserRouter>,
)
