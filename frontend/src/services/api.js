// Cliente REST para http://localhost:3001/api
const BASE = "http://localhost:8080/cursos/v1";

async function http(method, path, body) {
  const token = localStorage.getItem("token");

  console.log(body)

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  console.log(res);

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// ---------- PÚBLICO (vitrine) ----------
export const api = {
  listPublishedCourses() {
    // sua API filtra por status=published por padrão;
    // deixo explícito para não haver dúvida.
    return http("GET", `/cursos`);
  },
  getCoursePublic(id) {
    return http("GET", `/curso/${id}`);
  },

  // ---------- ADMIN ----------
  listCourses() {
    return http("GET", `/cursos`);
  },
  createCourse(payload) { 
    return http("POST", `/newCurso`, payload);
  },
  updateCourse(id, payload) {
    return http("PUT", `/edit/${id}`, payload);
  },
  deleteCourse(id) {
    return http("DELETE", `/curso/${id}`);
  },
};

export default api;
