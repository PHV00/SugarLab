// Cliente REST para http://localhost:3001/api
const BASE = "http://localhost:3001/api";

async function http(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// ---------- PÚBLICO (vitrine) ----------
export const api = {
  listPublishedCourses() {
    // sua API filtra por status=published por padrão;
    // deixo explícito para não haver dúvida.
    return http("GET", `/courses?status=published`);
  },
  getCoursePublic(id) {
    return http("GET", `/courses/${id}`);
  },

  // ---------- ADMIN ----------
  listCourses() {
    return http("GET", `/admin/courses`);
  },
  createCourse(payload) {
    return http("POST", `/admin/courses`, payload);
  },
  updateCourse(id, payload) {
    return http("PUT", `/admin/courses/${id}`, payload);
  },
  deleteCourse(id) {
    return http("DELETE", `/admin/courses/${id}`);
  },
};

export default api;
