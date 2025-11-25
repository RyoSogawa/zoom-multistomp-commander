# Proposal: scaffold-project-base

## Summary

ZOOM MultiStompシリーズのMIDI SysExメッセージを生成するWebアプリケーションの基盤を構築する。

## Motivation

現在プロジェクトにはコードが存在しない。ユーザーがエフェクターの操作コマンドを生成し、クリップボードにコピーできる最小限の動作するアプリケーションを構築する必要がある。

## Scope

### In Scope

- Vite + React + TypeScript プロジェクトの初期化
- Tailwind CSS + shadcn/ui のセットアップ
- ダークモード専用テーマの設定
- SysExメッセージ生成ロジックの実装
- エフェクター操作選択UI
- クリップボードコピー機能
- モバイルファーストのレスポンシブデザイン

### Out of Scope

- 複数機種の切り替え機能（将来の拡張）
- プリセット保存機能
- MIDI直接送信機能

## Capabilities Affected

| Capability | Change Type |
|------------|-------------|
| sysex-generation | ADDED |
| clipboard-copy | ADDED |

## Risk Assessment

- **Low Risk**: 標準的なフロントエンド技術スタックを使用
- SysExフォーマットは既に明確に定義されている
