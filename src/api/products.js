import axios from './axios'

//Lamada a la api para obtener todos los productos
export const getProductsRequest = () => axios.get('/productos');
//Llamada a la api para obtener un producto por id
export const getProductRequest = (id) => axios.put('/productos/'+ id);
//Llamada a la api para agregar un producto
export const createProductRequest = (product) =>axios.post('/productos', product)
//Llamada a la api para eliminar producto
export const deleteProductRequest = (id) => axios.delete('/productos/'+ id);
//Llamada a la api para editar producto
export const updateProductRequest = (id, product) => axios.put('/productos/'+ id, product);