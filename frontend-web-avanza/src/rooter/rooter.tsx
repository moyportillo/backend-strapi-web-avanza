import Root from "../root.tsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import PrincipalComponent from "../pages/principal.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />, // Tu layout
        children: [
            { index: true, element: <Navigate to="home" /> }, // Redirección al home
            { path: 'home', element: <PrincipalComponent /> },
            //{ path: 'pagina1', element: <Pagina1 /> },
            //{ path: 'pagina2', element: <Pagina2 /> },
            { path: '*', element: <Navigate to="home" /> }, // catch-all
        ],
    },
]);