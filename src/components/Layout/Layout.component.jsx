import React, {useState} from 'react';
import {
  AvatarContainer,
  ContainerBars,
  HeaderContainer,
  LeftSection,
  RightSection,
  TextMode,
  ToggleContainer,
  MainContainer,
} from "./Layout.component.styled";
import {Avatar, Icon, Input, InputGroup, Toggle} from 'rsuite';
import DrawerComponent from "../Drawer";

function Layout({children}) {
  const [drawer, setDrawer] = useState({
    show: false,
  })

  const closeDrawer = () => {
    setDrawer({
      ...drawer,
      show: false,
    });
  }

  const toggleDrawer = () => {
    setDrawer({
      ...drawer,
      show: true,
    });
  }

  return <MainContainer>
    <HeaderContainer>
      <LeftSection>
        <ContainerBars>
          <Icon icon="bars" size="2x" style={{color: '#f3f3f3'}} onClick={toggleDrawer}/>
        </ContainerBars>
        <InputGroup inside style={{width: 300}}>
          <InputGroup.Button>
            <Icon icon="search"/>
          </InputGroup.Button>
          <Input placeholder='Search...'/>
        </InputGroup>
      </LeftSection>
      <RightSection>
        <ToggleContainer>
          <Toggle size="md"/>
        </ToggleContainer>
        <TextMode>Dark mode</TextMode>
        <AvatarContainer>
          <Avatar circle>
            <Icon icon="user"/>
          </Avatar>
        </AvatarContainer>
      </RightSection>
      <DrawerComponent placement='left' size='xs' show={drawer.show} closeDrawer={closeDrawer}/>
    </HeaderContainer>
    {children}
  </MainContainer>;
}

export default Layout;
