import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout";
import { IssuePage } from "./pages/Issue";



export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
               <Route path='/' element={<Home />}/>
               <Route path='/issue/:issueNumber' element={<IssuePage />}/>
            </Route>
        </Routes>
    )
}