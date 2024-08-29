import { Outlet } from "react-router-dom";
import Header from "../components/share/Header";


const AppLayout = () => {
  

  return (
    <>
    <Header />
    
      <div className="flex w-full justify-between h-screen ">
        <div className="flex w-full justify-between relative">
    
          <section className="w-full  overflow-y-scroll scrollbar_custom ">
          <Outlet />
          </section>
       
        </div>
      </div>
      <footer>
        footer </footer>
      
    </>
  );
};

export default AppLayout;
