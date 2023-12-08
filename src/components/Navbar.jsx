import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { IoPerson, IoLogOut, IoChevronDownSharp, IoBagAdd, IoBagSharp} from 'react-icons/io5'
import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function Navbar (){
    const {isAuthenticated, logout, user} = useAuth();
    return(
     <nav className="bg-cyan-950 my-3 flex justify-between py-5 px-10 rounded-lg">
       
        <Link to={
            isAuthenticated ? '/products': '/'
        }>
        <h1 className="text-md font-bold">Productos DKira</h1>
        </Link>
        


        <ul className="flex gap-x-2">
            {
                isAuthenticated ? (
                    <>
                    <li className='text-lg px-5 '>
                        <div className='flex mx-3 px-3' >
                         <IoPerson size={30}/>{user.username}
                        </div>
                    </li>
                    <li>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-cyan-950 px-3 py-2 text-sm 
                                        ring-1 ring-inset ring-indigo-700 hover:bg-indigo-800">
                          <IoBagSharp className="-mr-1 h-5 w-5"/> Productos
                            <IoChevronDownSharp className="-mr-1 h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right 
                                    divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black 
                                    ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/products"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    <IoBagSharp className="h-5 w-5 inline-flex"/> Listar 
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/products/new"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                  <IoBagAdd className="h-5 w-5 inline-flex"/>  Agregar 
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </li>
                    <li>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-cyan-950 px-3 py-2 text-sm 
                                        ring-1 ring-inset ring-indigo-700 hover:bg-indigo-800">
                          <IoBagSharp className="-mr-1 h-5 w-5"/> Proveedores
                            <IoChevronDownSharp className="-mr-1 h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right 
                                    divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black 
                                    ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/provedores"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    <IoBagSharp className="h-5 w-5 inline-flex"/> Listar 
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/provedor/new"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                  <IoBagAdd className="h-5 w-5 inline-flex"/>  Agregar 
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </li>
                    <li>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-cyan-950 px-3 py-2 text-sm 
                                        ring-1 ring-inset ring-indigo-700 hover:bg-indigo-800">
                          <IoBagSharp className="-mr-1 h-5 w-5"/> Clientes
                            <IoChevronDownSharp className="-mr-1 h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right 
                                    divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black 
                                    ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/clientes"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    <IoBagSharp className="h-5 w-5 inline-flex"/> Listar 
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/cliente/new"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                  <IoBagAdd className="h-5 w-5 inline-flex"/>  Agregar 
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    
                    </li>
                    <li>
                        <Link to='/' onClick={()=>{logout()}}
                        className='bg-slate-500 rounded-sm'
                        >
                            <IoLogOut size={30}/>
                        </Link>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                <Link to='/login'
                className='bg-slate-500 px-4 py-1 rounded-sm'
                >Login</Link>
            </li>
            <li>
                <Link to='/register'
                className='bg-slate-500 px-4 py-1 rounded-sm'
                >Register</Link>
            </li>
                    
                    
                    </>
                )
            }
        </ul>
     </nav>
    )
  }


  export default Navbar;