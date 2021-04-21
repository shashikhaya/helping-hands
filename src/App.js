import Header from './layout/header/Header';
import LandingInfo from './layout/body/LandingInfo';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="container mx-auto mb-auto px-8">
        <LandingInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
