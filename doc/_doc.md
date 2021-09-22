# liquid-lib

Liquid components library

- 1.1.Prepare.md
- 1.2.StorybookEnv.md
- 1.3.FormattingLinting.md
- 1.4.ButtonApi.md
- 1.5.StyledComp.md
- 1.6.PropTypes.md
- 1.7.CompositeComp.md
- 1.8.FieldComp.md
- 1.9.ExtendingComp.md

- 2.1.IntroTooling.md
- 2.2.ButtonTesting.md
- 2.3.FieldTesting.md

- 3.1.Bunling.md
- 3.2.BuildСonfig.md
- 3.3.TypeScriptDeclarations.md

- 4.1.GithubActions.md
- 4.2.PackagesRegistry.md
- 4.3.Consuming.md

## TODO

Добавить правила gitflow и порядок действий для коммита (форматирование, тестирование, сборка и тд).

```bash
npm run format
npm run lint
npm run test
npm run build
```

```bash
git add .
git commit -m 'name'
git push
```

```bash
npm version minor
git push --follow-tags
```

Бывает проблема с метками версий пакета, которую можно фиксить следующим образом.
```bash
git fetch
git tags
git tag -d v0.1.0
git push origin :refs/tags/v0.1.0
```

Проблема комманды npm ci, при публикации сборки необходимо иметь в репозитории package-lock.json

## issue

В `jest.config.js` добавлена строка, которая помогает исключить скрипт Field.spec.tsx, приводящий к ошибке сборки в github

```bash
modulePathIgnorePatterns: ['<rootDir>/src/fields'],
```

Проблема с дублированием экземпляров реакт

npm ls react
npm link ../app/node_modules/react

npm install --save-peer react@16.12.0
npm install --save-peer react-dom@16.12.0

