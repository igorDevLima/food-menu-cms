import "./index.css";

const OpenHours = () => {
  return (
    <div className="open-hours">
      <div className="container">
        <div className="content">
          <h2>Open Hours</h2>
          <div className="row">
            <div className="col-md">
              <ul>
                <li>Monday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li>Tuesday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li>Wednesday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li>Thursday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li>Friday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md">
              <ul>
                <li>Saturday</li>
                <li>8am - 7pm</li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul className="hours text-center">
                <li>Sunday</li>
                <li>24 Hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenHours;
