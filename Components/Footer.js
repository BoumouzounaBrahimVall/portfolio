const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col ">
          <p>All rights reserved • 2023</p>
        </div>
      </div>
      <style jsx>{`
        p {
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height */

          letter-spacing: -0.03em;

          color: rgba(0, 0, 0, 0.5);
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Footer;
