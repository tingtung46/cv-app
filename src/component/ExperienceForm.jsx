import { v4 as uuidv4 } from "uuid";
import ExperienceInput from "./ExperienceInput";
import Section from "./Section";
import Button from "./Button";

export default function ExperienceForm({ resumeData, setResumeData }) {
  const handleExperience = () => {
    const newID = uuidv4();

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, [newID]],
      [newID]: {
        companyName: "",
        location: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        responsibility: [],
      },
    });
  };

  const handleChange = (newData) => {
    setResumeData(newData);
  };

  return (
    <>
      <Section title="Experience">
        {resumeData.experience.map((item) => {
          return (
            <ExperienceInput
              key={item}
              itemID={item}
              handleChange={handleChange}
              resumeData={resumeData}
            />
          );
        })}

        <Button
          type="button"
          onClick={handleExperience}
          className="add-experience"
          text="Add Experience"
        />
      </Section>
    </>
  );
}
