import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CartProvider from "../Context/CartContext";

const AppLayout = () => {
  //state variable
  // const [count, setCount] = useState(0);
  //useEffect
  // useEffect(()=>{
  //   document.title = count
  //   setCount(count+1)
  // },[count]
  // )

  //---To get Header footer in common  (<Outlet />)
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default AppLayout;
