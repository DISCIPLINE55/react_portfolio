import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

createRoot(document.getElementById("root")!).render(<App />);
