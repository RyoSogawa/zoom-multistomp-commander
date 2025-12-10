import { HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { GitHubLink, BuyMeACoffeeLink } from '@/components/ExternalLinks'

function HelpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
          <HelpCircle size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>About This App</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-medium mb-1">What is this?</h3>
            <p className="text-muted-foreground">
              This tool generates SysEx commands to control ZOOM MultiStomp series
              effects pedals via MIDI controllers.
            </p>
          </section>

          <section>
            <h3 className="font-medium mb-1">How to use</h3>
            <p className="text-muted-foreground">
              Use this to register commands in MIDI controllers like M-VAVE Chocolate
              and others. Simply add operations, copy the generated SysEx command,
              and paste it into your controller's software.
            </p>
          </section>

          <section>
            <h3 className="font-medium mb-1">Feedback</h3>
            <p className="text-muted-foreground">
              Feature requests and bug reports are welcome on GitHub!
            </p>
            <div className="mt-2">
              <GitHubLink />
            </div>
          </section>

          <section>
            <h3 className="font-medium mb-1">Support</h3>
            <p className="text-muted-foreground">
              If you find this useful, consider buying me a coffee!
            </p>
            <div className="mt-2">
              <BuyMeACoffeeLink />
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default HelpModal
