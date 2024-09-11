import { createRoot } from 'react-dom/client';
import App from 'app/App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
