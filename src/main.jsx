import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { KitchenProvider } from './context/KitchenProvider'
import router from './router'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KitchenProvider>
      <RouterProvider router={router} />
    </KitchenProvider>
  </React.StrictMode>,
)
