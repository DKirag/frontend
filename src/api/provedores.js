import axios from './axios'


export const getProvedorsRequest = () =>axios.get('/provedores');

export const getProvedorRequest = (id)=> axios.put('/provedores/' + id);

export const createProvedorRequest = (provedor)=> axios.post('/provedores', provedor);

export const deleteProvedorrequest = (id) => axios.delete('/provedores/' + id);

export const updateProvedorrequest = (id, provedor) => axios.put('/provedores/' + id, provedor)