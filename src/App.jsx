import MainContent from "./components/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="h-svh w-svw text-white flex overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
