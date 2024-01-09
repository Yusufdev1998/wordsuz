import { FC, ReactNode } from "react";

interface IM {
  children: ReactNode;
}

const MainLayout: FC<IM> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
