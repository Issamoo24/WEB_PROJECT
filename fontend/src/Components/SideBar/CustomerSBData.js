import React from 'react'
import SubjectIcon from '@mui/icons-material/Subject';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const SidebarData = [  //array variable
    {
        title: 'Enroled Course',
        icon: <SubjectIcon/>,
        link: '/EnroledCourse',
    },
    {
        title: 'Time Table',
        icon: <CalendarMonthIcon/>,
        link: '/TimeTable',
    },
    {
        title: 'Assignment',
        icon: <AssignmentTurnedInIcon/>,
        link: '/Assignment',
    },
    {
        title: 'Payment',
        icon: <PointOfSaleIcon/>,
        link: '/Payment',
    },
    {
        title: 'Profile',
        icon: <AccountCircleIcon/>,
        link: '/Profile', 
    }
]
