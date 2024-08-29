import { createClient } from "@supabase/supabase-js";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6ZWJxdWdubG94YXRmZ2Rxd25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3Nzc0NzYsImV4cCI6MjA0MDM1MzQ3Nn0.8XzKmAkJCcfqzrwNCaL9nXXNvCPuUsxNxnj7H23heFM";
const url = "https://gzebqugnloxatfgdqwne.supabase.co";

// Create a single supabase client for interacting with your database
const supabase = createClient(url, key);

export default supabase