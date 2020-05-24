import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ContentLoader from "react-content-loader";
import { Link, useParams } from "react-router-dom";
import {
  AboutSkeleton,
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  AboutBodyContainer,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  OverviewContainer,
  OverviewText,
} from "./AboutOverview.styles";
import { LOAD_USER, LOAD_FROM_URL_USER } from "../../utils/queries";
import { ReactComponent as WorkplaceIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as SchoolIcon } from "../../assets/icons/school.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const AboutPageOverview = () => {
  const { data: userData, loading: authLoading } = useQuery(LOAD_USER);
  const { username } = useParams();

  const { data: profileData, loading: profileLoading } = useQuery(
    LOAD_FROM_URL_USER,
    {
      variables: {
        username,
      },
    }
  );

  // const { loadUser: user } = userData;
  // const { loadFromUrlUser: profileUser } = profileData;

  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUser.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  return (
    <AboutInfoContainer>
      <AboutContainer>
        {!authLoading && !profileLoading ? (
          <>
            <AboutSidebar>
              <AboutHeading>About</AboutHeading>
              <Link to="about_overview">
                <Overview>Overview</Overview>
              </Link>
              <Link to="about_work_and_education">
                <WorkAndEducation>Work and Education</WorkAndEducation>
              </Link>
              <Link to="about_contact_and_basic_info">
                <ContactAndBasicInfo>
                  Contact and Basic Info
                </ContactAndBasicInfo>
              </Link>
            </AboutSidebar>
            {readOnly() ? (
              <AboutBodyContainer>
                <OverviewContainer>
                  <WorkplaceIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {profileData.loadFromUrlUser.workPlace ? (
                      <>
                        Works at
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {profileData.loadFromUrlUser.workPlace}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b " }}>
                        No workplace to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
                <OverviewContainer>
                  <SchoolIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {profileData.loadFromUrlUser.school ? (
                      <>
                        Studies at{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {profileData.loadFromUrlUser.school}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b" }}>
                        No school to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
                <OverviewContainer>
                  <HomeIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {profileData.loadFromUrlUser.homePlace ? (
                      <>
                        Lives in{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {profileData.loadFromUrlUser.homePlace}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b" }}>
                        No homeplace to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
              </AboutBodyContainer>
            ) : (
              <AboutBodyContainer>
                <OverviewContainer>
                  <WorkplaceIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {userData.loadUser.workPlace ? (
                      <>
                        Works at
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {userData.loadUser.workPlace}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b " }}>
                        No workplace to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
                <OverviewContainer>
                  <SchoolIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {userData.loadUser.school ? (
                      <>
                        Studies at{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {userData.loadUser.school}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b" }}>
                        No school to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
                <OverviewContainer>
                  <HomeIcon width={20} height={20} fill="#65676b" />
                  <OverviewText>
                    {userData.loadUser.homePlace ? (
                      <>
                        Lives in{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {userData.loadUser.homePlace}
                        </span>
                      </>
                    ) : (
                      <span style={{ color: "#65676b" }}>
                        No homeplace to show
                      </span>
                    )}
                  </OverviewText>
                </OverviewContainer>
              </AboutBodyContainer>
            )}
          </>
        ) : (
          <AboutSkeleton>
            <ContentLoader
              speed={1}
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="20" y="20" rx="3" ry="6" width="100" height="21" />
              <rect x="21" y="60" rx="3" ry="6" width="304" height="15" />
              <rect x="21" y="90" rx="0" ry="6" width="303" height="15" />
              <rect x="21" y="120" rx="0" ry="6" width="303" height="15" />
            </ContentLoader>
          </AboutSkeleton>
        )}
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageOverview;
