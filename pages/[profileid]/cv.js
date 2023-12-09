import Image from "next/image";
import styled from "styled-components";

// components
import StarRating from "../../components/starrating";

// icons
import {
  BookMark,
  EmailAnvlop,
  Football,
  Globe,
  MapLocation,
  MoviePlay,
  Music,
  Plane,
  Telephone,
} from "../../components/icons";

// models
import User from "../../models/user";

// DataBase
import dbConnect from "../../config/dbConnect";

const HeadStyler = styled.div`
  @media screen and (min-width: 1024px) {
    padding: 0rem 28rem;
    overflow-x: hidden;
  }
  @media screen {
    & > .experince {
      padding: 0.5rem 2rem;
    }
  }

  @media screen, print {
    -webkit-print-color-adjust: exact;
    & > .experince {
      page-break-after: auto;
      & > h1 {
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 600;
      }

      & > .exp_wrap {
        break-inside: avoid;
        & > .year_title {
          display: flex;

          & > .year {
            padding: 0.5rem;
            color: white;
            background-color: #07a89d;
          }

          & > h2 {
            font-weight: 500;
            font-size: 1.1rem;
            padding-left: 0.5rem;
            display: flex;
            place-items: center;
          }
        }

        & > .about {
          padding-left: 3.5rem;
          margin-bottom: 1.5rem;
        }

        & > .hr {
          height: 2px;
          margin: 0.5rem 0rem 1rem 0rem;
          background-color: #6e6e6e4f;
        }
      }
    }
  }
`;
const MainStyler = styled.div`
  @media screen, print {
    display: flex;
    break-after: auto;
    /* overflow: hidden; */
  }
`;
const LeftChild = styled.div`
  @media screen {
    height: 100%;
  }
  @media print {
    height: 100%;
  }

  @media screen, print {
    width: 40%;
    overflow: hidden;
    background-color: #373841;

    & > h1 {
      padding-left: 2rem;
      padding-bottom: 1rem;
      color: #fff;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .image {
      width: 100%;
      overflow: hidden;

      & > Image {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }

    & > .name {
      width: 100%;
      color: white;
      text-align: left;
      padding: 0.5rem 0rem 0.5rem 2rem;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.5rem;
      background-color: #07a89d;

      & > span {
        color: white;
        font-size: 1rem;
      }
    }

    & > .contact {
      width: 100%;
      height: 100%;
      padding: 1rem 1rem 1rem 2rem;

      & > h1 {
        padding-bottom: 1rem;
        color: #fff;
        font-size: 1.8rem;
        font-weight: 600;
      }

      & > .contact_details {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 0.3rem 0rem;
        position: relative;

        & > .icon {
          color: #07a89d;
          font-size: 2rem;
        }

        & > .icondata {
          padding: 0rem 1.5rem;
          color: white;

          & > h4 {
            color: #ffffff73;
          }
        }

        & ::after {
          content: "";
          left: 0;
          top: 100%;
          width: 100%;
          height: 1px;
          display: block;
          position: absolute;
          background-color: #ffffff1a;
        }
      }
    }

    & > .profile {
      padding: 1rem 1rem 1rem 2rem;
      & > h1 {
        padding-bottom: 1rem;
        color: #fff;
        font-size: 1.8rem;
        font-weight: 600;
      }

      & > p {
        color: white;
      }
    }
  }
`;
const RightChild = styled.div`
  @media screen, print {
    padding: 1rem;
    height: 100%;
    width: 60%;

    & > h1 {
      padding-bottom: 1rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    & > .hobbies {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      & :nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      & > .hobby_data {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > .icon {
          font-size: 1.5rem;
          color: black;
        }

        & > h1 {
          font-weight: 500;
          padding: 0.5rem 0rem;
          color: black;
          font-size: 1.1rem;
        }
      }
    }

    & > .skills {
      & > h1 {
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 600;
      }

      & > .bars_wrap {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin-bottom: 1.5rem;
        padding: 0rem 1rem;

        & > .bar_heading {
          padding: 0rem 0.1rem;
          grid-column: span 6;
        }
      }
    }

    & > .experince {
      & > h1 {
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: 1.8rem;
        font-weight: 600;
      }

      & > .exp_wrap {
        & > .year_title {
          display: flex;

          & > .year {
            padding: 0.5rem;
            color: white;
            background-color: #07a89d;
          }

          & > h2 {
            font-weight: 500;
            font-size: 1.1rem;
            padding-left: 0.5rem;
            display: flex;
            place-items: center;
          }
        }

        & > .about {
          padding-left: 3.5rem;
        }

        & > .hr {
          height: 2px;
          margin: 0.5rem 0rem 1rem 0rem;
          background-color: #6e6e6e4f;
        }
      }
    }
  }
`;

