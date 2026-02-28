# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
Lab 7.1 — Code Splitting with Suspense
О чём эта работа:
В этой лабораторной работе реализовано React-приложение с несколькими страницами, которые загружаются не сразу, а по мере необходимости.
Главная цель — показать, как можно ускорить загрузку приложения, если не подгружать весь код сразу.


Что было сделано
В проекте реализовано:
1. навигационное меню для перехода между страницами;

2. главная страница, которая загружается сразу при запуске приложения;

3. три дополнительные страницы (Dashboard, Settings и Profile), которые загружаются только при переходе на них;

4. индикатор загрузки, который появляется во время загрузки страниц.



Как работает приложение:
При запуске приложения пользователь сразу видит главную страницу.
Когда пользователь переходит на другую страницу через меню, нужная страница подгружается отдельно, и в это время показывается сообщение и анимация загрузки.



Таким образом:
приложение запускается быстрее;
неиспользуемые страницы не загружаются заранее;
пользователь понимает, что идёт загрузка страницы.



Зачем используется ленивая загрузка

Ленивая загрузка страниц нужна для того, чтобы:
1. уменьшить объём кода, который загружается при старте приложения;
2. ускорить первую загрузку сайта;
3. загружать только те страницы, которые действительно нужны пользователю.