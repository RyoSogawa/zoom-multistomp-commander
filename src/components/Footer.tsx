const GITHUB_URL = 'https://github.com/RyoSogawa/zoom-multistomp-commander'
const AUTHOR_URL = 'https://bento.me/ryo-sogawa'
const BMC_URL = 'https://buymeacoffee.com/RyoSogawa'

function Footer() {
  return (
    <footer className="mt-auto py-6 text-center text-sm text-muted-foreground">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            RyoSogawa
          </a>
        </div>
        <a
          href={BMC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          ☕ Buy me a coffee
        </a>
      </div>
    </footer>
  )
}

export default Footer
