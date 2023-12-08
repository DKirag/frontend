import axios from './axios'


export const getClientesRequest = () => axios.get('/clientes')

export const getClientRequest = (id) => axios.put('/clientes/'+id);

export const createClienteRequest = (cliente) =>axios.post('/clientes', cliente);

export const deleteClienteRquest = (id) =>axios.delete('/clientes/' + id);

export const updateClienteRequest = (id, cliente) =>axios.put('/clientes/' + id, cliente)


