# Project Context

## Purpose

MIDIコントローラでZOOMマルチエフェクター（MultiStomp等）を操作するためのMIDI SysExメッセージを生成するWebアプリケーション。

主な機能:
- エフェクター1〜6のON/OFF制御メッセージ生成
- エフェクター1〜6の表示切り替えメッセージ生成
- 複数の操作を自由に組み合わせ可能
- 生成したメッセージをワンタッチでクリップボードにコピー

## Tech Stack

- **言語**: TypeScript
- **フレームワーク**: React
- **ビルドツール**: Vite
- **パッケージマネージャ**: pnpm
- **UIコンポーネント**: shadcn/ui
- **スタイリング**: Tailwind CSS

## Project Conventions

### Code Style

- 早期リターンを優先し、インデントを浅く保つ
- コメントは最小限に抑える（複雑な処理や意図が明確でない場合のみ）
- TypeScriptの型を活用し、型安全性を重視

### Architecture Patterns

- クライアントサイドのみのシンプルなSPA
- コンポーネントベースのUI設計
- shadcn/uiのコンポーネントを活用

### Testing Strategy

未定

### Git Workflow

未定

## Domain Context

### MIDI SysExメッセージフォーマット

ZOOM MultiStomp向けのSysExメッセージ:

```
エフェクターON (aa = 00〜05でエフェクター番号を指定):
F0 52 00 6E 64 20 00 aa 00 01 00 00 00 00 F7

エフェクターOFF:
F0 52 00 6E 64 20 00 aa 00 00 00 00 00 00 F7

エフェクター表示切り替え:
F0 52 00 6E 64 20 00 64 01 aa 00 00 00 00 F7
```

- `F0`: SysEx開始
- `52`: ZOOMのメーカーID
- `F7`: SysEx終了
- `aa`: エフェクター番号（00〜05 = 1〜6番目）

## Important Constraints

- ダークモード専用
- モバイル（スマートフォン）ファーストのUI設計
- クライアントサイドのみで動作（バックエンド不要）
- **アプリ内言語は英語**

## External Dependencies

- ZOOM MultiStompシリーズ（MS-50G、MS-60B、MS-70CDR等）
- ZOOM MultiStomp Plusシリーズ（MS-50G+、MS-60B+等）
- その他ZOOM製マルチエフェクター
