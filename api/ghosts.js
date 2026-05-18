// Pulse Runner — spøkelses-API.
// Lagrer og henter "spøkelsesløp" fra en Neon-database.
// Forbindelsesstrengen ligger i miljøvariabelen DATABASE_URL (settes i Vercel).
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Åpent API for et offentlig spill — ingen hemmelige data sendes.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'DATABASE_URL er ikke satt i Vercel' });
  }
  const sql = neon(process.env.DATABASE_URL);

  try {
    // --- Hent spøkelser for en bane ---
    if (req.method === 'GET') {
      const seed = parseInt(req.query.seed, 10);
      const world = String(req.query.world || '');
      const diff = String(req.query.diff || '');
      if (Number.isNaN(seed) || !world || !diff) {
        return res.status(400).json({ error: 'mangler parametre' });
      }
      const rows = await sql`
        SELECT name, path, time_ms FROM ghosts
        WHERE seed = ${seed} AND world = ${world} AND diff = ${diff}
        ORDER BY created_at DESC
        LIMIT 5`;
      return res.status(200).json(rows);
    }

    // --- Lagre et nytt løp ---
    if (req.method === 'POST') {
      const b = req.body || {};
      const seed = Number(b.seed);
      if (Number.isNaN(seed) || !b.world || !b.diff || !Array.isArray(b.path)) {
        return res.status(400).json({ error: 'ugyldig data' });
      }
      const name = String(b.name || 'Anonym').slice(0, 20);
      const time_ms = Math.max(0, Math.min(600000, Number(b.time_ms) || 0));
      // path = liste med y-posisjoner; rundes av og begrenses for å spare plass
      const path = b.path.slice(0, 4000).map((n) => Math.round(Number(n) || 0));
      await sql`
        INSERT INTO ghosts (seed, world, diff, name, path, time_ms)
        VALUES (${seed}, ${String(b.world)}, ${String(b.diff)}, ${name},
                ${JSON.stringify(path)}::jsonb, ${time_ms})`;
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'metode ikke tillatt' });
  } catch (e) {
    return res.status(500).json({ error: 'serverfeil' });
  }
}
