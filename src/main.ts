import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// createAPP関数で、アプリケーションのインスタンスを作成
// createAPPに渡しているオブジェクトは、コンポーネント(ルートコンポーネントという)。
const app = createApp(App);

app.use(router);

// アプリケーションのインスタンスは.mount()メソッドが呼ばれることで、レンダリングする
// インスタンスには「コンテナ」引数という、実際の DOM 要素、あるいはセレクター文字列が必要
app.mount("#app");