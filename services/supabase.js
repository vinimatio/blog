import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://syqwoocnnsbcygyliisx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cXdvb2NubnNiY3lneWxpaXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NjkwMjUsImV4cCI6MjAzNjA0NTAyNX0.6NMW2_NHl_1Bbe9C7g2KEm54hqLvaU0aIVNIAI8rUXQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
