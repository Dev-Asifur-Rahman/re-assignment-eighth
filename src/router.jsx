import { createBrowserRouter } from "react-router";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Statistics from "./Components/ChildComponents/Statistics";
import Dashboard from "./Components/ChildComponents/Dashboard";
import Details from "./Components/ChildComponents/Details";
import HomeData from "./Components/ChildComponents/HomeData";
import axios from "axios";



export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        loader:()=>axios.get('items.json'),
        element:<Home></Home>,
        children:[
            {
                path:'/',
                element:<HomeData></HomeData>
            },
            {
                path:'statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:':id',
                element:<Details></Details>
            }
        ]
    }
])