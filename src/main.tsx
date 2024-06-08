import App from './App.tsx'
import './global.css'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './hooks/useAuth.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthProvider>
             <App />
        </AuthProvider>
    </BrowserRouter>,
)
