import {AntProvider} from "./antd/antd-provider"
import {ReduxProvider} from "./redux/redux-provider"

interface GlobalAppProvidersProps {
    children?: any
}
export const GlobalAppProviders = (props : GlobalAppProvidersProps) => (
    <ReduxProvider>
        <AntProvider> {
            props.children
        } </AntProvider>
    </ReduxProvider>
)
