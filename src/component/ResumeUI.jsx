export default function ResumeUI({ resumeData }) {
  return (
    <>
      <section className="resume-ui">
        <section className="ui general">
          <h1>
            {resumeData.generalInfo.firstName +
              " " +
              resumeData.generalInfo.lastName}
          </h1>

          <p>
            {resumeData.generalInfo.email} |{" "}
            {resumeData.generalInfo.phoneNumber} |{" "}
            {resumeData.generalInfo.location}
          </p>
        </section>

        <section className="ui education">
          <h2>Education</h2>

          {resumeData.education.map((item) => {
            return (
              <div className="school-main" key={item}>
                <div className="school-desc">
                  <h3>{resumeData[item]["schoolName"]}</h3>
                  <p>
                    {resumeData[item]["startDate"]} -{" "}
                    {resumeData[item]["endDate"]}
                  </p>
                </div>

                <p className="school-location">
                  {resumeData[item]["schoolLocation"]}
                </p>
                <p>{resumeData[item]["major"]}</p>
              </div>
            );
          })}
        </section>

        <section className="ui experience">
          <h2>Experience</h2>

          {resumeData.experience.map((item) => {
            return (
              <div className="experience-main" key={item}>
                <div className="experience-desc">
                  <h3>{resumeData[item]["companyName"]}</h3>
                  <p>
                    {resumeData[item]["startDate"]} -{" "}
                    {resumeData[item]["endDate"]}
                  </p>
                </div>

                <p className="company-location">
                  {resumeData[item]["location"]}
                </p>
                <p>{resumeData[item]["positionTitle"]}</p>

                <ul className="responsibility">
                  {resumeData[item]["responsibility"]["map"]((itemID) => {
                    return (
                      <>
                        <li key={itemID}>{resumeData[item][itemID]}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="ui projects">
          <h2>Projects</h2>

          {resumeData.projects.map((item) => {
            return (
              <div className="project-main" key={item}>
                <div className="project-desc">
                  <h3>{resumeData[item]["projectName"]}</h3>
                  <p>
                    {resumeData[item]["startDate"]} -{" "}
                    {resumeData[item]["endDate"]}
                  </p>
                </div>

                <p className="tools">{resumeData[item]["tools"]}</p>

                <ul className="description">
                  {resumeData[item]["description"]["map"]((itemID) => {
                    return (
                      <>
                        <li key={itemID}>{resumeData[item][itemID]}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="ui technical-skills">
          <h2>Technical Skills</h2>

          <div className="skills-wrapper">
            <p>Program languages: {resumeData.technicalSkills.languages}</p>
            <p>Frameworks: {resumeData.technicalSkills.frameworks}</p>
            <p>Developer Tools: {resumeData.technicalSkills.devTools}</p>
            <p>Libraries: {resumeData.technicalSkills.libraries}</p>
          </div>
        </section>
      </section>
    </>
  );
}
