import { createClient } from "@/utils/supabase/server-client"
import Link from "next/link"
import LogOutButton from "./LogOut"
import { LogIn } from "lucide-react"

const AccountLinks = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <Link
            href="/create"
            className="border border-gray-400 rounded-3xl px-6 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors capitalize"
          >
            Create
          </Link>
          <LogOutButton />
        </>
      ) : (
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/auth/login"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
          >
            <LogIn size={22} />
            <span className="text-base font-medium">Login</span>
          </Link>
        </div>
      )}

    </div>
  )
}

export default AccountLinks