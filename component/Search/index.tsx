'use client'

import { SetStateAction, useState } from "react"

import { Key, Search } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { getSearchedPosts } from "@/utils/supabase/queries"
import Link from "next/link"

const SearchInput = () => {
  const [userInput, setUserInput] = useState<string>('')

  const { data } = useQuery({
    queryKey: ['search-results', userInput],
    queryFn: async () => {
      const { data, error } = await getSearchedPosts(userInput)
      if (error) throw new Error
      return data
    },
    enabled: userInput && userInput.length > 0 ? true : false
  })

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUserInput(e.target.value)
  }


  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-full shadow-sm">
        <div className="relative flex-1">
          <input
            onChange={handleChange}
            name="search"
            placeholder="Search"
            value={userInput}
            className="w-full px-4 py-2 text-gray-700 border border-transparent rounded-l-full outline-none focus:border-blue-500 focus:ring-0 transition-all duration-150"
          />

          {data && userInput && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
              {data.length > 0 ? (
                data.map(({ title, slug }: { title: string; slug: string }) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    onClick={() => setUserInput('')}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  >
                    {title}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        <button
          type="button"
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 flex items-center justify-center border-l border-gray-300 rounded-r-full"
        >
          <Search size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  )

}

export default SearchInput

