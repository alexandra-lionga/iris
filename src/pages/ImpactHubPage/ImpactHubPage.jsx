import Header from "../../components/Header/Header";
import "./ImpactHubPage.scss";
import impact from "../../assets/images/impact1.jpg";
import christmas from "../../assets/images/christmas.jpg";
import volunteer from "../../assets/images/volunteers.jpg";
import firefighters from "../../assets/images/firefighters.jpg";
const ImpactHubPage = () => {
  return (
    <>
      <Header />
      <div className="impact">
        <h1 className="impact__heading">Make a Difference Together</h1>
        <p className="impact__subheading">
          Welcome to Impact Hub, a dedicated space where changemakers unite!
          Here, individuals, organizations, and communities can share their
          charities, causes, and initiatives, creating a collaborative platform
          to inspire action, raise awareness, and drive meaningful impact.
          Whether you're promoting a local grassroots project, seeking support
          for a global movement, or simply wanting to connect with like-minded
          people, Impact Hub is your launchpad for change.
        </p>
        <div className="impact__cards">
          <div className="impact__card">
            <div className="impact__card-item">
              <img
                className="impact__card-img"
                src={impact}
                alt="charity event photo"
              />
              <div className="impact__card-content">
                <p className="impact__card-date"> Saturday, December 7</p>
                <h2 className="impact__card-heading">
                  Seeds of Hope: AREF's 2024 Gala
                </h2>
                <p className="impact__card-description">
                  Join us as we celebrate resilience, knowledge, and the power
                  of education to plant seeds of hope for future generations.
                </p>
                <div>
                  <p className="impact__card-info">
                                      <a href="https://www.eventbrite.ca/e/seeds-of-hope-arefs-2024-gala-tickets-1071538152459?aff=ebdssbcategorybrowse">Click here </a>to learn more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="impact__card">
            <div className="impact__card-item">
              <img
                className="impact__card-img"
                src={christmas}
                alt="charity event photo"
              />
              <div className="impact__card-content">
                <p className="impact__card-date"> Saturday, December 14</p>
                <h2 className="impact__card-heading">
                  A multi-act concert and Redeemer tradition.
                </h2>
                <p className="impact__card-description">
                  Join us as we celebrate resilience, knowledge, and the power
                  of education to plant seeds of hope for future generations.{" "}
                  <br /> <br />
                  Christmas In The City is an annual tradition at Church of the
                  Redeemer, a multi-act concert benefitting the Common Table
                  drop-in breakfast and lunch programme for people affected by
                  homelessness.
                </p>
                <p className="impact__card-info">
                  <a href="https://www.eventbrite.ca/e/christmas-in-the-city-a-benefit-for-the-common-table-tickets-1056504596689?aff=ebdssbcategorybrowse">
                    Click here{" "}
                  </a>
                  to learn more.
                </p>
              </div>
            </div>
          </div>
          <div className="impact__card">
            <div className="impact__card-item">
              <img
                className="impact__card-img"
                src={volunteer}
                alt="charity event photo"
              />
              <div className="impact__card-content">
                <p className="impact__card-date"> Saturday, December 14</p>
                <h2 className="impact__card-heading">
                  Volunteers and giving for Christmas Event in Toronto
                </h2>
                <p className="impact__card-description">
                  Come join us in Toronto to spread some holiday cheer by
                  volunteering and giving back this Christmas!
                </p>
                <p className="impact__card-info">
                  <a href="https://www.eventbrite.ca/e/volunteers-and-giving-for-christmas-event-in-toronto-tickets-1090064645699?aff=ebdssbcategorybrowse">
                    Click here{" "}
                  </a>
                  to learn more.
                </p>
              </div>
            </div>
          </div>
          <div className="impact__card">
            <div className="impact__card-item">
              <img
                className="impact__card-img"
                src={firefighters}
                alt="charity event photo"
              />
              <div className="impact__card-content">
                <p className="impact__card-date"> Saturday, December 12</p>
                <h2 className="impact__card-heading">
                  Toronto Firefighters' Toy Drive at CF Shops at Don Mills
                </h2>
                <p className="impact__card-description">
                  Join the Toronto Firefighters' Toy Drive, an annual initiative
                  dedicated to ensuring every child experiences the magic of the
                  holidays. Donate a new, unwrapped toy or contribute
                  monetarily, and help deliver hope and happiness to families
                  across Toronto.
                </p>
                <p className="impact__card-info">
                                  <a href="https://www.eventbrite.ca/e/toronto-firefighters-toy-drive-at-cf-shops-at-don-mills-tickets-1095299844319?aff=ebdssbcategorybrowse">Click here </a>to learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpactHubPage;
