import Accueil from './Accueil';
import Header from './Header';
import Footer from './Footer';
import TableauxPage from './TableauxPage';
import Graphes from './Graphes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   
    <div>
      <Header/>
       <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/graphes_prix_aliments" element={<Graphes />} />
          <Route path="/tableau_prix_aliments" element={<TableauxPage />} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
