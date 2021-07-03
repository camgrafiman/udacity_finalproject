import React from 'react'

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        type: 'internal'

    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text',
        type: 'internal'

    },
    
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoIosPersonAdd />,
        cName: 'nav-text',
        type: 'internal'

    },
    {
        title: 'Categories',
        path: '/categories',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        type: 'internal'

    },
    {
        title: 'Shows',
        path: '/shows',
        icon: <IoIcons.IoMdTv/>,
        cName: 'nav-text',
        type: 'internal'

    },
    {
        title: 'Characters',
        path: '/characters',
        icon: <IoIcons.IoIosPeople />,
        cName: 'nav-text',
        type: 'internal'

    },
    


]
export const loggedData = [
    {
        title: 'Logout',
        path: '/logout',
        icon: <IoIcons.IoIosLogOut />,
        cName: 'nav-text',
        type: 'internal'

    }
]