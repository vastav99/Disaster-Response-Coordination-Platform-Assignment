-- Supabase schema for disaster coordination platform
CREATE TABLE IF NOT EXISTS disasters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  location_name TEXT,
  location GEOGRAPHY,
  description TEXT,
  tags TEXT[],
  owner_id TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  audit_trail JSONB
);
