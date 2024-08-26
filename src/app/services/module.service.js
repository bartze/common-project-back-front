import http from '../http-common';

/**
 * ModuleService class that contains methods to interact with the server API using HTTP requests.
 * The http methods included are get, post, put and delete.
 */
class ModuleService {
    getAll() {
        return http.get('/modules');
    }

    get(id) {
        return http.get(`/modules/${id}`);
    }

    create(data) {
        return http.post('/modules', data);
    }

    update(id, data) {
        return http.put(`/modules/${id}`, data);
    }

    delete(id) {
        return http.delete(`/modules/${id}`);
    }

    deleteAll() {
        return http.delete(`/modules`);
    }

    findByTitle(title) {
        return http.get(`/modules?title=${title}`);
    }
}

const moduleService = new ModuleService();

export default moduleService;
