import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ncjiybhlgjryuwdarjer.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaml5YmhsZ2pyeXV3ZGFyamVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTA5MzMsImV4cCI6MjA1ODYyNjkzM30.QDMGiOEpQ2AfJtGw9PRYnexC8DF1msrCeGkwOcCk_BA"
);

export default supabase;
