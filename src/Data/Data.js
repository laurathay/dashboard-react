import { MdOutlineDashboard} from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import {  FiUsers, FiPackage, FiPieChart  } from 'react-icons/fi';
// import { BsClipboardData }from 'react-icons/bs';
// import { GiReceiveMoney } from 'react-icons/gi';
// import { GrMoney } from 'react-icons/gr';

import { BsPeople } from 'react-icons/bs';

import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

export const SidebarData = [
    {
        icon: MdOutlineDashboard,
        heading: "Dashboard",
    },
    {
        icon: HiOutlineClipboardList,
        heading: "Challenge 1",
    },
    {
        icon: FiUsers,
        heading: "Challenge 2",
    },
    {
        icon: FiPackage ,
        heading: "Challenge 3",
    },
    {
        icon: FiPieChart,
        heading: "Challenge 4",
    }
];

export default SidebarData

export const CardsData = [
    {
        title: "Promo 1",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "20",
        png: BsPeople,
        series: [
            {
                name: "Promo 1",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],   
    },  
    {
        title: "Promo 2",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #fc929d 100%",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14",
        png: BsPeople,
        series: [
            {
                name: "Promo 2",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],   
    },
    {
        title: "Promo 3",
        color: {
            backGround: 
                "linear-gradient(rgba(248, 212, 154) -146.42%, rgba(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value: "42",
        png: BsPeople,
        series: [
            {
                name: "Promo 3",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],   
    }, 
    {
        title: "Add Promo",
        color: {
            backGround: 
                "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            boxShadow: "0px 10px 20px 0px rgb(238,174,202)",
            
        },
        barValue: 0,
        value: "+",
        png: BsPeople,
        series: [
            {
                name: "Add Promo",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],   
    } 
]

export const UpdatesData = [
    {
        img: img1,
        name: "Lynch Cai",
        noti: "didn't eat",
        score: "20",
    },
    {
        img: img2,
        name: "Vincent Li",
        noti: "didn't pay",
        score: "10",
    },
    {
        img: img3,
        name: "Mehdi Verfaillie",
        noti: "didn't go",
        score: "5",
    },
];
