# Личная страница + конфиги AmneziaWG

Готовый статический сайт из двух страниц:

- `index.html` — визитка: имя, описание, Telegram и ссылка на скачивание;
- `download.html` — 14 конфигов AmneziaWG, ZIP-архив и кнопки клиентов для
  Windows, Android, iPhone/iPad, macOS и Linux.

Сайт не требует Node.js и работает на любом статическом хостинге, в том числе
на GitHub Pages.

## Как опубликовать на GitHub Pages

1. Создайте на GitHub **публичный** репозиторий, например `amneziawg-site`.
2. Загрузите в корень репозитория всё содержимое папки `E:\amneziawg-site`:
   `index.html`, `download.html`, папку `files`, файл `amneziawg-export.zip`,
   `README.md` и `.nojekyll`.
3. Откройте **Settings → Pages**.
4. В разделе **Build and deployment** выберите:
   - **Source:** `Deploy from a branch`;
   - **Branch:** `main`, папка `/ (root)`;
   - нажмите **Save**.
5. Через 1–2 минуты сайт будет доступен по адресу:

   ```text
   https://<ваш-логин>.github.io/amneziawg-site/
   ```

   Страница скачивания:

   ```text
   https://<ваш-логин>.github.io/amneziawg-site/download.html
   ```

Если назвать репозиторий `<ваш-логин>.github.io`, сайт откроется без имени
репозитория: `https://<ваш-логин>.github.io/`.

## Важно: конфиги станут публичными

GitHub Pages — это публичный статический хостинг. Любой, кто узнает ссылку,
сможет скачать `files/*.conf` и `amneziawg-export.zip`. В конфигах AmneziaWG
есть приватные ключи подключения.

Если публиковать конфиги нельзя, не выкладывайте папку `files` и архив в
публичный репозиторий. В этом случае лучше оставить локальный вариант с
`E:\amneziawg-downloader\start.bat` или использовать хостинг с авторизацией.

## Что заменить на визитке

Откройте `index.html` и замените:

- `Иван` — на своё имя (в заголовке, аватаре и подвале);
- `@username` — на свой Telegram;
- `https://t.me/username` — на ссылку своего Telegram;
- текст «Настраиваю AmneziaWG и помогаю с VPN…» — на своё описание.

После изменений загрузите `index.html` на GitHub заново.

## Как обновить конфиги

Если в `E:\загр\amneziawg-export` появились новые файлы, на компьютере
выполните:

```bat
node E:\amneziawg-downloader\build-static.js
```

Скрипт:

- скопирует файлы в `E:\amneziawg-site\files`;
- пересоберёт `E:\amneziawg-site\amneziawg-export.zip`;
- обновит список файлов и размеры в `download.html`.

Затем загрузите на GitHub изменённые `files`, `amneziawg-export.zip` и
`download.html`.

## Проверка локально

Можно открыть `index.html` двойным щелчком — визитка и ссылки будут работать.
Для проверки скачивания файлов лучше запустить простой локальный сервер:

```bat
cd /d E:\amneziawg-site
npx serve .
```

Или просто загрузить сайт на GitHub Pages и проверить по ссылке.
