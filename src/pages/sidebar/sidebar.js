import { VscColorMode } from "react-icons/vsc";
import { FaTractor } from "react-icons/fa";
import { Box } from '@material-ui/core'
import { MdHome, MdOutlineMonetizationOn, MdOutlineImage, MdOutlineBarChart, MdNotificationsActive } from "react-icons/md";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import 'react-pro-sidebar/dist/css/styles.css';
import { useHistory } from "react-router";
import { lightTheme, darkTheme } from '../../theme/theme';
import "./style.css"

const Sidebar = ({ flag_sidebar, ctheme, setTheme }) => {
    const history = useHistory();
    const styles = {
        sideBarHeight: {
            height: "unset",
            backgroundColor: `${lightTheme.bgcolor_bar}`,
            color: "#757B75",
            minHeight: "100vh",
            fontFamily: "Poppins",
        },
        sideBarHeight1: {
            height: "unset",
            backgroundColor: `${darkTheme.bgcolor_bar}`,
            color: "#757B75",
            minHeight: "100vh",
            fontFamily: "Poppins",
        },
        menuIcon: {
            float: "right",
            margin: "10px",
        },
        color_back: {
            backgroundColor: `${lightTheme.bgcolor_bar}`,
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#2BA55D",
            fontFamily: "Poppins",
        },
        color_back1: {
            backgroundColor: `${darkTheme.bgcolor_bar}`,
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#2BA55D",
            fontFamily: "Poppins",
        }
    };


    return (
        <div id={ctheme?"sidebar":"sidebar1"}>
            <ProSidebar style={ctheme ? styles.sideBarHeight : styles.sideBarHeight1} collapsed={flag_sidebar}  >
                <SidebarContent>
                    <Menu style={ctheme ? styles.color_back : styles.color_back1} >
                        <MenuItem icon={<MdHome fontSize="30px" />} fontFamily="Poppins" onClick={()=>{history.push({ pathname: "/" });}} fontWeight="500">Home</MenuItem>
                        <MenuItem icon={<MdOutlineMonetizationOn fontSize="30px" />} fontFamily="Poppins" fontWeight="500">Trade</MenuItem>
                        <MenuItem icon={<MdOutlineImage fontSize="30px" />} fontFamily="Poppins" fontWeight="500">NFT Marketplace</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontFamily="Poppins" fontWeight="500">Farms</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontFamily="Poppins" fontWeight="500">New Farms</MenuItem>
                        <MenuItem icon={<FaTractor fontSize="30px" />} fontFamily="Poppins" fontWeight="500">New Farms V3</MenuItem>
                        <SubMenu title="Info" icon={<MdOutlineBarChart fontSize="30px" />}>
                            <MenuItem icon={<MdNotificationsActive fontSize="30px" />} fontFamily="Poppins" fontWeight="500">Notification</MenuItem>
                        </SubMenu>
                        <Box onClick={() => {
                            setTheme(!ctheme)
                        }}>
                            <MenuItem icon={<VscColorMode fontSize="30px" />} fontWeight="500" >Theme Light/Dark</MenuItem>
                        </Box>

                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
};


export default Sidebar;