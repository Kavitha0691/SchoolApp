import { createClient } from "./browser-client"
import { type QueryData } from '@supabase/supabase-js'

export const getHomePosts = async (supabase: ReturnType<typeof createClient>) => {
  return await supabase
    .from('posts')
    .select('id, title, slug, image, content, users("username"), image')
    .order('created_at', { ascending: false })
}

export const getSinglePost = async (slug: string) => {
  const supabase = createClient()
  return await supabase
    .from('posts')
    .select('id, title, content, slug, user_id, users("username"), image')
    .eq('slug', slug)
    .single()
}

export const getSearchedPosts = async (searchTerm: string) => {
  const supabase = createClient()
  return await supabase.from('posts')
    .select('title, slug')
    .ilike('title', `%${searchTerm}%`)
}

export const getCommentsByPostId = async (postId: number) => {
  const supabase = createClient();
  return await supabase
    .from("comments")
    .select("id, content, created_at, user_id, users(username)")
    .eq("post_id", (postId))
    .order("created_at", { ascending: false });
};

export type CommentType = QueryData<ReturnType<typeof getCommentsByPostId>>[0];
export type SinglePostType = QueryData<ReturnType<typeof getSinglePost>>
export type HomePostType = QueryData<ReturnType<typeof getHomePosts>>