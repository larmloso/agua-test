import { Popconfirm, Tag } from 'antd'
import { Delete } from 'react-iconly'
import { RiErrorWarningLine } from 'react-icons/ri'
import { DeleteProductByID } from '../../services'

function confirm(pd_id) {
  const data = { pd_id: pd_id }
  DeleteProductByID(data).then((response) => console.log('response ', response))
}

export const columns = [
  {
    title: 'ออเดอร์ ID',
    dataIndex: 'pd_id',
  },
  {
    title: 'ชื่อลูกค้า',
    dataIndex: 'customer_name',
  },
  {
    title: 'ที่อยู่ลูกค้า',
    dataIndex: 'address',
  },
  {
    title: 'รายละเอียด',
    dataIndex: 'product_info',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    render: (dataIndex) => {
      if (dataIndex === 'waite') {
        return <Tag color="yellow">กำลังรอ</Tag>
      } else if (dataIndex === 'receive') {
        return <Tag color="blue">รับออเดอร์</Tag>
      } else if (dataIndex === 'reject') {
        return <Tag color="red">ปฏิเสธ</Tag>
      } else if (dataIndex === 'filed') {
        return <Tag color="red">ส่งไม่สำเร็จ</Tag>
      } else {
        return <Tag color="green">ส่งสำเร็จ</Tag>
      }
    },
  },
  {
    title: 'โทรศัพท์',
    dataIndex: 'tel',
  },
  {
    dataIndex: 'pd_id',
    render: (pd_id) => (
      <Popconfirm
        placement="topLeft"
        title="คุณแน่ใจหรือไม่ว่าต้องการลบออเดอร์นี้ ?"
        onConfirm={() => confirm(pd_id)}
        okText="ตกลง"
        cancelText="ไม่"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <div className="da-text-right">
          <Delete
            size={24}
            className="da-cursor-pointer da-transition da-hover-text-color-danger-1 da-text-color-black-80"
          />
        </div>
      </Popconfirm>
    ),
  },
  {
    dataIndex: 'pd_id',
    render: (pd_id) => (
      <Popconfirm
        placement="topLeft"
        title="คุณแน่ใจหรือไม่ว่าต้องการลบออเดอร์นี้ ?"
        onConfirm={() => confirm(pd_id)}
        okText="ตกลง"
        cancelText="ไม่"
        icon={
          <RiErrorWarningLine className="remix-icon da-text-color-primary-1" />
        }
      >
        <div className="da-text-right">
          <Delete
            size={24}
            className="da-cursor-pointer da-transition da-hover-text-color-danger-1 da-text-color-black-80"
          />
        </div>
      </Popconfirm>
    ),
  },
]
