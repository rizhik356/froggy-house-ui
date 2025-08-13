import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes.ts";

const CreateRoutes = () => {

    const router = createBrowserRouter(routes)

    return <RouterProvider router={router} />
}

export default CreateRoutes;
