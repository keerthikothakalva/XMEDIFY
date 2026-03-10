import HeroSlider from "../components/HeroSlider/HeroSlider";
import SearchBar from "../components/SearchBar/SearchBar";
import Offers from "../components/Sections/Offers/Offers";

import Specialization from "../components/Sections/Specialization/Specialization";
import Specialists from "../components/Sections/Specialists/Specialists";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Blogs from "../components/Sections/Blogs/Blogs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import FAQs from "../components/Sections/FAQs/FAQs";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";

function Home() {
  return (
    <>
  <HeroSlider />
  <SearchBar />
  <Offers />
  <Specialization />
  <Specialists />
  <PatientCaring />
  <Blogs />
  <OurFamilies />

  <FAQs />
  <DownloadApp />
</>
  );
}
export default Home;