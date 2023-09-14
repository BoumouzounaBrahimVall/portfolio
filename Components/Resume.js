import Image from "next/image";
const Resume = () => {
  var experinces = [
    {
      id: "1",
      company: "Sporgate",
      role: "Front End Mobile Dev",
      period: "May 2023 - Jul 2023",
      postDesc:
        "Develop reusable components and user interfaces using the Flutter framework, as well as GitHub and Jira to collaborate with team members.",
      indicatorImg: "/experiences/indicatorDisabled.svg",
      stack: {
        image: "",
      },
    },
    {
      id: "2",
      company: "NETCOM",
      role: "Graphic Designer",
      period: "Nov 2022 - Jun 2023",
      postDesc: "creates visual content, blending artistry and technical skills to convey messages effectively.",
      indicatorImg: "/experiences/indicatorDisabled.svg",
      stack: {
        image: "",
      },
    },
  ];
  var educations = [
    {
      id: "1",
      school: "Faculty of Sciences and Techniques of Mohammedia",
      level: "Engineer's degree at Software and integrated IT system",
      period: "2021 - Present",
      indicatorImg: "/experiences/indicator.svg",
      postDesc:
        "Loading ... ",
    },{
      id: "2",
      school: "Faculty of Sciences and Techniques of Mohammedia",
      level: "DEUST degree at Math, physics and IT system",
      period: "2019 - 2021",
      indicatorImg: "/experiences/indicatorDisabled.svg",
      postDesc:
        "Learn programming language fundamentals such as Algorithm, C, SQL, Mathematics and physics",
    },
    
  ];
  return (
    <div className="container section-4 mt-5">
      <div className="row ">
        <div data-aos="fade-up" id="resume" className="head mt-5">
          <h2>Resume</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-between ">
        <div data-aos="fade-up" className="col-xl-5 col-lg-6 justify-content-center mx-auto">
          <h3 className="m-4">Experiences</h3>
          <div  className=" ">
            
          
          {experinces.map((experience, index) => (
            <div key={experience.id} className=" d-flex  mt-3 align-items-center">
              <Image src={experience.indicatorImg} alt={experience.company} width={55} height={262} />
              <div className="card-exp p-4  align-items-start">
                <p className="sup-headline ">{experience.company}</p>
                <h3 className="headline">{experience.role}</h3>
                <p className="sub-headline">{experience.period}</p>
                <p
                  className="body-desc"
                  dangerouslySetInnerHTML={{ __html: experience.postDesc }}
                ></p>
              </div>
            </div>
          ))}
        </div></div>
        <div className="col-xl-5 col-lg-6" data-aos="fade-up">
          <h3 className="m-4" >Education</h3>
          <div  className="justify-content-end  ">
          {educations.map((education, index) => (
            <div key={education.id} className=" d-flex  mt-3 align-items-center">
              <Image src={education.indicatorImg} alt={education.school} width={55} height={262} />
              <div className="card-exp p-4  align-items-start">
                <p className="sup-headline ">{education.school}</p>
                <h3 className="headline">{education.level}</h3>
                <p className="sub-headline">{education.period}</p>
                <p
                  className="body-desc content"
                  dangerouslySetInnerHTML={{ __html: education.postDesc }}
                ></p>
              </div>
            </div>
          ))}
        </div></div>
      </div>
      <style jsx>
        {`
        .card-exp .body-desc{
          font-weight: 500;
          font-size: 12px;
          word-break: break-all;
  white-space: pre-wrap;
          color: rgba(0, 0, 0, 0.75);
          
        letter-spacing: 0.06em;

        }
        .card-exp .sub-headline{
          font-weight: 500;
          font-size: 12px;
          
         

          color: rgba(0, 0, 0, 0.5);
        }
        .card-exp .headline{
          font-weight: 500;
          text-align:left;
          line-height: 30px;
          

          color: #000000;
        }
        .card-exp .sup-headline{
          font-size: 14px;
          
          letter-spacing: -0.03em;

          color: #0046FF;
        }
        .section-4 .card-exp{
          text-align:left;
          width: 401px;
          min-height: 227px;
          background: #FFFFFF;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
          margin-left:10px;
          
          
          
        }
        .section-4 .card-exp::before {
          content: "";
          
          }
        .section-4 h3{
          font-size: 24px;
          text-align: center;
        }
        .section-4{
            margin-top: 100px;
        }
        .section-4 .head {
            margin: auto;
            justify-content: center;
            width: 885px;
          }
          .section-4 .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
