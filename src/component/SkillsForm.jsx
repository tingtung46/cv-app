import Section from "./Section";

export default function SkillsForm({ resumeData, setResumeData }) {
  const handleLanguages = (e) => {
    setResumeData({
      ...resumeData,
      technicalSkills: {
        ...resumeData.technicalSkills,
        languages: e.target.value,
      },
    });
  };

  const handleFrameworks = (e) => {
    setResumeData({
      ...resumeData,
      technicalSkills: {
        ...resumeData.technicalSkills,
        frameworks: e.target.value,
      },
    });
  };

  const handleDevTools = (e) => {
    setResumeData({
      ...resumeData,
      technicalSkills: {
        ...resumeData.technicalSkills,
        devTools: e.target.value,
      },
    });
  };

  const handleLibraries = (e) => {
    setResumeData({
      ...resumeData,
      technicalSkills: {
        ...resumeData.technicalSkills,
        libraries: e.target.value,
      },
    });
  };

  return (
    <>
      <Section title="Technical Skills">
        <div className="input">
          <label htmlFor="program-languages">Program Languages</label>
          <input
            type="text"
            name="program-languages"
            id="program-languages"
            onChange={handleLanguages}
            value={resumeData.technicalSkills.languages}
          />
        </div>

        <div className="input">
          <label htmlFor="frameworks">Frameworks</label>
          <input
            type="text"
            name="frameworks"
            id="frameworks"
            onChange={handleFrameworks}
            value={resumeData.technicalSkills.frameworks}
          />
        </div>

        <div className="input">
          <label htmlFor="dev-tools">Developer Tools</label>
          <input
            type="text"
            name="dev-tools"
            id="dev-tools"
            onChange={handleDevTools}
            value={resumeData.technicalSkills.devTools}
          />
        </div>

        <div className="input">
          <label htmlFor="libraries">Libraries</label>
          <input
            type="text"
            name="libraries"
            id="libraries"
            onChange={handleLibraries}
            value={resumeData.technicalSkills.libraries}
          />
        </div>
      </Section>
    </>
  );
}
