import axios from "axios";

export async function getProjects() {
  const response = await axios.get("assets/json/projects.json");
  return response.data;
}
export async function getProject(id) {
  const response = await axios.get("../assets/json/projects.json");
  return response.data.filter((data) => data.id === parseInt(id))[0];
}
