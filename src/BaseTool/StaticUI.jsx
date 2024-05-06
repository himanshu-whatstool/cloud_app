import { useEffect } from "react"
import { MainTodo, Navbar, NavFooter } from "../components/Layout"

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





