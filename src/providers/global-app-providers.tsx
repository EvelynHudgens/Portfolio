import {AntProvider} from "./antd/antd-provider"

interface GlobalAppProvidersProps {
    children?: any
}
export const GlobalAppProviders = (props : GlobalAppProvidersProps) => (
    <AntProvider> {
        props.children
    } </AntProvider>
)
