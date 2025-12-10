import { Github } from 'lucide-react'

const GITHUB_URL = 'https://github.com/RyoSogawa/zoom-multistomp-commander'
const BMC_URL = 'https://buymeacoffee.com/RyoSogawa'

function Footer() {
  return (
    <footer className="mt-auto py-6 text-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#333] text-white rounded-md text-sm cursor-pointer hover:bg-[#555] transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        <a
          href={BMC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFDD00] text-black rounded-md text-sm cursor-pointer hover:opacity-90 transition-opacity"
        >
          ☕ Buy me a coffee
        </a>
      </div>
    </footer>
  )
}

export default Footer
