import http from "../../movie-ui/frontend/src/http";

class moviesService {
    getAll() {
        return http.get("/movies");
    }

    get(id) {
        return http.get(`/movies/${id}`);
    }


    findByTitle(title) {
        return http.get(`/movies?title=${title}`);
    }
    findByGenre(genre) {
        return http.get(`/movies?genre=${genre}`);
    }
    findByTitle(actor) {
        return http.get(`/movies?actor=${actor}`);
    }
}

export default new moviesService();