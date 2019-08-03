import axios from "axios";

export default {
  // beginning of Project methods
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
  },

  // beginning of Contractor methods
  getContractors: function() {
    return axios.get('/api/contractors');
  },
  getContractor: function(id) {   
    return axios.get(`/api/contractors/${id}`);
  },
  updateContractor: function(id) {
    return axios.put(`/api/projects/${id}`);
  },

  // beginning of Tenant methods
  getTenants: function() {
    return axios.get('/api/tenants');
  },
  getTenant: function(id) {   
    return axios.get(`/api/tenants/${id}`);
},
  updateTenant: function(id) {
  return axios.put(`/api/tenants/${id}`);
}
}
