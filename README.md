# graphql-hanson-client
GraphQLクライアントのハンズオン。

## ライブラリを追加
GraphQLクライアントの実装として、以下のライブラリを使う。  
こちらをインストールする。  
https://apollo.vuejs.org/

https://apollo.vuejs.org/guide/installation.html#_1-apollo-client

```
npm install --save vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-cache-inmemory graphql-tag
```

## 起動
サーバサイドは以下のリポジトリにある。  
https://github.com/SRsawaguchi/graphql-hanson-server

こちらのREADME.mdに従ってサーバを起動する。  

その後、`npm run serve`でこちらのサーバを実行する。  

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
