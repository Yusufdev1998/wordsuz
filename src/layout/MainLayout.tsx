import { FC, ReactNode } from "react";

interface IM {
  children: ReactNode;
}

const MainLayout: FC<IM> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default MainLayout;
