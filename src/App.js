import AllRoutes from "./routes/AllRoutes";
import * as React from "react";
import UpperMenu from "./pages/UpperMenu";

function App() {
    return (
        <div>
            <div className="App">
                <UpperMenu/>
                <AllRoutes/>
            </div>
        </div>
    );
}

export default App;
