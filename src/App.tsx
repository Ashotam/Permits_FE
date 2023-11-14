
import Header from "./components/header"
import './App.css'
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard"
import About from "./pages/About/about"
import Orders from "./pages/Orders/orders"
import Vehical from "./pages/Vehicle/index"
import Company from "./pages/Company/index"
import {
  QueryClient,
  QueryClientProvider,
  
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
    <BrowserRouter>
    <Header/>
    <QueryClientProvider client={queryClient}>
    <Routes>
            
          <Route path="/"  element={<Dashboard/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/orders"  element={<Orders/>} />
          <Route path="/vehicles"  element={<Vehical/>} />
          <Route path = "/companies" element={<Company/>} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={true } />
    </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
