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
import type { Operation, OperationType, EffectorNumber, EffectorOperation, TunerOperation, VolumeOperation, TempoOperation } from '@/types/operation'
import { isEffectorOperation, isTunerOperation, isVolumeOperation, isTempoOperation } from '@/types/operation'
import Footer from '@/components/Footer'
import HelpModal from '@/components/HelpModal'

const EFFECTOR_NUMBERS: EffectorNumber[] = [6, 5, 4, 3, 2, 1]

type OperationTypeConfig = {
  type: OperationType
  label: string
}

const OPERATION_TYPES: OperationTypeConfig[] = [
  { type: 'on', label: 'ON' },
  { type: 'off', label: 'OFF' },
  { type: 'display', label: 'Disp' },
  { type: 'tuner', label: 'Tuner' },
  // { type: 'patch-volume', label: 'Patch Volume' },
  { type: 'tempo', label: 'Tempo' },
]

function createDefaultOperation(type: OperationType): Operation {
  switch (type) {
    case 'on':
    case 'off':
    case 'display':
      return { type, effector: 1 } as EffectorOperation
    case 'tuner':
      return { type, enabled: true } as TunerOperation
    case 'patch-volume':
      return { type, value: 100 } as VolumeOperation
    case 'tempo':
      return { type, bpm: 120 } as TempoOperation
  }
}

function App() {
  const [operations, setOperations] = useState<Operation[]>([])
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const output = operations.length > 0 ? generateMultipleSysEx(operations) : ''

  const addOperation = useCallback(() => {
    setOperations(prev => [...prev, createDefaultOperation('on')])
  }, [])

  const updateOperationType = useCallback((index: number, newType: OperationType) => {
    setOperations(prev => prev.map((op, i) => {
      if (i !== index) return op
      const newOp = createDefaultOperation(newType)
      if (isEffectorOperation(op) && isEffectorOperation(newOp)) {
        return { ...newOp, effector: op.effector }
      }
      return newOp
    }))
  }, [])

  const updateEffector = useCallback((index: number, effector: EffectorNumber) => {
    setOperations(prev => prev.map((op, i) => {
      if (i !== index || !isEffectorOperation(op)) return op
      return { ...op, effector }
    }))
  }, [])

  const updateVolume = useCallback((index: number, value: number) => {
    setOperations(prev => prev.map((op, i) => {
      if (i !== index || !isVolumeOperation(op)) return op
      return { ...op, value: Math.max(0, Math.min(100, value)) }
    }))
  }, [])

  const updateTempo = useCallback((index: number, bpm: number) => {
    setOperations(prev => prev.map((op, i) => {
      if (i !== index || !isTempoOperation(op)) return op
      return { ...op, bpm: Math.max(40, Math.min(250, bpm)) }
    }))
  }, [])

  const updateTuner = useCallback((index: number, enabled: boolean) => {
    setOperations(prev => prev.map((op, i) => {
      if (i !== index || !isTunerOperation(op)) return op
      return { ...op, enabled }
    }))
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

  const renderOperationControls = (op: Operation, index: number) => {
    if (isEffectorOperation(op)) {
      return (
        <div className="flex gap-1 flex-1 justify-end">
          {EFFECTOR_NUMBERS.map(num => (
            <Button
              key={num}
              variant={op.effector === num ? 'default' : 'outline'}
              size="sm"
              className="w-8 h-8 p-0"
              onClick={() => updateEffector(index, num)}
            >
              {num}
            </Button>
          ))}
        </div>
      )
    }

    if (isTunerOperation(op)) {
      return (
        <div className="flex items-center gap-2 flex-1 justify-end">
          <span className="text-xs text-muted-foreground">OFF</span>
          <button
            type="button"
            role="switch"
            aria-checked={op.enabled}
            onClick={() => updateTuner(index, !op.enabled)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              op.enabled ? 'bg-primary' : 'bg-input'
            }`}
          >
            <span
              className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                op.enabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className="text-xs text-muted-foreground">ON</span>
        </div>
      )
    }

    if (isVolumeOperation(op)) {
      return (
        <div className="flex items-center gap-2 flex-1 justify-end">
          <input
            type="range"
            min="0"
            max="100"
            value={op.value}
            onChange={(e) => updateVolume(index, parseInt(e.target.value, 10))}
            className="w-24"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={op.value}
            onChange={(e) => updateVolume(index, parseInt(e.target.value, 10) || 0)}
            className="w-16 h-8 text-center border rounded bg-background"
          />
        </div>
      )
    }

    if (isTempoOperation(op)) {
      return (
        <div className="flex items-center gap-2 flex-1 justify-end">
          <input
            type="range"
            min="40"
            max="250"
            value={op.bpm}
            onChange={(e) => updateTempo(index, parseInt(e.target.value, 10))}
            className="w-24"
          />
          <input
            type="number"
            min="40"
            max="250"
            value={op.bpm}
            onChange={(e) => updateTempo(index, parseInt(e.target.value, 10) || 40)}
            className="w-16 h-8 text-center border rounded bg-background"
          />
          <span className="text-xs text-muted-foreground">BPM</span>
        </div>
      )
    }

    return <div className="flex-1" />
  }

  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      <main className="container mx-auto p-4 max-w-md flex-1">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h1 className="text-xl font-bold text-center">ZOOM MultiStomp Commander</h1>
          <HelpModal />
        </div>

        <section className="mb-6 p-4 border rounded-lg space-y-4">
          <div className="relative flex items-center">
            <h2 className="text-sm font-medium">Operations</h2>
            {operations.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearOperations} className="absolute right-0">
                Clear All
              </Button>
            )}
          </div>

          {operations.map((op, index) => (
            <div key={index} className="flex items-center gap-2">
              <Select
                value={op.type}
                onValueChange={(value) => updateOperationType(index, value as OperationType)}
              >
                <SelectTrigger className="w-32">
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

              {renderOperationControls(op, index)}

              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeOperation(index)}
              >
                ×
              </Button>
            </div>
          ))}

          <Button variant="outline" className="w-full" onClick={addOperation}>
            + Add Operation
          </Button>
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
      <Footer />
    </div>
  )
}

export default App
