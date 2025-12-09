# Tasks: add-tuner-volume-tempo

## Implementation Tasks

- [x] 1. Operation型を拡張してUnion型に変更（EffectorOperation | TunerOperation | VolumeOperation | TempoOperation）
- [x] 2. チューナーON/OFFのSysExメッセージ生成関数を追加
- [x] 3. パッチボリュームのSysExメッセージ生成関数を追加（値: 0〜100）
- [x] 4. テンポ設定のSysExメッセージ生成関数を追加（BPM: 40〜250）
- [x] 5. generateSysEx関数を拡張して新しい操作タイプに対応
- [x] 6. UIに新しい操作タイプの選択肢を追加
- [x] 7. パッチボリューム用の数値入力UI（スライダー＋数値入力）を追加
- [x] 8. テンポ用の数値入力UI（スライダー＋数値入力＋BPMラベル）を追加
- [x] 9. チューナー用のスイッチUI（ON/OFF切り替え）を追加
- [x] 10. 動作確認（各操作タイプでメッセージが正しく生成されることを確認）
- [x] 11. 既存テストの修正（Playwrightテスト全84件パス）

## Dependencies

- タスク1が完了してから2〜5を実行
- タスク2〜5が完了してから6〜9を実行
- タスク6〜9が完了してから10〜11を実行

## Notes

- 当初の仕様からの変更: Tuner ON/Tuner OFFを別々の操作タイプではなく、1つの「Tuner」操作タイプにしてスイッチUIでON/OFFを切り替える形式に変更
- エフェクター操作タイプ間（ON/OFF/Display）で切り替える際、エフェクター番号が保持されるように実装
