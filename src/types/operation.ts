export type OperationType = 'on' | 'off' | 'display'

export type EffectorNumber = 1 | 2 | 3 | 4 | 5 | 6

export interface Operation {
  type: OperationType
  effector: EffectorNumber
}
