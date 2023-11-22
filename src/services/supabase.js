import { createClient } from "@supabase/supabase-js";

export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indna2dyb3p0enB2Y3N1ZmpvdGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NzM2NDMsImV4cCI6MjAxNjE0OTY0M30.jfGap1gg0oZhtfF3_ZVbIgP0Mj7Zlf_dP1AFJlmRqC0";

export const supabaseUrl = "https://wgkgroztzpvcsufjotbo.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
