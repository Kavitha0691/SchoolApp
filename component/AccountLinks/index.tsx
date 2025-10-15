import { createClient } from "@/utils/supabase/server-client"
import Link from "next/link"
import LogOutButton from "./LogOut"

const AccountLinks = async () => {
    const supabase = await createClient()
    const { data: { user }, error } = await supabase.auth.getUser()
    

    return (
        <div>
            {user ?
                <>
                    <Link href="/create" className="button-teritary mr-4">Create Post</Link>
                    <LogOutButton /> 
                </>
                
                : <Link href="/auth/login" className="button-secondary">Login</Link>
            }
        </div>
    )
}

export default AccountLinks