import image from "./assets/Orizzontale_NoLogo.avif";
import Header from "./header";

const App = () => {
  return (
    <main>
      <Header />
      <img src={image} />
    </main>
  );
};

export default App;
