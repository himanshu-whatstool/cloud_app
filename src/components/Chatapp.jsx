import { LoginOutlined } from "@ant-design/icons"
import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import { Avatar, Button, List, Skeleton, Space } from 'antd';
import { EntryDialog } from "../BaseTool/Dialog";
import { IoChatbubbleOutline } from "react-icons/io5";
import { DragIndicatorOutlined, SpaceDashboard, RemoveOutlined, OpenInFullOutlined, Close } from '@mui/icons-material';


const listData = Array.from({ length: 10, }).map((_, i) => ({ href: 'https://ant.design', title: `ant design part ${i + 1}`, avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}` }));

export const Blogs = () => {

  const [openDialog, setOpenDialog] = useState({ open: false, onClose: null })
  const handleopenDialog = () => {
    setOpenDialog({ open: true, onClose: () => setOpenDialog(false) })
  }

  /* useEffect(() => {
    const timer = setTimeout(() => {
      handleopenDialog()
    }, 2000)
    return () => clearTimeout(timer)
  }, []) */

  return (
    <section className="mt-4">
      <h6 style={{ textAlign: 'center' }}><LoginOutlined />&nbsp;Mangaldeep</h6>
      <div className="text-center mt-5">
        <Button onClick={() => handleopenDialog()} type="primary" >Sale is Live Now</Button>
      </div>
      {openDialog.open && <EntryDialog open={openDialog.open} onClose={openDialog.onClose} />}
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
export const PostApi = () => {
  return (
    <section>
      <Container>
        <h5>Cloud Web</h5>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 0.5 }}>
            <label className="mt-3" htmlFor="name">first name</label>
            <input type="text" placeholder="Enter your name" id="name" className="form-control" />
            <label className="mt-3" htmlFor="email">Email Address</label>
            <input type="email" placeholder="Enter your Email Address" id="email" className="form-control" />
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
      </Container>
    </section>
  )
}

export const Qassistant = () => {

  const [box, setBox] = useState(false)
  const handlebtn = () => setBox(!box)

  return (
    <section>
      {box &&
        <div className="box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: "#368bcc", padding: '12px', color: '#fff', borderRadius: '8px 8px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '7px' }}>
              <img src="https://staging.cloud1.me/chat/assets/q11.png" alt="cloud" width={32} />
              <span>Q11 Assistant</span>
            </div>
            <span><DragIndicatorOutlined style={{ cursor: 'move', position: 'absolute', top: 5 }} /></span>
            <section style={{ display: 'flex', alignItems: 'center' }}>
              <div className='action-btn ps-1' >
                <SpaceDashboard style={{ fontSize: '16px' }} className='dashboard-btn text-dark' />
              </div>
              <div className='action-btn ps-1'>
                <RemoveOutlined style={{ fontSize: '16px' }} className='dashboard-btn text-dark' />
              </div>
              <div className='action-btn action-hover ps-1'>
                <OpenInFullOutlined style={{ fontSize: '16px' }} className='dashboard-btn text-dark' />
              </div>
            </section>
          </div>

          <div className="tabview">
            <div className="left-panel" >
              <div>

              </div>
            </div>
          </div>

        </div>}
      <div className="buttonchat">
        <Button onClick={() => handlebtn()} className="button" > {box ? <Close style={{ fontSize: '24px' }} /> : <IoChatbubbleOutline style={{ fontSize: '24px' }} />}</Button>
      </div>
    </section>
  )
}






