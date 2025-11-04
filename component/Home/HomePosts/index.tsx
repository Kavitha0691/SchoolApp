'use client'
import { createClient } from "@/utils/supabase/browser-client"
import { getHomePosts, HomePostType } from "@/utils/supabase/queries"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export const HomePosts = ({ posts }: { posts: HomePostType }) => {
  const { data } = useQuery({
    queryKey: ['home-posts'],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await getHomePosts(supabase)

      if (error) throw error;
      return data
    },
    initialData: posts,
    refetchOnMount: false,
    staleTime: 10000
  })

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data && data.map(({ id, slug, title, image, users }) => (
        <Link
          href={`/${slug}`}
          key={id}
          className="block border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform bg-white"
        >
          <h2 className="font-bold text-lg mb-2">{title}</h2>
          {image && <img src={image} alt={title} className="mt-2 rounded" />}
          <div className="text-right text-sm text-gray-500">by {users.username}</div>
        </Link>
      ))}
    </div>
  )
}
