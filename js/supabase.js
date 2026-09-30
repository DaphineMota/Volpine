const SUPABASE_URL =
    "https://zsewiotvcnisibpnnndc.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_ndFOm34tljNxMwYL1-iQ9Q_py4QfyNJ";


const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );