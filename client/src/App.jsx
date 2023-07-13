import AboutMe from './components/aboutMe'
import Skill from './components/skill'
import Project from './components/project'
import Link from './components/Link'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='AppHeader'>
        Port Folio
      </div>
      <AboutMe />
      <Skill />
      <Project />
      <Link />
    </div>
  );
}

export default App;
