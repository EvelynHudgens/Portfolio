import {store} from "../../redux/store";
import {Provider} from 'react-redux';

interface ReduxProviderProps {
    children?: any
}
export const ReduxProvider = (props : ReduxProviderProps) => (
    <Provider store={store}>
        {
        props.children
    } </Provider>
)
