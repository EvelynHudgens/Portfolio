import React from "react";
import {AppLayout} from "./components";
import {GlobalAppProviders} from "./providers/global-app-providers";
import './App.css';

const App = () => (
    <GlobalAppProviders>
        <AppLayout></AppLayout>
    </GlobalAppProviders>
)

export default App;
