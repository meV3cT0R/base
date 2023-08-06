import {  Burger, Drawer } from "@mantine/core"
import { IconActivity, IconBell, IconBrandFigma,  IconCheckbox, IconCoin, IconDownload, IconGift, IconHome,  IconInfoCircle,IconSettings } from "@tabler/icons-react";
import {   Outlet } from "react-router-dom"

import { tasks } from "../data/tasks";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "../components/Sidebar";



export const menuItems : {label:String,icon:JSX.Element,link:string,count?:number}[] = [
    {
        label:"Home",
        icon: <IconHome/>,
        link:"/"
    },
    {
        label:"Task",
        icon: <IconCheckbox/>,
        link:"task",
        count:tasks.length
    },
    {
        label:"Activity",
        icon: <IconActivity/>,
        link:"/"
    },
    {
        label:"Notification",
        icon: <IconBell/>,
        link:"/",
        count:14
    },
    {
        label:"Setting",
        icon: <IconSettings/>,
        link:"/"
    },
    {
        label:"Support",
        icon: <IconInfoCircle/>,
        link:"/"
    },
]

export const group = [
    {
        label:"Figma Files",
        icon: <IconBrandFigma/>,
        link:"/"
    },
    {
        label:"Downloads",
        icon: <IconDownload/>,
        link:"/"
    },
    {
        label:"Costs",
        icon: <IconCoin/>,
        link:"/"
    },
    {
        label:"Gifts",
        icon: <IconGift/>,
        link:"/"
    },
]

const RootLayout = ({theme,setTheme}:any) => {
    const [drawerOpened, {toggle: toggleDrawer,close:closeDrawer}] = useDisclosure(false);
    
    return (
        <div className="space-y-20 sm:space-y-0">
            <Sidebar hidden="max-sm:hidden" theme={theme} setTheme={setTheme}/>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                title="Navbar"
                size="100%"
                className="sm:hidden"
            >
                <Sidebar theme={theme} setTheme={setTheme} hidden="sm:hidden"/>
            </Drawer>
            <Burger opened={drawerOpened} onClick={toggleDrawer} className="sm:hidden"
            ></Burger>

            <div className="px-20 py-10 sm:ml-[300px]">
                <Outlet/>
            </div>
        </div>
    )
}

export default RootLayout