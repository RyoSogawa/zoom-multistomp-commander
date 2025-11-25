import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { generateMultipleSysEx } from '@/lib/sysex'
import type { Operation, OperationType, EffectorNumber } from '@/types/operation'

const EFFECTOR_NUMBERS: EffectorNumber[] = [6, 5, 4, 3, 2, 1]
const OPERATION_TYPES: { type: OperationType; label: string }[] = [
  { type: 'on', label: 'ON' },
  { type: 'off', label: 'OFF' },
  { type: 'display', label: 'Display' },
]

function App() {
  const [operations, setOperations] = useState<Operation[]>([])
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedType, setSelectedType] = useState<OperationType>('on')

  const output = operations.length > 0 ? generateMultipleSysEx(operations) : ''

  const handleTypeSelect = useCallback((value: string) => {
    setSelectedType(value as OperationType)
  }, [])

  const addOperation = useCallback((effector: EffectorNumber) => {
    setOperations(prev => [...prev, { type: selectedType, effector }])
  }, [selectedType])

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

        <section className="mb-6 p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium">Operations</h2>
            {operations.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearOperations}>
                Clear
              </Button>
            )}
          </div>

          <Select onValueChange={handleTypeSelect} value={selectedType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {OPERATION_TYPES.map(({ type, label }) => (
                <SelectItem key={type} value={type}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2 justify-end">
            {EFFECTOR_NUMBERS.map(num => (
              <Button
                key={num}
                variant="outline"
                size="sm"
                onClick={() => addOperation(num)}
              >
                {num}
              </Button>
            ))}
          </div>

          {operations.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t">
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
          )}
        </section>

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
