import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { generateMultipleSysEx } from '@/lib/sysex'
import type { Operation, OperationType, EffectorNumber } from '@/types/operation'

const EFFECTOR_NUMBERS: EffectorNumber[] = [1, 2, 3, 4, 5, 6]
const OPERATION_TYPES: { type: OperationType; label: string }[] = [
  { type: 'on', label: 'ON' },
  { type: 'off', label: 'OFF' },
  { type: 'display', label: 'Display' },
]

function App() {
  const [operations, setOperations] = useState<Operation[]>([])
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const output = operations.length > 0 ? generateMultipleSysEx(operations) : ''

  const addOperation = useCallback((type: OperationType, effector: EffectorNumber) => {
    setOperations(prev => [...prev, { type, effector }])
  }, [])

  const removeOperation = useCallback((index: number) => {
    setOperations(prev => prev.filter((_, i) => i !== index))
  }, [])

  const clearOperations = useCallback(() => {
    setOperations([])
  }, [])

  const copyToClipboard = useCallback(async () => {
    if (!output) return

    if (!navigator.clipboard) {
      setCopyStatus('error')
      setTimeout(() => setCopyStatus('idle'), 2000)
      return
    }

    try {
      await navigator.clipboard.writeText(output)
      setCopyStatus('success')
      setTimeout(() => setCopyStatus('idle'), 2000)
    } catch {
      setCopyStatus('error')
      setTimeout(() => setCopyStatus('idle'), 2000)
    }
  }, [output])

  const getOperationLabel = (op: Operation) => {
    const typeLabel = OPERATION_TYPES.find(t => t.type === op.type)?.label ?? op.type
    return `${op.effector} ${typeLabel}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto p-4 max-w-md">
        <h1 className="text-xl font-bold mb-6 text-center">ZOOM MultiStomp Commander</h1>

        <section className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Add Operation</h2>
          <div className="grid grid-cols-3 gap-2">
            {OPERATION_TYPES.map(({ type, label }) => (
              <div key={type} className="space-y-2">
                <div className="text-xs text-center text-muted-foreground">{label}</div>
                {EFFECTOR_NUMBERS.map(num => (
                  <Button
                    key={`${type}-${num}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => addOperation(type, num)}
                  >
                    {num}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </section>

        {operations.length > 0 && (
          <section className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-muted-foreground">Selected Operations</h2>
              <Button variant="ghost" size="sm" onClick={clearOperations}>
                Clear
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {operations.map((op, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="sm"
                  onClick={() => removeOperation(index)}
                >
                  {getOperationLabel(op)} ×
                </Button>
              ))}
            </div>
          </section>
        )}

        {output && (
          <section>
            <h2 className="text-sm font-medium text-muted-foreground mb-3">Output</h2>
            <pre className="bg-card p-4 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all mb-4">
              {output}
            </pre>
            <Button
              className="w-full"
              onClick={copyToClipboard}
              variant={copyStatus === 'success' ? 'secondary' : copyStatus === 'error' ? 'destructive' : 'default'}
            >
              {copyStatus === 'success' ? 'Copied!' : copyStatus === 'error' ? 'Copy failed' : 'Copy to Clipboard'}
            </Button>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
