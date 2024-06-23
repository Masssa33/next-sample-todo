※このReadmeはChatGPTを利用して作成されました。ChatGPT の回答は必ずしも正しいとは限りません。重要な情報は確認するようにしてください。

# Next Sample Todo

このプロジェクトは、Next.js を使用したシンプルな ToDo アプリケーションのサンプルです。

## プロジェクトの概要

Next Sample Todo は、React と Next.js を使って構築された ToDo リストアプリケーションです。Tailwind CSS を使用してスタイリングされています。また、Docker を使用して開発環境を構築することができます。  
ソースコード参考：[Shin-sibainu/next.js13-todoapp-yt](https://github.com/Shin-sibainu/next.js13-todoapp-yt)

## デモ
準備中

## 使い方

### 前提条件

以下のソフトウェアがインストールされている必要があります：

- Node.js
- npm または yarn
- Docker (オプション)

### インストール

1. リポジトリをクローンします：

    ```bash
    git clone https://github.com/Masssa33/next-sample-todo.git
    cd next-sample-todo
    ```

2. 依存関係をインストールします：

    ```bash
    npm install
    # または
    yarn install
    ```

### 開発サーバーの起動

以下のコマンドを実行して、ローカル開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
```

### Docker を使用した起動
Docker を使用してアプリケーションを起動する場合：
```bash
docker-compose up --build
```

### ビルド
本番環境用に最適化されたビルドを作成するには、以下のコマンドを実行します：
```bash
npm run build
# または
yarn build
```

### プロジェクト構成
プロジェクトの主なディレクトリとファイルは以下の通りです：

src/: ソースコードが含まれています

components/: コンポーネントが含まれています
pages/: ページコンポーネントが含まれています
public/: 公開ファイル（画像、フォントなど）が含まれています
styles/: グローバルスタイルが含まれています
Dockerfile: Docker イメージを作成するための設定ファイル

docker-compose.yml: Docker コンテナを管理するための設定ファイル

package.json: プロジェクトの依存関係とスクリプトが含まれています

next.config.js: Next.js の設定ファイル

.eslintrc.json: ESLint の設定ファイル

.gitignore: Git で無視するファイルを指定するファイル

### 使用技術
Next.js
React
Tailwind CSS
Docker
