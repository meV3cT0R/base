import {   ColorScheme, Group, Navbar, SegmentedControl, Text, TextInput, Title, createStyles,NavLink, UnstyledButton, Avatar, Center, Box } from "@mantine/core"
import { IconBrandMantine, IconChevronRight, IconLogout, IconMoon, IconSearch, IconSun } from "@tabler/icons-react";
import {  Link } from "react-router-dom"
import { useState } from "react";
import { group, menuItems } from "../layouts/RootLayout";
const useStyles = createStyles(theme=>(
    {
        navbar: {
            backgroundColor: theme.colorScheme ==="dark"?theme.colors.dark[6]:theme.colors.white,
            
        },
        button:{
            marginLeft:"20px"
        }
    }
))

const Sidebar = ({theme,setTheme,hidden}:any) => {
    const {classes,cx} = useStyles();
    const [active,setActive] = useState<String>(location.pathname.split("/")[1] || "Home");
    return (
        <Navbar width={{sm:300}} p="md" fz={"xs"} className={cx(classes.navbar,"space-y-4","sm:fixed","overflow-scroll",hidden)}>
                <Group spacing="lg" position="center">
                    <IconBrandMantine />
                    <Title order={3}> Alair Creative </Title>
                </Group>
                <TextInput
                    placeholder="Search..."
                    icon={<IconSearch />}
                />

                <Text >Menu</Text>
                {menuItems.map(item=>{
                    return (
                        <Link to={item.link}>
                            <NavLink
                                icon={item.icon}
                                label={item.label}
                                onClick={()=>{
                                    setActive(item.label)
                                }}
                                active={active.toLowerCase()===item.label.toLowerCase()}
                                rightSection={
                                    item.count && item.count > 0 && (
                                        <Text
                                            size="xs" 
                                            bg={"red"}
                                            color="white"
                                            px="5px"
                                            
                                            sx={{
                                                borderRadius:"25px",
                                                lineHeight: 2,
                                                width:"30px",
                                                textAlign:"center"
                                            }}
                                        >
                                            {item.count <100?item.count:"99+"} 
                                        </Text>
                                    ) || ""
                                }
                            />
                        </Link>
                    )
                })}

                <Text >Group</Text>
                {
                    group.map(item=>(
                        <NavLink
                            icon={item.icon}
                            label={item.label}
                            rightSection={<IconChevronRight/>}
                            
                        />
                    ))
                }
                <div>
                    <SegmentedControl
                        value={theme}
                        onChange={(value:ColorScheme)=>setTheme(value)}
                        transitionTimingFunction="ease"
                        fullWidth
                        data={
                            [
                                {
                                    label:(
                                        <Center>
                                            <IconSun/>
                                            <Box ml={10}>light</Box>
                                        </Center>
                                    ),
                                    value:"light"
                                },
                                {
                                    label:(
                                        <Center>
                                            <IconMoon/>
                                            <Box ml={10}>dark</Box>
                                        </Center>
                                    ),
                                    value:"dark"
                                },
                            ]
                        }
                    />
                </div>
                <UnstyledButton>
                    <Group position="apart">
                        <Avatar size={40}>SS</Avatar>
                        <div>
                            <Text>v.design</Text>
                            <Text size="xs">vdesign0213@gmail.com</Text>
                        </div>
                        <IconLogout/>
                    </Group>
                </UnstyledButton>
            </Navbar>
    )
}

export default Sidebar