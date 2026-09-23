import { Outlet } from "react-router";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[url('/images/background_light.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="flex-1 min-h-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
