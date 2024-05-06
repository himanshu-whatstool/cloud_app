import './App.css'
import { SidebarLayout } from './BaseTool/StaticUI';
import { Blogs, Login, PostApi } from './components/Chatapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='user-login' element={<Login />} />
          <Route path='post-user' element={<PostApi />} />
          <Route path='Todolist' element={<SidebarLayout />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}




