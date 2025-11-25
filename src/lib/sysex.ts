import type { Operation, EffectorNumber } from '@/types/operation'

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

export function generateSysEx(operation: Operation): string {
  switch (operation.type) {
    case 'on':
      return generateEffectorOn(operation.effector)
    case 'off':
      return generateEffectorOff(operation.effector)
    case 'display':
      return generateEffectorDisplay(operation.effector)
  }
}

export function generateMultipleSysEx(operations: Operation[]): string {
  return operations.map(generateSysEx).join('\n')
}
