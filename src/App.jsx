import { Outlet } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      <Navbar />
      <main className='my-4'>
        <Outlet /> {/* This will render the matched child routes */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
