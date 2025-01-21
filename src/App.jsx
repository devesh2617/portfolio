import Expertise from "./components/Expertise";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <div>
        <Introduction/>
        <Summary/>
        <Expertise/>
        <WorkExperience/>
        <Projects/>
        <Links/>
      </div>
    </main>
  );
}

export default App;
