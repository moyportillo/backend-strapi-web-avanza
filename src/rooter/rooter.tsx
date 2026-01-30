import Root from '@/root';
import PrincipalComponent from '@/pages/principal';
import {createHashRouter, Navigate} from "react-router-dom";
import BienesRaicesPage from '@/pages/raices';
import PrestamosPage from '@/pages/prestamos';

export const router = createHashRouter([
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