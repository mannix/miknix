import React from "react"

export default function Home() {
  return (
    <div className="flex flex-col inline-flex space-y-6 font-mono">
      <div>
        <div className="text-3xl">
          &nbsp;&nbsp;&nbsp;mik<div className="text-gray-400 inline">e</div>
        </div>
        <div className="text-3xl">
          <div className="text-gray-400 inline">man</div>nix
        </div>
      </div>
      <div className="text-lg">
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        Hi &#128075;
      </div>
      <div className="flex flex-row  p-2 justify-items-center underline bg-gray-100 border rounded-lg border-gray-200 text-sm space-x-4">
        <div className="text-center">
          <a href="https://twitter.com/miknix/">Twitter</a>
        </div>
        <div className="text-center">
          <a href="https://github.com/mannix/">GitHub</a>
        </div>
      </div>
    </div>
  )
}
