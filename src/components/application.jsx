import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import GraphContainer from "./graph_container";


const Application = () => {
    return(
        // container div
        <div class="w-full h-full bg-black bg-gradient-to-r from-cyan-500 to-blue-500">
            <Routes>
                <Route path="/">
                    <GraphContainer/>
                </Route>
                <Route path="/about">
                    
                </Route>
            </Routes>
        </div>
    )
}


export default Application;