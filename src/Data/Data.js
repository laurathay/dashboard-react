import { MdOutlineDashboard} from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import {  FiUsers, FiPackage, FiPieChart  } from 'react-icons/fi';

export const SidebarData = [
    {
        icon: MdOutlineDashboard,
        heading: "Dashboard",
    },
    {
        icon: HiOutlineClipboardList,
        heading: "Orders",
    },
    {
        icon: FiUsers,
        heading: "Customers",
    },
    {
        icon: FiPackage ,
        heading: "Products",
    },
    {
        icon: FiPieChart,
        heading: "Analytics",
    }
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value "25, 970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],   
    },  
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #fc929d 100%",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value "14, 270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenues",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],   
    },
    {
        title: "Expenses",
        color: {
            backGround: 
                "linear-gradient(rgba(248, 212, 154) -146.42%, rgba(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value "4, 270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],   
    } 
]

export default SidebarData