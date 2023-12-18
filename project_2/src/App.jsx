import Navigation from './components/Navigation/Navigation';
import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';
export default function App() {
  return (
      <div>
        <Navigation />
        <div className="main-container">
        <ContactHeader />
        <ContactForm />
        </div>
      </div>
  );
}