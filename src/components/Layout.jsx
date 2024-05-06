import { UserAddOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Menu } from 'antd';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import TodoContext from '../context/TodoContext';
const { Header, Footer } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({ key, label: `ancient trip ${key}`, }));


export const Navbar = () => {
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} style={{ flex: 1, minWidth: 0, }} />
        <UserAddOutlined style={{ fontSize: '30px' }} />
      </Header>
    </Layout>
  );
};

export const NavFooter = () => {
  return (
    <section>
      <Layout>
        <Footer className='footer'>Copyright 2024 © ancienttrip ❤ Made in Bharat </Footer>
      </Layout>
    </section>
  )
}

export const MainTodo = () => {

  const addTodo = useContext(TodoContext)
  const deleteTodo = useContext(TodoContext)
  const updateTodo = useContext(TodoContext)
  const toggleCompleted = useContext(TodoContext)
  const todos = useContext(TodoContext)

  const [todolist, setTodoList] = useState([])


  return (
    <section style={{ marginTop: '40px' }} >
      <Container>
        <div style={{ display: 'flex', width: '60%' }} className='text-center' >
          <Input placeholder='Add Todo' />
          <Button>Add Todo</Button>
        </div>
      </Container>
    </section>
  )
}






