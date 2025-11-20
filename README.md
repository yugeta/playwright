Playwright用Docker
===
```
Create : 2025-11-21
Author : Yugeta.Koji
```

# Summary
- Playwrightインストール手順の記載

# Howto
1. cd docker

2. docker compose build

3. docker compose up -d

4. ターミナルに入ってコマンド実行
```
docker exec -it mynt_playwright bash
npm init -y
npm install -D @playwright/test@1.47.0
```

5. サンプルテストを実行
> npx playwright test

- screenshot.png が作られたら成功