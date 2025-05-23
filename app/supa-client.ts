import { createClient } from "@supabase/supabase-js";
import { type MergeDeep, type SetFieldType, type SetNonNullable } from "type-fest";
import { type Database as SupabaseDatabase } from "database.types";

type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
      };
    };
  }
>;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (! supabaseUrl || ! supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const client = createClient<Database>(
  supabaseUrl,
  supabaseKey
);

export default client;
