import { Github } from 'lucide-react'
import { GITHUB_URL, BMC_URL } from '@/lib/constants'

export function GitHubLink() {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#333] text-white rounded-md text-sm cursor-pointer hover:bg-[#555] transition-colors"
    >
      <Github size={14} />
      GitHub
    </a>
  )
}

export function BuyMeACoffeeLink() {
  return (
    <a
      href={BMC_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFDD00] text-black rounded-md text-sm cursor-pointer hover:opacity-90 transition-opacity"
    >
      ☕ Buy me a coffee
    </a>
  )
}
