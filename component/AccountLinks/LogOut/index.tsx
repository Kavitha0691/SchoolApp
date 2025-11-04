'use client'

import { LogOut } from "lucide-react"
import { LogOut as performLogout } from "@/actions/log-out"
import { useState } from "react"

const LogOutButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    performLogout()
  }

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        onClick={handleClick}
        className="
          p-2 rounded-full text-red-500 hover:bg-red-100
          transition-colors duration-150
        "
      >
        <LogOut size={22} />
      </button>

      {showTooltip && (
        <div
          className="
            absolute bottom-full mb-2 whitespace-nowrap
            bg-gray-800 text-white text-xs rounded-md px-2 py-1
            shadow-md
          "
        >
          Logout
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      )}
    </div>
  )
}

export default LogOutButton