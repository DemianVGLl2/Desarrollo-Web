import React, {useState} from "react";
import Card from './card';
import contacts from '../data';

function Directory() {
    function mapContacts(cardsToMap) {
        return cardsToMap.map((contact) => (
          <Card name={contact.name} img={contact.picture} phone={contact.phone}/>
        ));
      };
    
      const [filterString, setFilterString] = useState("");
      var filteredContacts = contacts.filter((contact) => { 
        return contact.name.toLowerCase().includes(filterString.toLowerCase()); 
      });
      
      //var result = contacts.reduce((result, { age }) => { return result + age; }, 0);
      //var result = contacts.reduce((result, { name }) => { return result + " - " + name; }, "");
      /*var result = contacts.reduce((result, { name, age }) => { 
        result.concatName += name + ", ";
        result.ageTotal += age;
        return result; 
      }, {concatName: "", ageTotal: 0});*/
      
      /*var findContacts = contacts.find((contact) => {
        return contact.phone.includes("5");
      });
      */
    
      var cards = filteredContacts.length > 0 ? mapContacts(filteredContacts) : mapContacts(contacts);
    
      function filterListener(event) {
        setFilterString(event.target.value);
      };

      return(
        <div>
            <input type='text' placeholder='Search' onChange={filterListener} value={filterString}/>
            {cards}
        </div>
      );
}

export default Directory;