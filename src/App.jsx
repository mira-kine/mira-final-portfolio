import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from './views/Home/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from './views/About/About';
import Projects from './views/Projects/Projects';
import ScrollTriggerProxy from './components/ScrollTrigger/ScrollTriggerProxy';

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        {/* <Switch> */}
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For example, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          {/* <Route exact path="/"> */}
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Projects />
            </main>
          </AnimatePresence>
          {/* </Route> */}
        </LocomotiveScrollProvider>
        {/* </Switch> */}
      </ThemeProvider>
    </>
  );
}

// add locomotive scroll afterwards
export default App;

// commenting to launch staged demo
