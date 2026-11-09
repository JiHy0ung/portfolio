import { Outlet } from "react-router";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[url('/images/background_tile.webp')] bg-repeat">
      <Header />
      <main className="flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
