import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

const storageDir = path.join(process.cwd(), "storage");
fs.mkdirSync(storageDir, { recursive: true });

const db = new Database(path.join(storageDir, "finlearn.sqlite"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

const schema = fs.readFileSync(path.join(process.cwd(), "db", "schema.sql"), "utf8");
db.exec(schema);

export default db;
