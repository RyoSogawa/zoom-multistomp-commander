import { GitHubLink, BuyMeACoffeeLink } from '@/components/ExternalLinks'

function Footer() {
  return (
    <footer className="mt-auto py-6 text-center">
      <div className="flex flex-row items-center justify-center gap-2">
        <GitHubLink />
        <BuyMeACoffeeLink />
      </div>
    </footer>
  )
}

export default Footer
