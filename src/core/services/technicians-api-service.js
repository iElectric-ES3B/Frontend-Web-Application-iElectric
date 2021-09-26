import http from './http-common'

class AppliancesApiService {
    getAll() {
        return http.get('/technicians');
    }

    getById(id) {
        return http.get(`/technicians/${ id }`);
    }

    getReports(id) {
        return http.get(`/technicians/${ id }/reports`);
    }

    create(data) {
        return http.post('/technicians', data);
    }

    update(id, data) {
        return http.put(`/technicians/${ id }`, data);
    }

    delete(id) {
        return http.delete(`/technicians/${ id }`);
    }
}

export default new AppliancesApiService();