import Banner from "../components/Banner/Banner"
import HeroSection from "../components/HeroSection/HeroSection"
import RestaurantLayout from "../components/RestaurantLayout/RestaurantLayout"
import Comments from "../components/Comments/Comments"

//To get home page with additional components along with header and footer
const Home = () => {
    return (
      <>
        <Banner />
        <HeroSection />
        <RestaurantLayout />
        <Comments />
      </>
    ) 
}
  
export default Home;