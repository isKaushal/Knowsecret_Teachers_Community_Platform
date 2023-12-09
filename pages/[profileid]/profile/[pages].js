import { useRouter } from "next/router";
import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

// components
import Home from "../../../components/profile/home";
import About from "../../../components/profile/about";
import Education from "../../../components/profile/education";
import Experince from "../../../components/profile/experince";
import Testimonials from "../../../components/profile/testimonial";
import Contact from "../../../components/profile/contact";
import NotFound from "../../../components/profile/notfound";
import ActivePage from "../../../components/activation";
import NotFoundPage from "../../../components/notfound";
// components / wrap
import ProfileWrap from "../../../components/profileWrap";
import CenterSection from "../../../components/centersection";

const ComponentSwitcher = ({ profileDetails }) => {
  const router = useRouter();
  const { pages } = router.query;

  if (pages === "home") {
    return <Home profileDetails={profileDetails} />;
  } else if (pages === "about") {
    return <About profileDetails={profileDetails} />;
  } else if (pages === "education") {
    return <Education profileDetails={profileDetails} />;
  } else if (pages === "experince") {
    return <Experince profileDetails={profileDetails} />;
  } else if (pages === "testimonials") {
    return <Testimonials profileDetails={profileDetails} />;
  } else if (pages === "contact") {
    return <Contact profileDetails={profileDetails} />;
  } else {
    return <NotFound profileDetails={profileDetails} />;
  }
};

export default function Pages({ profileDetails }) {
  if (profileDetails === false) {
    return <NotFoundPage />;
  }

  if (profileDetails.profile_status === "Deactive") {
    return <ActivePage />;
  } else {
    return (
      <ProfileWrap profileDetails={profileDetails}>
        <CenterSection>
          <ComponentSwitcher profileDetails={profileDetails} />
        </CenterSection>
      </ProfileWrap>
    );
  }
}

export async function getServerSideProps(event) {
  dbConnect();

  const user = await User.findOne({
    user_handle: event.query.profileid,
  }).lean();

  if (!user) {
    return { props: { profileDetails: false } };
  }

  const profileDetails = JSON.parse(JSON.stringify(user));

  return { props: { profileDetails } };
}
