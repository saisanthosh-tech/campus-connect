import { createClient } from '@supabase/supabase-js'

// Direct Paste for Demo Purpose
const supabaseUrl = 'https://xvauvdsgnuhhyxpnhwjj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2YXV2ZHNnbnVoaHl4cG5od2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MDE0ODMsImV4cCI6MjA4NTA3NzQ4M30.DevckpAJnBhE_qUaRzvJZlxZLjpkmS2cUldlVDLWYvs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)