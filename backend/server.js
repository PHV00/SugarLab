import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // ajuste a porta do seu front
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "SUGARLAB",
  waitForConnections: true,
  connectionLimit: 10
});

const parseJSON = (v) => {
  if (!v) return [];
  try { return typeof v === "string" ? JSON.parse(v) : v; } catch { return []; }
};

const toClient = (row) => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  description: row.description,
  summary: row.summary,
  thumbnail_url: row.thumbnail_url,
  thumbnailUrl: row.thumbnail_url, 
  highlights: parseJSON(row.highlights),
  includes: row.includes,
  date_range: row.date_range,
  time_range: row.time_range,
  modality: row.modality,
  workload_hours: row.workload_hours,
  price: row.price,
  featured: !!row.featured,
  status: row.status
});

// ---------- ROTAS PÚBLICAS (VITRINE) ----------
app.get("/api/courses", async (req, res) => {
  const { status = "published" } = req.query;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM courses WHERE status=? ORDER BY featured DESC, id DESC",
      [status]
    );
    const data = rows.map(toClient).map((c) => ({
      ...c,
      details: {
        dateRange: c.date_range,
        timeRange: c.time_range,
        modality: c.modality,
        workloadHours: c.workload_hours,
        includes: c.includes
      }
    }));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/api/courses/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM courses WHERE id=?", [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: "Curso não encontrado" });
    res.json(toClient(rows[0]));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ---------- ROTAS ADMIN (CRUD SEPARADO) ----------
app.get("/api/admin/courses", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM courses ORDER BY id DESC");
    res.json(rows.map(toClient));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/admin/courses", async (req, res) => {
  const {
    slug, title, description, summary, thumbnail_url,
    highlights = [], includes, date_range, time_range, modality,
    workload_hours, price = null, featured = 0, status = "draft"
  } = req.body;

  try {
    const sql = `
      INSERT INTO courses
      (slug,title,description,summary,thumbnail_url,highlights,includes,
       date_range,time_range,modality,workload_hours,price,featured,status)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;
    const vals = [
      slug, title, description, summary, thumbnail_url,
      JSON.stringify(highlights), includes,
      date_range, time_range, modality, workload_hours, price, featured ? 1 : 0, status
    ];
    const [ret] = await pool.query(sql, vals);
    res.json({ id: ret.insertId });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put("/api/admin/courses/:id", async (req, res) => {
  const id = req.params.id;
  const {
    slug, title, description, summary, thumbnail_url,
    highlights = [], includes, date_range, time_range, modality,
    workload_hours, price = null, featured = 0, status = "draft"
  } = req.body;

  try {
    const sql = `
      UPDATE courses SET
        slug=?, title=?, description=?, summary=?, thumbnail_url=?,
        highlights=?, includes=?, date_range=?, time_range=?, modality=?,
        workload_hours=?, price=?, featured=?, status=?
      WHERE id=?
    `;
    const vals = [
      slug, title, description, summary, thumbnail_url,
      JSON.stringify(highlights), includes, date_range, time_range, modality,
      workload_hours, price, featured ? 1 : 0, status, id
    ];
    await pool.query(sql, vals);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete("/api/admin/courses/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM courses WHERE id=?", [req.params.id]);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3001, () =>
  console.log("✅ API http://localhost:3001  (public: /api/courses | admin: /api/admin/courses)")
);
