import React from 'react'
import NewFile from './NewFile.jsx'
import SidebarItem from './SidebarItem.jsx'
import '../../styles/Sidebar.css'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const index = () => {
  return (
    <div className='sideBar'>
      <NewFile/>
      <div className='sideBar-itemsContainer'>

        <SidebarItem icon={(<HomeOutlinedIcon/>)} label='Home'/>
        <SidebarItem arrow icon={(<InsertDriveFileIcon/>)} label={'My Drive'} />
        <SidebarItem arrow icon={(<PhonelinkOutlinedIcon/>)} label={'Computers'} />
        <SidebarItem icon={(<PeopleAltOutlinedIcon/>)} label={'Shared with me'} />
        <SidebarItem icon={(<QueryBuilderIcon/>)} label={'Recent'} />
        <SidebarItem icon={(<StarBorderIcon/>)} label={'Starred'} />
        <br/>
        <SidebarItem icon={(<ReportOutlinedIcon/>)} label={'Spam'} />
        <SidebarItem icon={(<DeleteOutlineIcon/>)} label={'Trash'} />
        <SidebarItem icon={(<CloudOutlinedIcon/>)} label={'Storage'} />
      </div>
    </div>
  )
}

export default index