# Tasks: add-tuner-volume-tempo

## Implementation Tasks

- [x] 1. Operation型を拡張してUnion型に変更（EffectorOperation | TunerOperation | VolumeOperation | TempoOperation）
- [x] 2. チューナーON/OFFのSysExメッセージ生成関数を追加
- [x] 3. パッチボリュームのSysExメッセージ生成関数を追加（値: 0〜100）
- [x] 4. テンポ設定のSysExメッセージ生成関数を追加（BPM: 40〜250）
- [x] 5. generateSysEx関数を拡張して新しい操作タイプに対応
- [x] 6. UIに新しい操作タイプの選択肢を追加
- [x] 7. パッチボリューム用の数値入力UIを追加
- [x] 8. テンポ用の数値入力UIを追加
- [x] 9. 動作確認（各操作タイプでメッセージが正しく生成されることを確認）

## Dependencies

- タスク1が完了してから2〜5を実行
- タスク2〜5が完了してから6〜8を実行
- タスク6〜8が完了してから9を実行

## Parallelizable

- タスク2, 3, 4は並行して実行可能
- タスク6, 7, 8は並行して実行可能
