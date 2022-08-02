// @flow
import * as React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionText from "../components/SectionText/SectionText";
import Footer from "../components/Footer/Footer";
import AccordionContent from "../components/Acoordion/AccordionContent";
import Headline from "../components/Headline/Headline";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <SectionContent />
      <SectionText bgColor={false} />
      <AccordionContent />
      <Headline title="Conheça o cursossssss" />
      <Footer />
    </>
  );
};

export default Home;
