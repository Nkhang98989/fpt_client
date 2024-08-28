

import AppLayout from "../layouts/AppLayout";
import detail from "../pages/Detail";
import Home from "../pages/Home";
const publicRoutes = [
    {
        layout:AppLayout,
        routes:[
            {
                path: '/',
                component:Home
            },
            {
                path: '/detail',
                component:detail
            }
        ]
    },
    
] 
const privateRoutes =[
    {
        layout:AppLayout,
        routes:[
            {
                path: '/admin',
                component:Home
            },
           
        
        ]
    },
   
   
]
export { publicRoutes ,privateRoutes } ;