function MainComponent({ data }) {
  return (
    <HeadStyler>
      <MainStyler>
        <LeftChild>
          <div className="image">
            <Image
              src={data.user_image}
              width={350}
              height={350}
              alt="User_Image"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
          <div className="name">
            {data.user_name} <br /> <span>{data.faculty}</span>
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <div className="contact_details">
              <div className="icon">
                <Telephone />
              </div>
              <div className="icondata">
                <h1>PHONE</h1>
                <h4>{data.contact}</h4>
              </div>
            </div>
            <div className="contact_details">
              <div className="icon">
                <EmailAnvlop />
              </div>
              <div className="icondata">
                <h1>EMAIL</h1>
                <h4>{data.email}</h4>
              </div>
            </div>
            <div className="contact_details">
              <div className="icon">
                <Globe />
              </div>
              <div className="icondata">
                <h1>WEB</h1>
                <h4>knowsecret.com</h4>
              </div>
            </div>
            <div className="contact_details">
              <div className="icon">
                <MapLocation />
              </div>
              <div className="icondata">
                <h1>ADDRESS</h1>
                <h4>{data.address}</h4>
              </div>
            </div>
          </div>
          <div className="profile">
            <h1>Profile</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              incidunt similique officia est amet unde ut ab doloremque impedit
              voluptates exercitationem consequatur placeat nam maxime ipsa,
              inventore at maiores corrupti!
            </p>
          </div>
        </LeftChild>
        <RightChild className="RightChild">
          <h1>Hobbies</h1>
          <div className="hobbies">
            {data.hobbies.Music ? (
              <div className="hobby_data">
                <div className="icon">
                  <Music />
                </div>
                <h1>Music</h1>
              </div>
            ) : null}
            {data.hobbies.Travel ? (
              <div className="hobby_data">
                <div className="icon">
                  <Plane />
                </div>
                <h1>Travel</h1>
              </div>
            ) : null}

            {data.hobbies.Movies ? (
              <div className="hobby_data">
                <div className="icon">
                  <MoviePlay />
                </div>
                <h1>Movies</h1>
              </div>
            ) : null}
            {data.hobbies.Sports ? (
              <div className="hobby_data">
                <div className="icon">
                  <Football />
                </div>
                <h1>Sports</h1>
              </div>
            ) : null}
            {data.hobbies.Reading ? (
              <div className="hobby_data">
                <div className="icon">
                  <BookMark />
                </div>
                <h1>Reading</h1>
              </div>
            ) : null}
          </div>

          <hr />

          <div className="skills">
            <h1>Skills</h1>
            <div className="bars_wrap">
              {data.skills.map((value) => {
                return (
                  <StarRating
                    key={value.id}
                    list={value}
                    color="black"
                    stargap={0}
                    className="bar_heading"
                    size={13}
                  />
                );
              })}
            </div>
          </div>

          <hr />

          <div className="experince">
            <h1>Work Experince</h1>

            {data.experince.map((value, index) => {
              if (index <= 2) {
                return (
                  <div className="exp_wrap">
                    <div className="year_title">
                      <div className="year">{value.ExperinceYear}</div>
                      <h2>
                        {value.Designation}/ {value.Subject}
                      </h2>
                    </div>
                    <div className="about">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis velit similique,
                    </div>
                    <hr className="hr" />
                  </div>
                );
              }
            })}
          </div>
        </RightChild>
      </MainStyler>
      <div className="experince">
        <h1>Work Experince</h1>
        {data.experince.map((value, index) => {
          if (index > 2) {
            return (
              <div className="exp_wrap">
                <div className="year_title">
                  <div className="year">{value.ExperinceYear}</div>
                  <h2>
                    {value.Designation}/ {value.Subject}
                  </h2>
                </div>
                <div className="about">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis velit similique maiores repudiandae maxime,
                  voluptatem ullam quasi
                </div>
                <hr className="hr" />
              </div>
            );
          }
        })}
      </div>
    </HeadStyler>
  );
}

export default function UserCV({ UserData }) {
  return <MainComponent data={UserData} />;
}

export async function getServerSideProps(event) {
  dbConnect();

  const user = await User.findOne({
    user_handle: event.query.profileid,
  }).lean();

  const UserData = await JSON.parse(JSON.stringify(user));

  return { props: { UserData } };
}

// #07a89d blueish green color
// #fc832b knowsecret yellow color
// #f74040 pink color
// #0ee37f green color
// #ff0000 red color
// #13f1f1 skyblue color

// #373841 main gray color
