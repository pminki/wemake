import { Outlet } from "react-router";

export default function Authlayout() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-gradient-to-br from-primary via-black to-primary/50" />
      <Outlet />
    </div>
  );
}
