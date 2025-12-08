export type EffectorOperationType = 'on' | 'off' | 'display'
export type TunerOperationType = 'tuner'
export type VolumeOperationType = 'patch-volume'
export type TempoOperationType = 'tempo'

export type OperationType = EffectorOperationType | TunerOperationType | VolumeOperationType | TempoOperationType

export type EffectorNumber = 1 | 2 | 3 | 4 | 5 | 6

export interface EffectorOperation {
  type: EffectorOperationType
  effector: EffectorNumber
}

export interface TunerOperation {
  type: TunerOperationType
  enabled: boolean
}

export interface VolumeOperation {
  type: VolumeOperationType
  value: number // 0-100
}

export interface TempoOperation {
  type: TempoOperationType
  bpm: number // 40-250
}

export type Operation = EffectorOperation | TunerOperation | VolumeOperation | TempoOperation

export function isEffectorOperation(op: Operation): op is EffectorOperation {
  return op.type === 'on' || op.type === 'off' || op.type === 'display'
}

export function isTunerOperation(op: Operation): op is TunerOperation {
  return op.type === 'tuner'
}

export function isVolumeOperation(op: Operation): op is VolumeOperation {
  return op.type === 'patch-volume'
}

export function isTempoOperation(op: Operation): op is TempoOperation {
  return op.type === 'tempo'
}
