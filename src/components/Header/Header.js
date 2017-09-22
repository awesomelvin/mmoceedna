import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';

import NavLinks from '../NavLinks';

import {
  LogoContainer,
  LogoLight,
  HeaderContainer,
  HeaderRow,
  HeaderCol,
  SettingsBox,
  MenuButtonBox,
  MenuButton,
} from './styles';

const menu = (
  <Menu>
    <Menu.Item>
      <a>1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a>2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a>3d menu item</a>
    </Menu.Item>
  </Menu>
);

const Header = ({
  logo,
  headerLeftLinks,
  headerLeftCustom,
  headerRightLinks,
  headerRightCustom,
  onPressToggle,
  sideBarCollapsed,
}) => (
  <HeaderContainer className="header clearfix">
    <HeaderRow>
      <MenuButtonBox span={2}>
        <MenuButton
          className="trigger"
          type={sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onPressToggle}
        />
      </MenuButtonBox>
      {logo && sideBarCollapsed &&
      <LogoContainer span={2}>
        <Link to={'/'}>
          <LogoLight src={require('../../assets/images/logo-light.png')} />
        </Link>
      </LogoContainer>
        }
      <HeaderCol span={8}>
        {headerLeftLinks.length > 0
            ? <NavLinks links={headerLeftLinks} alignment="left" />
            : headerLeftCustom || null
          }
      </HeaderCol>
      <HeaderCol span={12}>
        {headerRightLinks.length > 0
            ? <NavLinks links={headerRightLinks} alignment="right" />
            : headerRightCustom || null
          }
      </HeaderCol>
      <SettingsBox>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link">
            Settings <Icon type="setting" />
          </a>
        </Dropdown>
      </SettingsBox>
    </HeaderRow>
  </HeaderContainer>
  );
Header.defaultProps = {
  logo: true,
};

export default Header;