import { v4 as uuidv4 } from "uuid";
import ProjectInput from "./ProjectInput";
import Section from "./Section";
import Button from "./Button";

export default function ProjectForm({ resumeData, setResumeData }) {
  const handleProject = () => {
    const newID = uuidv4();

    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, [newID]],
      [newID]: {
        projectName: "",
        tools: "",
        startDate: "",
        endDate: "",
        description: [],
      },
    });
  };

  const handleChange = (newData) => {
    setResumeData(newData);
  };

  return (
    <>
      <Section title="Projects">
        {resumeData.projects.map((item) => {
          return (
            <ProjectInput
              key={item}
              itemID={item}
              handleChange={handleChange}
              resumeData={resumeData}
            />
          );
        })}
      </Section>

      <Button
        type="button"
        onClick={handleProject}
        className="add-project"
        text="Add Project"
      />
    </>
  );
}
