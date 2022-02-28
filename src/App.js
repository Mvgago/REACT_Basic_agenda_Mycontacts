import Contact from './components/Contact/Contact';
import contacts from "./contacts";



function App() {
  return (
    <div className="App">
      <h1>My contacts</h1>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgSrc}
            tlf={contact.phone}
            email={contact.email}
          />
        );
      }
      )}
    </div>
  )
  
  }

export default App;
