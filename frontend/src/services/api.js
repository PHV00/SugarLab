// // Cliente REST para http://localhost:3001/api
// const BASE = "http://localhost:3001/api";

// async function http(method, path, body) {
//   const res = await fetch(`${BASE}${path}`, {
//     method,
//     headers: { "Content-Type": "application/json" },
//     body: body ? JSON.stringify(body) : undefined,
//   });
//   if (!res.ok) throw new Error(await res.text());
//   return res.json();
// }

// // ---------- PÚBLICO (vitrine) ----------
// export const api = {
//   listPublishedCourses() {
//     // sua API filtra por status=published por padrão;
//     // deixo explícito para não haver dúvida.
//     return http("GET", `/courses?status=published`);
//   },
//   getCoursePublic(id) {
//     return http("GET", `/courses/${id}`);
//   },

//   // ---------- ADMIN ----------
//   listCourses() {
//     return http("GET", `/admin/courses`);
//   },
//   createCourse(payload) {
//     return http("POST", `/admin/courses`, payload);
//   },
//   updateCourse(id, payload) {
//     return http("PUT", `/admin/courses/${id}`, payload);
//   },
//   deleteCourse(id) {
//     return http("DELETE", `/admin/courses/${id}`);
//   },
// };

// export default api;


// Cliente REST para backend Spring Boot

const BASE = "http://localhost:8080/cursos/v1";

async function http(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// ---------- CLIENTE REST ----------
export const api = {
  // ---------- PÚBLICO ----------
  listPublishedCourses() {
    return http("GET", `/cursos`);
  },
  listCourses () {
    return http("GET", `/cursos`);
  },
  getCourseByTitle(title) {
    return http("GET", `/cursos/titulo?title=${encodeURIComponent(title)}`);
  },
  getCoursePublic(id) {
    return http("GET", `/courses/${id}`);
  },


  // ---------- ADMIN ----------
  createCourse(payload) {
    // garante que highlights seja array
    if (payload.highlights && typeof payload.highlights === "string") {
      payload.highlights = JSON.parse(payload.highlights);
    }
    return http("POST", `/newCurso`, payload);
  },
  updateCourse(id, payload) {
    if (payload.highlights && typeof payload.highlights === "string") {
      payload.highlights = JSON.parse(payload.highlights);
    }
    return http("PUT", `/cursos/edit/${id}`, payload);
  },
  deleteCourse(id) {
    return http("DELETE", `/cursos/${id}`);
  },
};

export default api;
