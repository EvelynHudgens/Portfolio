import {Layout} from 'antd'
import styled from 'styled-components'

const {Header, Content, Footer, Sider} = Layout;

interface AppLayoutProps {
    children?: any
}
export const AppLayout = (props : AppLayoutProps) => {
    return (
        <StyledLayout>
            <MediumSider collapsible></MediumSider>
            <MobileSider collapsible
                collapsedWidth={0}></MobileSider>
            <Content>
                <StyledHeader></StyledHeader>
                <Content> {
                    props.children
                } </Content>
                <Footer></Footer>
            </Content>
        </StyledLayout>
    )
}

const StyledLayout = styled(Layout)`
    min-height: 150vh;
`
const StyledHeader = styled(Header)`
    position: sticky;
    top: 0px;
    @media (max-width: 901px) {
        display: none;
    }
`
const MediumSider = styled(Sider)`
    @media (min-width: 901px) {
        display: none;
    }
    @media (max-width: 551px) {
        display: none;
    }
`
const MobileSider = styled(Sider)`
    @media (min-width: 551px) {
        display: none;
    }
`
