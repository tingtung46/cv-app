import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import Section from "./Section";

export default function EducationForm({ resumeData, setResumeData }) {
  const handleEducation = () => {
    const newID = uuidv4();

    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: newID,
          schoolName: "",
          schoolLocation: "",
          major: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  return (
    <>
      <Section title="Education">
        {resumeData.education.map((id) => {
          <div className="education-inp" id={id}>
            <div>
              <label htmlFor="school-name">School Name</label>
              <input type="text" name="school-name" id="school-name" />
            </div>

            <div>
              <label htmlFor="school-location">School Location</label>
              <input type="text" name="school-location" id="school-location" />
            </div>

            <div>
              <label htmlFor="major">Major</label>
              <input type="text" name="major" id="major" />
            </div>

            <div className="school-date">
              <div>
                <label htmlFor="school-start-date">From</label>
                <input
                  type="text"
                  name="school-start-date"
                  id="school-start-date"
                />
              </div>

              <div>
                <label htmlFor="school-start-end">To</label>
                <input
                  type="text"
                  name="school-start-end"
                  id="school-start-end"
                />
              </div>
            </div>
          </div>;
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
