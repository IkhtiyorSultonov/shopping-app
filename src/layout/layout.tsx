import { FC, FunctionComponent, useState } from "react";
import { LayoutProps } from "./layout.props";
import { Box, Container } from "@chakra-ui/react";
import { Footer, Header, NotificationBar, Sidebar } from ".";

const Layout: FC<LayoutProps> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const OnToggle = () => setToggle((prev) => !prev);
  const [menu, setMenu] = useState<boolean>(false);
  const OnToggleMenu = () => {
    if (menu) {
      setToggle(false);
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      setToggle(true);
    }
    setMenu((prev) => !prev);
  };
  return (
    <Box
      maxW={"full"}
      overflow={"hidden"}
      pos={"relative"}
      bg={menu ? "rgb(173,173,173)" : ''}
    >
      <NotificationBar OnToggle={OnToggle} toggle={toggle} />
      <Header toggle={toggle} OnToggleMenu={OnToggleMenu} />
      <Sidebar OnToggleMenu={OnToggleMenu} menu={menu} />
      <Box minH={toggle ? "52.3vh" : "45.5vh"}  mt={"8vh"} >
        {children}
      </Box>
      <Footer/>
    </Box>
  );
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
