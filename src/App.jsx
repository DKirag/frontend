import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ProductFormPage from './pages/ProductsFormPage'
import ProductsPage from './pages/ProductsPage'
import ProvedorForm from './pages/ProvedorForm'
import ProvedorPage from './pages/ProvedorPage'
import ClientesForm from './pages/ClientesForm'
import ClientesPage from './pages/ClientesPage'
import NotFound from './pages/NotFound'
import { AuthProvider } from './context/AuthContext'
import { ProductsProvider } from './context/ProductsContext';
import { ClientesProvider } from './context/ClientesContext';
import { ProveedoresProvider } from './context/ProvedorContext';
import Navbar from './components/Navbar'



function App() {
  return (
    <AuthProvider>
      <ProveedoresProvider>
    <ClientesProvider>
    <ProductsProvider>
    <BrowserRouter>
    <main className='container mx-auto px-10'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>

      <Route element={<ProtectedRoute/>}>
      <Route path='/profile' element={<ProfilePage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/products/new' element={<ProductFormPage/>}></Route>
      <Route path='/product/:id' element={<ProductFormPage/>}></Route>
      <Route path='/provedores' element={<ProvedorPage/>}></Route>
      <Route path='/provedor/new' element={<ProvedorForm/>}></Route>
      <Route path='/provedor/:id' element={<ProvedorForm/>}></Route>
      <Route path='/clientes' element={<ClientesPage/>}></Route>
      <Route path='/cliente/new' element={<ClientesForm/>}></Route>
      <Route path='/cliente/:id' element={<ClientesForm/>}></Route>
      </Route>
      <Route path='*' element={<NotFound />}/>

    </Routes>
    </main>
    </BrowserRouter>
    </ProductsProvider>
    </ClientesProvider>
    </ProveedoresProvider>
    </AuthProvider>
)
}


    
    

export default App
