import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import SecondPost from "./components/second-post";
import Services from "./components/services";
import WelcomePost from "./components/welcome.post";

const App = () => {
  return (
    <main
      id="main-body"
      className="w-full min-h-screen flex flex-col items-center"
      style={{ scrollbarWidth: "none" }}
    >
      <Header />
      <WelcomePost />
      <SecondPost />
      <Featured />
      <Services />
      <Footer />
    </main>
  );
};

export default App;
