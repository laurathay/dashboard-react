import { MdOutlineDashboard} from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { FiPackage, FiPieChart  } from 'react-icons/fi';

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

export default SidebarData