import type { Operation, EffectorNumber } from '@/types/operation'
import { isEffectorOperation, isTunerOperation, isVolumeOperation, isTempoOperation } from '@/types/operation'

const toHex = (value: number): string => value.toString(16).toUpperCase().padStart(2, '0')

const effectorToIndex = (effector: EffectorNumber): number => effector - 1

export function generateEffectorOn(effector: EffectorNumber): string {
  const index = effectorToIndex(effector)
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x20, 0x00, index, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateEffectorOff(effector: EffectorNumber): string {
  const index = effectorToIndex(effector)
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x20, 0x00, index, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateEffectorDisplay(effector: EffectorNumber): string {
  const index = effectorToIndex(effector)
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x20, 0x00, 0x64, 0x01, index, 0x00, 0x00, 0x00, 0x00, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateTunerOn(): string {
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x0B, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateTunerOff(): string {
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x0C, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generatePatchVolume(value: number): string {
  const clampedValue = Math.max(0, Math.min(100, Math.round(value)))
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x20, 0x00, 0x64, 0x00, clampedValue, 0x00, 0x00, 0x00, 0x00, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateTempo(bpm: number): string {
  const clampedBpm = Math.max(40, Math.min(250, Math.round(bpm)))
  const bpmLow = clampedBpm & 0x7F
  const bpmHigh = (clampedBpm >> 7) & 0x7F
  const bytes = [0xF0, 0x52, 0x00, 0x6E, 0x64, 0x20, 0x00, 0x64, 0x02, bpmLow, bpmHigh, 0x00, 0x00, 0x00, 0xF7]
  return bytes.map(toHex).join(' ')
}

export function generateSysEx(operation: Operation): string {
  if (isEffectorOperation(operation)) {
    switch (operation.type) {
      case 'on':
        return generateEffectorOn(operation.effector)
      case 'off':
        return generateEffectorOff(operation.effector)
      case 'display':
        return generateEffectorDisplay(operation.effector)
    }
  }

  if (isTunerOperation(operation)) {
    return operation.enabled ? generateTunerOn() : generateTunerOff()
  }

  if (isVolumeOperation(operation)) {
    return generatePatchVolume(operation.value)
  }

  if (isTempoOperation(operation)) {
    return generateTempo(operation.bpm)
  }

  throw new Error('Unknown operation type')
}

export function generateMultipleSysEx(operations: Operation[]): string {
  return operations.map(generateSysEx).join('\n')
}
