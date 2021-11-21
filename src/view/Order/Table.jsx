import { useState, useEffect } from 'react'
import { User } from 'react-iconly'
import { columns } from './columns'
import AddOrder from './Modal'
import { FetchAllProduct } from '../../services'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Input, Table, Card } from 'antd'
import { getAllData, getData } from '../../redux/contact/contactActions'

export default function UsersList() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [AllProduct, setAllProduct] = useState([])

  // Redux
  const dispatch = useDispatch()
  const store = useSelector((state) => state.contact)

  // Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const handleFilter = (val) => {
    setSearchTerm(val)
    dispatch(
      getData({
        q: val,
      })
    )
  }

  // Get Data
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getData({
        q: searchTerm,
      })
    )
    const GetAllProduct = () => {
      FetchAllProduct().then((response) => {
        if (response) {
          setAllProduct(response.data[0])
        }
      })
    }

    GetAllProduct()
  }, [dispatch, store.data.length])

  const data = []
  for (let i = 0; i < store.data.length; i++) {
    data.push({
      avatar: [store.data[i].id, store.data[i].avatar],
      fullName: store.data[i].fullName,
      role: store.data[i].role,
      contact: store.data[i].contact,
      email: store.data[i].email,
      status: store.data[i].status,
    })
  }

  return (
    <>
      <div className="da-mb-32">
        <Row gutter={[32, 32]} justify="space-between">
          <div></div>
          <Col md={15} span={24}>
            <Row justify="end" align="middle" gutter={[16]}>
              <Col xs={24} md={12} xl={8}>
                <Input
                  placeholder="Search"
                  prefix={
                    <User
                      set="curved"
                      size={16}
                      className="da-text-color-black-80"
                    />
                  }
                  value={searchTerm}
                  onChange={(e) => handleFilter(e.target.value)}
                />
              </Col>

              <Col>
                <Button
                  block
                  className="da-mt-sm-16"
                  type="primary"
                  onClick={toggleSidebar}
                >
                  สร้างออเดอร์
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Card className="da-contact-card da-mb-32">
        <Col className="da-contact-card da-mt-32">
          <Table
            style={{ textAlign: 'left' }}
            pagination={{ defaultPageSize: 6 }}
            columns={columns}
            dataSource={AllProduct}
            scroll={{ x: 'calc(500px + 50%)' }}
          />
        </Col>
        <AddOrder open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Card>
    </>
  )
}
