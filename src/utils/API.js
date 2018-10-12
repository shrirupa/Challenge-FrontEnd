import config from "../config/config";
import axios from "axios";

const apiRoot = `http://${config.server.hostname}:${config.server.port}/`;
// const apiRoot = `http://${config.server.hostname}/`;

const getPatientByEmail = email =>
  axios.get(`${apiRoot}patient?email=${email}`);

const getDoctorByEmail = email => axios.get(`${apiRoot}doctor?email=${email}`);

const getAdminByEmail = email => axios.get(`${apiRoot}admin?email=${email}`);

const getAllAppointments = () => axios.get(`${apiRoot}allappointments`);

const getAppointmentsByDoctor = email =>
  axios.get(`${apiRoot}appointment/doctor?doctorEmail=${email}`);
const getAllDoctors = () => axios.get(`${apiRoot}alldoctors`);

const deleteDoctor = email => axios.put(`${apiRoot}doctor?email=${email}`);

const getPrescriptions = email =>
  axios.get(`${apiRoot}prescription/patient?patientEmail=${email}`);

const getPrescriptionsByDoctorEmail = email =>
  axios.get(`${apiRoot}prescription/doctor?doctorEmail=${email}`);
const postAppointment = json => axios.post(`${apiRoot}appointment`, json);

const postPatient = json => axios.post(`${apiRoot}patient`, json);
const postDoctor = json => axios.post(`${apiRoot}doctor`, json);
const postAdmin = json => axios.post(`${apiRoot}admin`, json);
const postMedication = json => axios.post(`${apiRoot}prescription`, json);
const updateAppointment = (id, json) =>
  axios.put(`${apiRoot}appointment/${id}`, json);
const API = {
  getPrescriptionsByDoctorEmail,
  postMedication,
  updateAppointment,
  getPatientByEmail,
  getDoctorByEmail,
  getAdminByEmail,
  postPatient,
  postDoctor,
  postAdmin,
  getAllAppointments,
  getAppointmentsByDoctor,
  postAppointment,
  getAllDoctors,
  deleteDoctor,
  getPrescriptions
};

export default API;
