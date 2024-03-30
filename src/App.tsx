import Header from "./components/header";
import SecondPost from "./components/second.post";
import WelcomePost from "./components/welcome.post";

const App = () => {
  return (
    <main
      className="w-full min-h-screen flex flex-col"
      style={{ scrollbarWidth: "none" }}
    >
      <Header />
      <WelcomePost />
      <SecondPost />
    </main>
  );
};

export default App;
