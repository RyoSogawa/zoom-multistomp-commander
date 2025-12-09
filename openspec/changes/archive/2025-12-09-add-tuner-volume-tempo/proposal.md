# Proposal: add-tuner-volume-tempo

## Summary

チューナーON/OFF、パッチボリューム調整、テンポ(BPM)設定の3つの新しい操作タイプを追加する。

## Motivation

現在のアプリはエフェクター1〜6のON/OFF/表示切り替えのみに対応している。zoom-explorer の MIDI 仕様調査により、追加可能な操作が判明した。ユーザーからの要望に基づき、以下の操作を優先的に実装する：

1. **チューナーON/OFF** - ライブ中のチューニング操作を効率化
2. **パッチボリューム** - パッチ全体の音量を調整（0〜100）
3. **テンポ設定** - ディレイ等のテンポ同期エフェクト用にBPMを設定（40〜250）

## Scope

- 新しい操作タイプの追加（型定義の拡張）
- SysExメッセージ生成ロジックの追加
- UIの操作タイプ選択肢の拡張
- 数値入力UIの追加（パッチボリューム、テンポ用）

## Affected Capabilities

- `sysex-generation`: 新しい操作タイプに対応するメッセージ生成を追加

## References

- zoom-explorer MIDI仕様: https://github.com/thammer/zoom-explorer/blob/main/README.md
- チューナーON: `F0 52 00 6E 64 0B F7`
- チューナーOFF: `F0 52 00 6E 64 0C F7`
- パッチボリューム: `F0 52 00 6E 64 20 00 64 00 <value> 00 00 00 00 F7`
- テンポ: `F0 52 00 6E 64 20 00 64 02 <bpm_low> <bpm_high> 00 00 00 F7`