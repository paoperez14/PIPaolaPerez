import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home/component";
import MainContent from "./components/layout/mainContent";
import AddExperience from "./routes/AddExperience/component";
import ExperiencesDetail from "./routes/ExperienceDetail/component";

function App() {
  return (
    <>
      <MainContent>
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:experienceSlug' element={<ExperiencesDetail/>} />
            <Route path='/addExperience' element={<AddExperience />} />
          </Routes>
        </main>
      </MainContent>
    </>
  )
}

export default App
