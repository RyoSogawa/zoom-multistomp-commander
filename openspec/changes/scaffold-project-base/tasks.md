# Tasks: scaffold-project-base

## Phase 1: プロジェクト初期化

- [x] `pnpm create vite` でReact + TypeScriptプロジェクトを作成
- [x] 不要なボイラープレートファイルを削除
- [x] Tailwind CSSをインストール・設定
- [x] shadcn/uiをインストール・設定
- [x] ダークモード専用のテーマ設定

## Phase 2: コアロジック実装

- [x] SysExメッセージ生成関数の実装 (`src/lib/sysex.ts`)
  - エフェクターON生成
  - エフェクターOFF生成
  - エフェクター表示生成
- [x] 操作の型定義 (`src/types/operation.ts`)

## Phase 3: UI実装

- [x] Buttonコンポーネント追加 (shadcn/ui)
- [x] エフェクター選択UI実装
- [x] 操作タイプ選択UI実装
- [x] 生成結果表示エリア実装
- [x] クリップボードコピーボタン実装
- [x] コピー成功フィードバック実装

## Phase 4: 統合・仕上げ

- [x] App.tsxで全体を統合
- [x] モバイルファーストのレイアウト調整
- [x] 動作確認

## Dependencies

- Phase 2 は Phase 1 完了後に開始
- Phase 3 は Phase 1 完了後に開始可能（Phase 2と並行可）
- Phase 4 は Phase 2, 3 完了後に開始
