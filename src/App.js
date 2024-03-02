import React, { useEffect, useState } from "react";
import "../src/styles/Styles.scss";
import MainHome from "./pages/home/MainHome";
import MainServices from "./pages/service/MainServices";
import Header from "./pages/home/components/Header"
import MainProjects from "./pages/projects/MainProjects";
import MainContact from "./pages/contact/MainContact";
import MainBlog from "./pages/blogs/MainBlog";
import MainFooter from "./pages/footer/MainFooter";
import { useTheme } from "./context/theme/ThemeSection";
import LoaderMain from "./pages/loader/Loader";

function App() {
  const { darkMode } = useTheme();
  const [isLoader, setIsLoader] = useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.getElementById("root").classList.add('dark-mode');
    } else {
      document.getElementById("root").classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsLoader(false)
    }, 7000);
    return () => {
      clearTimeout(textTimer);
    };
}, []);

  return (
    <div className="container">
      {isLoader?<LoaderMain /> :
      <>
        <Header />
        <MainHome />
        <MainServices />
        <MainProjects />
        <MainContact />
        <MainBlog />
        <MainFooter />
      </>}
    </div>
  );
}

export default App;
