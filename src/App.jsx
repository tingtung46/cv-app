import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./component/GeneralForm";
import EducationalForm from "./component/EducationForm";
import ExperienceForm from "./component/ExperienceForm";
import ProjectForm from "./component/ProjectForm";
import SkillsForm from "./component/SkillsForm";
import ResumeUI from "./component/ResumeUI";
import { emptyData } from "./initData";
import Button from "./component/Button";

function App() {
  const [resumeData, setResumeData] = useState(emptyData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted === false) {
    return (
      <>
        <main>
          <GeneralInfoForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <EducationalForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <ExperienceForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          <ProjectForm resumeData={resumeData} setResumeData={setResumeData} />
          <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />

          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsSubmitted(true);
            }}
            className="submit-btn"
            text="Create Resume"
          />
        </main>
      </>
    );
  } else {
    return (
      <>
        <ResumeUI resumeData={resumeData} />
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsSubmitted(false);
          }}
          className="edit-btn"
          text="Edit Resume"
        />
      </>
    );
  }
}

export default App;
