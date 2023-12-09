import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
// components
import Navigation from "../components/nav";
import NavigationControls from "../components/context";

import Sidebar from "../components/sidebar";

// images
import logo from "../public/images/profilepage/logo.png";

// styles

const LogoWideScreen = () => {
  return (
    <div className="h-[10%] items-center hidden lg:flex  ">
      <Image
        src={logo}
        width="auto"
        height="auto"
        quality={100}
        priority
        alt=""
      />
    </div>
  );
};

const Contentwrap = styled.div`
  height: 90%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function ProfileWrap({ children, profileDetails }) {
  const [globalNavBehaviour, setGlobalnavBehaviour] = useState(false);

  return (
    <div
      className={" p-4 lg:pt-0 w-screen h-screen bg-[black] overflow-hiddden  "}
    >
      <LogoWideScreen />
      <NavigationControls.Provider
        value={{ globalNavBehaviour, setGlobalnavBehaviour }}
      >
        <Contentwrap className="block lg:flex">
          <Navigation profileDetails={profileDetails} />
          {children}
          <Sidebar />
        </Contentwrap>
      </NavigationControls.Provider>
    </div>
  );
}
