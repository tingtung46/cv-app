import { v4 as uuidv4 } from "uuid";
import EducationInput from "./EducationInput";
import Button from "./Button";
import Section from "./Section";

export default function EducationForm({ resumeData, setResumeData }) {
  const handleEducation = () => {
    const newID = uuidv4();

    setResumeData({
      ...resumeData,
      education: [...resumeData.education, [newID]],
      [newID]: {
        schoolName: "",
        schoolLocation: "",
        major: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  const handleChange = (newData) => {
    setResumeData(newData);
  };

  return (
    <>
      <Section title="Education">
        {resumeData.education.map((item) => {
          return (
            <EducationInput
              key={item}
              itemID={item}
              handleChange={handleChange}
              resumeData={resumeData}
            />
          );
        })}

        <Button
          type="button"
          onClick={handleEducation}
          className="add-education"
          text="Add Education"
        />
      </Section>
    </>
  );
}
