import styled from 'styled-components';
import { Layout, Icon, Row, Col } from 'antd';

export const LogoContainer = styled(Col)``;

export const LogoLight = styled.img`
  height: 64px;
  width: auto;
`;

export const HeaderContainer = styled(Layout.Header)`
  padding: 0;
  transition: opacity .5s;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0 2px 2px rgba(0,0,0,0.05), 0 1px 0 rgba(0,0,0,0.05);
`;

export const HeaderRow = styled(Row)``;

export const HeaderCol = styled(Col)`
  @media (max-width : 992px) {
    display: none;
  }
`;

export const SettingsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const MenuButtonBox = styled(Col)`
  width: 50px;
  @media (min-width : 992px) {
    display: none;
  }
`;

export const MenuButton = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 16px;
  cursor: pointer;
  transition: color .3s;
`;