import { Link } from 'react-router-dom'

import store from '../../redux/store'
import { getUser, deleteUser } from '../../redux/contact/contactActions'

import { Avatar, Popconfirm, Tag, Image } from 'antd'
import { User, Delete } from 'react-iconly'
import { RiErrorWarningLine } from 'react-icons/ri'
import { DeleteMember } from '../../services'

// Popconfirm
function confirm(userId) {
  const data = { userId: userId }
  DeleteMember(data).then((response) => console.log('res ==>', response))
}

export const columns = [
  {
    title: '',
    dataIndex: 'imageUrl',
    render: (dataIndex) => {
      console.log('dataIndex =>>', dataIndex)
      return (
        <Avatar
          size={45}
          src={<Image src={dataIndex} style={{ width: 50 }} />}
        />
        // <Link
        //   onClick={() => store.dispatch(getUser(dataIndex[0]))}
        //   to={`/apps/contact/contact-detail/${dataIndex[0]}`}
        // >
        //   {dataIndex[1] != null ? (
        //     imageSplit[imageSplit.length - 1] == 'png' ||
        //     imageSplit[imageSplit.length - 1] == 'jpg' ||
        //     imageSplit[imageSplit.length - 1] == 'svg' ? (
        //       <Avatar src={dataIndex[1]} size={48} />
        //     ) : (
        //       <Avatar size={48}>
        //         {dataIndex[1].split(' ')[0][0].toUpperCase() +
        //           '' +
        //           dataIndex[1].split(' ')[1][0].toUpperCase()}
        //       </Avatar>
        //     )
        //   ) : (
        //     <Avatar
        //       size={48}
        //       icon={<User set="curved" className="da-text-align-center" />}
        //     />
        //   )}
        // </Link>
      )
    },
  },
  {
    title: 'ID พนักงาน',
    dataIndex: 'userId',
  },
  {
    title: 'ชื่อ Line พนักงาน',
    dataIndex: 'userName',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    render: (dataIndex) => {
      if (dataIndex === 'emp') {
        return <Tag color="blue">พนักงาน</Tag>
      } else {
        return <Tag color="red">-</Tag>
      }
    },
  },
  {
    dataIndex: 'userId',
    render: (dataIndex) => (
      <Popconfirm
        placement="topLeft"
        title="Are you sure to delete this contact?"
        onConfirm={() => confirm(dataIndex)}
        okText="Yes"
        cancelText="No"
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
