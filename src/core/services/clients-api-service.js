import http from './http-common'

class ClientsApiService {
    getAll() {
        return http.get('/clients');
    }

    getById(id) {
        return http.get(`/clients/${ id }`);
    }

    getAppliances(id) {
        return http.get(`/clients/${ id }/appliances`);
    }

    create(data) {
        return http.post('/clients', data);
    }

    update(id, data) {
        return http.put(`/clients/${ id }`, data);
    }

    delete(id) {
        return http.delete(`/clients/${ id }`);
    }
}

export default new ClientsApiService