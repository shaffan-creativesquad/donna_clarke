import './App.css';
import "./bootstrap.min.css"
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './screens/NotFound';
import Home from './screens/Home';
import ThankYou from './screens/ThankYou';
import LoginScreen from "./AdminScreens/LoginScreen";
import BlogsScreen from "./AdminScreens/BlogsScreens/BlogsScreen";
import AdminScreen from "./AdminScreens/AdminScreen";
import LocationScreen from './screens/LocationScreens/LocationScreen';
import LocationPages from "./component/LocationPages_/LocationPages"
import HowIGotHereScreen from "./screens/HowIGotHereScreen"
import ServicesScreen from './screens/ServicesScreen';
import HallOfChampionsScreen from './screens/HallOfChampionsScreen';
import SpeakingScreen from './screens/SpeakingScreen';
import EnquireScreen from './screens/EnquireScreen';
import ScrollToTop from './component/ScrollToTop';


function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/foundation" element={<HowIGotHereScreen />} />
        <Route path="/work" element={<ServicesScreen />} />
        <Route path="/hall-of-champions" element={<HallOfChampionsScreen />} />
        <Route path="/speaking" element={<SpeakingScreen />} />
        <Route path="/enquire" element={<EnquireScreen />} />
       
        <Route path="*" element={<NotFound />} />

          <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/blogs" element={<BlogsScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        
        <Route path='/location/:slug' element={<LocationPages />} />
        <Route path='/admin/location-pages' element={<LocationScreen />}/>
      </Routes>
    </div>
  );
}

export default App;


