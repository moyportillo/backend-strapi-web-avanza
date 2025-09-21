import Root from '@/root';
import {createBrowserRouter, Navigate} from "react-router-dom";
import PrincipalComponent from '@/pages/principal';
import BienesRaicesPage from '@/pages/raices';
import PrestamosPage from '@/pages/prestamos';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, // Tu layout
        children: [
            { index: true, element: <Navigate to="home" /> }, // Redirección al home
            { path: 'home', element: <PrincipalComponent /> },
            { path: 'bienes-raices', element: <BienesRaicesPage /> },
            { path: 'prestamos', element: <PrestamosPage /> },
            { path: '*', element: <Navigate to="home" /> }, // catch-all
        ],
    },
]);