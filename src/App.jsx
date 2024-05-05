import './App.css'
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
        </Routes>
      </BrowserRouter>
    </section>
  )
}




