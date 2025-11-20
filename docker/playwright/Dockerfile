# Node 20 をベースにする場合
FROM node:20

# 作業ディレクトリ
WORKDIR /tests

# package.json を作る
RUN npm init -y

# Playwright をインストール（バージョン固定）
RUN npm install -D @playwright/test@1.47.0

# ブラウザもインストール
RUN npx playwright install --with-deps

# コンテナを常駐させる場合
ENTRYPOINT ["tail", "-f", "/dev/null"]