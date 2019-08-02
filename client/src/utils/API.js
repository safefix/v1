import axios from "axios";

export default {
  getProjects: function() {
    return axios.get("/api/projects");
  },
  getProject: function(id) {   
    return axios.get(`/api/projects/${id}`);
  },
  createProject: function(formData) {
    return axios.post("/api/projects", formData);
  },
  updateProject: function(id, formData) {
    return axios.put(`/api/projects/${id}`, formData);
  },
  deleteProject: function(id) {
    return axios.delete(`/api/projects/${id}`);
  }
};
