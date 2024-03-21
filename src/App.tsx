import { Routes,Route } from "react-router-dom";
import { PublicRouters } from "./router";

const App: React.FC = () => {
  console.log(PublicRouters)
  return (
    <div className=''>
      <Routes>
        {
          PublicRouters.map((route,index)=>{
            const Page=route.component
            return <Route path={route.path} element={<Page/>} key={index}></Route>
          })
        }
      </Routes>
    </div>
  );
}
export default App;
