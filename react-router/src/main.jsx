import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Contact from './routes/contact';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children : [
//       {
//         path: "contact/:id?",
//         element: <Contact />,
//       },
//     ]
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='contact/:id?' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
