import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from "./pages/About";

const AppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   position: relative;
   background-color: #393D3F;
`;

function App() {
   return (
      <AppWrapper className="App" id="App">
         <Header />
         <Router>
            <Routes>
               <Route path="/" element={<About/>} />
            </Routes>
         </Router>
      </AppWrapper>
   );
}

export default App;
