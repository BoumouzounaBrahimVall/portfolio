import Image from "next/image";

const SkillsSection = () => {
  return (
    <div>
      <div className="row section-2 mt-5 justify-content-center">
        <div data-aos="fade-up" id="skills" className="head mt-5">
          <h2  >Skills</h2>
          <p>
            Im sharing with you some framworks and tools that i used on my
            several project as Ui/Ux Designer and Software Development
          </p>
        </div>
        
        
        <div data-aos="fade-up" className="cards-skils mt-2 row p-3">
          <div className="col-6 card mt-3">
            <Image
              src="/Icons/skills/devicon.png"
              alt="Welcoming emojie"
              width={167}
              height={167}
            />
            <h2 className="p-2">Software Engineer</h2>
            <div className="d-flex justify-content-between tools-lang-head">
              <h3 className="p-2">Tools</h3>
              <Image
                src="/Icons/skills/arrow.svg"
                alt="Welcoming emojie"
                width={272}
                height={2}
              />
            </div>
            <div className="d-flex align-items-center   tools-lang ">

              <div className="col-12 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/reactjs-icon.svg"
                  alt="Welcoming emojie"
                  width={46}
                  height={46}
                />
                <Image
                  src="/Icons/skills/logos/flutterio-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logos_angular-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={42}
                />
                
                
                <Image
                  src="/Icons/skills/logos/java-icon.svg"
                  alt="Welcoming emojie"
                  width={46}
                  height={46}
                />
                <Image
                  src="/Icons/skills/logos/logo-spring-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/atlassian_jira-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="d-flex  align-items-center   tools-lang ">

              <div className="col-12 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/expressjs-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/nodejs-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/mongodb-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/mysql-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/oracle-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/getpostman-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="col-6 card mr-auto mt-3">
            <Image
              src="/Icons/skills/uiuxicon.png"
              alt="Welcoming emojie"
              width={167}
              height={167}
            />
            <h2 className="p-2">Ui/Ux Designer</h2>
            <div className="d-flex justify-content-between tools-lang-head">
              <h3 className="p-2">Tools</h3>
              <Image
                src="/Icons/skills/arrow.svg"
                alt="Welcoming emojie"
                width={272}
                height={2}
              />
            </div>
            <div className="d-flex align-items-center   tools-lang ">

              <div className="col-9 p-2 d-flex justify-content-between">
                <Image
                  src="/Icons/skills/logos/logo-ai-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logo-ps-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
                <Image
                  src="/Icons/skills/logos/logo-figma-icon.svg"
                  alt="Welcoming emojie"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="d-flex align-items-center   tools-lang ">
              <h4 className="mr-auto p-2 col-5 "></h4>

              <div className="col-7 p-2 d-flex justify-content-between"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tools-lang,
          .tools-lang-head {
            width: 85%;
          }

          .tools-lang h4 {
            font-weight: normal;

            font-size: 18px;
            line-height: 27px;
          }

          .cards-skils {
            justify-content: space-around;
          }
          .cards-skils .card h3 {
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;

            color: rgba(0, 0, 0, 0.5);
          }
          .cards-skils .card h2 {
            font-weight: bold;
            font-size: 36px;
            line-height: 54px;
            text-align: center;
            letter-spacing: -0.03em;
          }
          .cards-skils .card {
            width: 537.19px;
            height: 503.92px;

            min-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin:auto;
            background: #ffffff;
            box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
            border-radius: 26px;
            position: relative;
            top: 0;
            transition: top ease 0.5s;
          }
          .cards-skils .card:hover {
            top: -10px;

          }
          .section-2 {
            margin-top: 100px;
          }
          .section-2 .head {
            margin: auto;
            justify-content: center;
            width: 885px;
          }
          .section-2 .head h2 {
            font-weight: bold;
            font-size: 48px;
            text-align: center;
          }
          .section-2 .head p {
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
            /* or 27px */

            text-align: center;
            letter-spacing: -0.03em;

            color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default SkillsSection;
