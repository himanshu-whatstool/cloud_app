import './App.css'
import { BlogsUI, RubiconUI, SidebarLayout } from './BaseTool/StaticUI';
import { Login, PostApi } from './components/Chatapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RubiconUI />} />
          <Route path='user-login' element={<Login />} />
          <Route path='post-user' element={<PostApi />} />
          <Route path='Todolist' element={<SidebarLayout />} />
          <Route path='recycla' element={<BlogsUI />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}




