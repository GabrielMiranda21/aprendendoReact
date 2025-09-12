import { Header } from "./components/Header";
import { Post } from './components/Post';

import './global.css';
import style from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
