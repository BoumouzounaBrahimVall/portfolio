
import Image from "next/image";

import Layout from "./layout";

const Header = () => {
  var socialmedia=[
    {
      id:1,
      name:"dribbble",
      assetsImage:"/Icons/socialmedia/dribbble.svg",
      linkAccount:"https://dribbble.com/brahimvall"
    },
    {
      id:2,
      name:"linkedIn",
      assetsImage:"/Icons/socialmedia/linkedin.svg",
      linkAccount:"https://linkedin.com/in/brahim-vall-boumouzouna-639b29226"
    },
    {
      id:3,
      name:"github",
      assetsImage:"/Icons/socialmedia/github.svg",
      linkAccount:"https://github.com/BoumouzounaBrahimVall"
    },
    
    {
      id:4,
      name:"LeetCode",
      assetsImage:"/Icons/socialmedia/leetcode.svg",
      linkAccount:"https://leetcode.com/BoumouzounaBrahimVall/"
    },
  ]
  
  return (
    <Layout>

   
    <div  className="container ">
      <div  className="row section-1 ">
        <div data-aos="fade-up" className="col-md-4 col-sm-6 article-1">
          <div className="card-hello mx-auto d-flex align-items-center justify-content-center">
            <Image
              src="/Icons/hand.svg"
              alt="Welcoming emojie"
              width={52.66}
              height={54}
            />
            <div className="p-3 ">
              <h2>Hi there</h2>
              <p>Welcome to my Portfolio</p>
            </div>
          </div>
          <div className="card-designer mx-auto  d-none align-items-center justify-content-center d-xl-flex">
            <Image
              src="/Icons/pencilui.png"
              alt="Welcoming emojie"
              width={40}
              height={40}
            />
            <div className="p-3">
              <h2> UI/Ux Designer</h2>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" col-xl-4 col-md-6 col-md-6  article-2 mt-3">
          <div>
            <Image
              src="/Icons/avatar.png"
              alt="Welcoming emojie"
              width={264}
              height={264}
            />
            <h2>  <span id="name"></span>  </h2>
            <h3>UI/Ux Designer & Software Engineer</h3>
            <p>
            My expertise lies in assisting startups, brands, and agencies in enhancing their productivity by crafting engaging and sleek web and mobile applications.
            </p>
            <div className="header-button p-2">
              <a  href="#contact">
                 <button type="button" className="btn hire-me btn-primary  ">
                {" "}
                Hire me{" "}
              </button> 
                </a>
                <a href="resume/cv.pdf" download="Boumouzouna Brahim Vall Resume">
              <button
                type="button"
                className="btn  resume btn-outline-primary "
              >
                {" "}
                Resume <i className="bi bi-arrow-down"></i>
              </button> </a>
            </div>
            <div className="p-3 social-links">
              {
                socialmedia.map( (account,index) => (
                  <a  key={index} className="sociel-link" href={account.linkAccount} rel="noreferrer" target="_blank">
                <Image
                  src={account.assetsImage}
                  alt={account.name}
                  width={55}
                  height={55}
                />
              </a>
              )
                )
              }
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="col-xl-4 article-3 d-none d-xl-block">
          <div className="card-dev mx-auto">
            <Image
              src="/Icons/devicon.png"
              alt="Welcoming emojie"
              width={40}
              height={40}
            />
            <div className="p-3">
              <h2>Software Engineer</h2>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sociel-link{
          position: relative;
            top: 0;
            transition: top ease 0.5s;
        }
        .sociel-link:hover{
          top: -10px;

        }
        .section-1 {
        }
        .article-3 {
          justify-content: center;
          align-items: center;
          display: flex;
          height: 350px;
        }
        .card-dev h2 {
          font-weight: 600;
          font-size: 20px;
        }
        .card-dev {
          display: flex;
          width: 300px;
          
          height: 90px;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
        }
        .card-designer h2 {
          font-weight: 600;
          font-size: 24px;
        }
        .card-designer {
          margin-top: 150px;
          width: 300px;
          height: 90px;

          background: #ffffff;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
        }
        .social-links {
          display: flex;
          justify-content: space-around;
        }
        .header-button {
          justify-content: space-around;
        }
        .header-button .hire-me {
          margin: 0px 20px;
          width: 35%;
        }
        .header-button .resume {
          width: 35%;
        }
        .article-2 {
          text-align: center;
        }
        .article-2 h2 {
          font-weight: bold;
          font-size: 48px;

          text-align: center;
          letter-spacing: -0.03em;
        }
        .article-2 h3 {
          font-size: 24px;
          line-height: 36px;
          text-align: center;

          color: rgba(0, 0, 0, 0.5);
        }
        .article-2 p {
          font-weight: normal;
          font-size: 18px;
          line-height: 150%;
          /* or 27px */

          text-align: center;
          letter-spacing: -0.03em;

          color: #000000;
        }

        .card-hello {
          width: 393px;
          max-width:365px;
          min-width:340px;
          height: 127px;
          margin: auto;
          width: 87%;
          background: #ffffff;
          box-shadow: 0px 2px 37px rgba(169, 169, 169, 0.39);
          border-radius: 26px;
        }
        .card-hello h2 {
          font-weight: 600;
          font-size: 20px;
        }
        .card-hello p {
          font-size: 18px;
          line-height: px;
          font-weight: normal;

          color: rgba(0, 0, 0, 0.5);
        }
        .card-hello Image {
        }
        .article-1 {
          padding: 0px;
        }
        #name{
          font-size: 25px;
        }
        * {
          font-family: Poppins;
        }
        .container {
          margin-top: 50px;
        }
      `}</style>
    </div> </Layout>
  );
};

export default Header;
