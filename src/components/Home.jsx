import React from "react";
import Mvp from "./homeComponents/Mvp";
import TabSection from "./homeComponents/TabSection";
import Skills from "./homeComponents/Skills";

function Home() {
  return (
    <div className="">
      <Mvp />
      <Skills />
      <TabSection />
    </div>
  );
}

export default Home;
