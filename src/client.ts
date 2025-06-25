import { createClient } from "@supabase/supabase-js";
import config from "../config";

export const supabase = createClient(
  config.SUPABASE_PROJECT_URL,
  config.SUPABASE_API_KEY
);
