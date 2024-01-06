import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ParallaxSlides from './components/ParallaxSlides';
import ImageLeftSection from './components/ImageLeftSection';
import ImageRightSection from './components/ImageRightSection';
import ProfileSection from './components/ProfileSection';
import { SECTION_DATA } from './constants';
//Main app code
function App() {
  return (
    <>
      <div className='main-bg'>
        <Header/>
        <Hero/>
      </div>
      <ParallaxSlides/>
      <div className='gap'></div>
      {SECTION_DATA.map((item) => 
      (
        item.left ?
        <ImageLeftSection key={item.title} title={item.title} paragraph={item.paragraph} imageSrc={item.imgSrc} />
        :
        <ImageRightSection key={item.title} title={item.title} paragraph={item.paragraph} imageSrc={item.imgSrc} />
      )
      )}
      <ProfileSection/>
    </>
  );
}

export default App;
