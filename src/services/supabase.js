import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://bnixcfzyirsjdhglztxl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuaXhjZnp5aXJzamRoZ2x6dHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTE0NTksImV4cCI6MjAxODM2NzQ1OX0.-WDv1Jg0Y2_viT0jRiVL9cu5Emtb--VO1vjo4iafciE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
