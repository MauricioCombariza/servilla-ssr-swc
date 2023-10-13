import { useRoutes } from 'react-router-dom'
import HomePage from '../Pages/Home'
import Alistamiento from '../Pages/Servicio/Alistamiento'
import Calidad from '../Pages/Calidad'
import Contactenos from '../Pages/Contactenos'
import { Dashboard } from '../Pages/Dashboard'
import Distribucion from '../Pages/Servicio/Distribucion'
import Email from '../Pages/Servicio/Email'
import Fullfilment from '../Pages/Servicio/Fullfilment'
import Impresion from '../Pages/Servicio/Impresion'
import Ingresar from '../Pages/Ingresar'
import Indice from '../Pages/Indice'
import Informes from '../Pages/Informes'
import InformesDisponibles from '../Pages/InformesDisponibles'
import Mision from '../Pages/Mision'
import NotFound from '../Pages/NotFound/Index'
import Paqueteo from '../Pages/Servicio/Paqueteo'
import { ProtectRoute } from '../Auth'
import Registrarse from '../Pages/Registrarse'
import Salir from '../Pages/Salir'
import Servilla from '../Pages/Historico/Servilla'
import Vision from '../Pages/Vision'

const AppRoutes = () => {
    const routes = useRoutes([
      // Pagina inicial
      {
        path: "/",
        element: <HomePage />
      },
      // Componentes interactivos
      {
        path: "/contactenos",
        element: <Contactenos />
      },
      {
        path:"/ingresar",
        element: <Ingresar />
      },
      {
        path: "/registrarse",
        element: <Registrarse />
      },
      //Componentes iterativos protegidos
      {
        path: "/dashboard",
        element: <ProtectRoute><Dashboard /></ProtectRoute>
      },
      {
        path: "/historico/servilla",
        element: <ProtectRoute><Servilla /></ProtectRoute>
      },
      {
        path: "/indice",
        element: <ProtectRoute><Indice /></ProtectRoute>
      },
      {
        path: "/informes",
        element: <ProtectRoute><Informes /></ProtectRoute>
      },
      {
        path: "/informes/informes-disponibles",
        element: <ProtectRoute><InformesDisponibles /></ProtectRoute>
      },
      {
        path: "/salir",
        element: <ProtectRoute><Salir /></ProtectRoute>
      },
      // Componentes informativos
      {
        path: "/calidad",
        element: <Calidad />
      },
      {
        path:"/mision",
        element: <Mision />
      },
      {
        path: "/vision",
        element: <Vision />
      },
      {
        path: "/servicio/alistamiento",
        element: <Alistamiento />
      },
      {
        path: "/servicio/distribucion",
        element: <Distribucion />
      },
      {
        path: "/servicio/email",
        element: <Email />
      },
      {
        path: "/servicio/fullfilment",
        element: <Fullfilment />
      },
      {
        path: "/servicio/paqueteo",
        element: <Paqueteo />
      },
      {
        path: "/servicio/impresion",
        element: <Impresion />
      },
      {
        path: "/*",
        element: <NotFound />
      },
    ])
    return routes
  }

  export {AppRoutes}