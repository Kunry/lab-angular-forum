import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServiceThreadsService {
  BASE_URL = "http://localhost:3000";

  options: Object = { withCredentials: true };

  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`).map(res => res.json());
  }

  newThread(thread) {
    return this.http
      .post(`${this.BASE_URL}/api/threads`, thread, this.options)
      .map(res => res.json());
  }

  getThread(id) {
    return this.http
      .get(`${this.BASE_URL}/api/threads/${id}`)
      .map(res => res.json());
  }
}
