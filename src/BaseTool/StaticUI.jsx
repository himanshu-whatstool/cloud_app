import { useEffect } from "react"
import { MainTodo, Navbar, NavFooter } from "../components/Layout"
import { Blogs } from "../components/Chatapp"

export const SidebarLayout = () => {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }, [])
  return (
    <div>
      <Navbar />
      <MainTodo />
      <NavFooter />
    </div>
  )
}

export const BlogsUI = () => {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }, [])
  return (
    <section>
      <Navbar />
      <Blogs />
      <NavFooter />
    </section>
  )
}





