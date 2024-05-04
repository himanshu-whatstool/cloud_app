import { LoginOutlined } from "@ant-design/icons"
import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import { Avatar, List, Skeleton, Space } from 'antd';


const listData = Array.from({ length: 10, }).map((_, i) => ({ href: 'https://ant.design', title: `ant design part ${i + 1}`, avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}` }));


export const Blogs = () => {
  return (
    <section className="mt-4">
      <h6 style={{ textAlign: 'center' }}><LoginOutlined />&nbsp;Mangaldeep</h6>
    </section>
  )
}

export const Login = () => {

  const [loginapi, setLoginApi] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchdata = async () => {
    const userdetail = "https://dummyjson.com/users"
    try {
      const response = await fetch(userdetail)
      const result = await response.json()
      // console.log(result);
      setLoginApi(result.users)
    } catch (error) {
      console.log("error fetching data:-", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { fetchdata() }, [])

  return (
    <Container>
      <h6>dummy Users</h6>
      {loading ? <List itemLayout="vertical" size="large" dataSource={listData} renderItem={(item) => (<List.Item>
        <Skeleton active avatar>
          <List.Item.Meta avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>} description={item.description} />
          {item.content}
        </Skeleton>
      </List.Item>
      )} /> :
        <Row>
          {loginapi?.map((item, i) => {
            return (
              <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className="mb-3" key={i}>
                <div className="card" >
                  <div className="card-body">
                    <Space direction="vertical" size={16} wrap>
                      <Avatar size="large" src={item.image} />
                    </Space>
                    <h5 className="card-title">{item.firstName}</h5>
                    <p className="card-text">{item.lastName}</p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>}
    </Container>
  )
}

export const TodoApi = () => {

  const [todoApi, setTodoApi] = useState([])

  const fetchdata = async () => {
    const todoUrl = "https://dummyjson.com/todos"
    try {
      const response = await fetch(todoUrl)
      const result = await response.json()
      // console.log(result);
      setTodoApi(result.todos)
    } catch (error) {
      console.log("error fetching data", error);
    }
  }

  useEffect(() => { fetchdata() }, [])

  return (
    <section>
      <p>dummy api</p>
      {
        todoApi.map((v) => {
          return (
            <section key={v.id}>
              <h6 style={{ fontSize: '12px' }} >{v.todo}</h6>
            </section>
          )
        })
      }
    </section>
  )
}










