import React from 'react'
import SiteRoot from '../pages/site/SiteRoot'
import Home from '../pages/site/Home/Home'
import Basket from '../pages/site/Basket/Basket'
import Detail from '../pages/site/Detail/Detail'
import AdminRoot from '../pages/admin/AdminRoot'
import Product from '../pages/admin/Product/Product'
import AddProduct from '../pages/admin/AddProduct/AddProduct'

const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[
        {
            path:"",
            element:<Home/>  
        },
        {
            path:"basket",
            element:<Basket/>
        },
        {
            path:"detail/:id",
            element:<Detail/>
        }
     ]
    },
     {
        path:"/admin",
     element:<AdminRoot/>,
     children:[
         {
             path:"",
             element:<Product/>  
         },
         {
             path:"add",
             element:<AddProduct/>
         }
      ]
    }

]


export default ROUTES

