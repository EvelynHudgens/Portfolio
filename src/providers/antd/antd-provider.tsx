import {App} from 'antd';

interface AntdProviderProps {
    children?: any
}
export const AntProvider = (props : AntdProviderProps) => (
    <App> {
        props.children
    } </App>
)
