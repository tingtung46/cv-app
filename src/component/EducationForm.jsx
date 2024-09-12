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

  const handleSchoolName = (e) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { schoolName: e.target.value }],
    });
  };

  const handleSchoolLocation = (e) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { schoolLocation: e.target.value }],
    });
  };

  const handleMajor = (e) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { major: e.target.value }],
    });
  };

  const handleStartDate = (e) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { startDate: e.target.value }],
    });
  };

  const handleEndDate = (e) => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { endDate: e.target.value }],
    });
  };

  return (
    <>
      <Section title="Education">
        {resumeData.education.map((item) => {
          <div className="education-inp" key={item.id}>
            <div>
              <label htmlFor="school-name">School Name</label>
              <input
                type="text"
                name="school-name"
                id="school-name"
                onChange={handleSchoolName}
              />
            </div>

            <div>
              <label htmlFor="school-location">School Location</label>
              <input
                type="text"
                name="school-location"
                id="school-location"
                onChange={handleSchoolLocation}
              />
            </div>

            <div>
              <label htmlFor="major">Major</label>
              <input
                type="text"
                name="major"
                id="major"
                onChange={handleMajor}
              />
            </div>

            <div className="school-date">
              <div>
                <label htmlFor="school-start-date">From</label>
                <input
                  type="text"
                  name="school-start-date"
                  id="school-start-date"
                  onChange={handleStartDate}
                />
              </div>

              <div>
                <label htmlFor="school-start-end">To</label>
                <input
                  type="text"
                  name="school-start-end"
                  id="school-start-end"
                  onChange={handleEndDate}
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
