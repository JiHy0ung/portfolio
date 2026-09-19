import { Outlet } from "react-router";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/images/background_light.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
