# First React App

start studying React JS !

## create-react-app

npm install create-react-app directoryname

## useState

data をアップデートする

## useEffect

render 回数を調節できる → 最初のみ or 特定のデータがアップデートされる時のみ　等

## src

index.js : HTML と繋ぐ役割（rendering）
App.js : Router インスタンスかしてつなぐ役割
App.module.css : App.js 用の CSS 他の file も CSS は module 化すること

- browser router(normal web use'/')
- Hash router(use '#')

### routes

route 別ページ file
Home.js : Home ページ　 → 映画のタイトルを押すと Detail ページへ移動
Detail.js:映画のデータ id を Params でもらって該当映画の詳細を提示

- usePrams from 'react-router.dom' =>parameta 貰う方法

### components

Movi.js:Home に表示される映画 UI の components
