import type { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="w-full  h-[300px] md:h-[calc(300px*(9/21)] relative">
      <div className="absolute inset-0 bg-[url(/hero-image-github-profile.jpg)] bg-cover bg-center" />

      <div className="absolute inset-0 flex justify-center pt-8">
        {children}
      </div>
    </header>
  );
};
export default Header;
