export default function ResumeUI({ resumeData }) {
  return (
    <>
      <main>
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
      </main>
    </>
  );
}
