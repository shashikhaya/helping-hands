import Header from './layout/header/Header';
//import LandingInfo from './layout/body/LandingInfo';
import Footer from './layout/footer/Footer';
import TaskListData from './tasks/TaskListData';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header /> 
      <TaskListData />
      <Footer />
    </div>
  );
}

export default App;
