import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'



export const MainMenuData = [
{
    title:'Overview',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[
        {
            title: 'Users',
            path: '/overview/users',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Options',
            path: '/overview/options',
            icon: <IoIcons.IoIosPaper />,
        }
    ]
},
{
    title:'Borrowers',
    path: '#',
    icon: <IoIcons.IoIosPerson />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:[
        {
            title: 'Search Borrowers',
            path: '/borrowers/search',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Add New Borrower',
            path: '/borrowers/addNew',
            icon: <IoIcons.IoIosPaper />,
        }
    ]
},
{
    title:'Deals',
    path: '/deals',
    icon: <IoIcons.IoIosWallet />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
},


]





export default MainMenuData;
