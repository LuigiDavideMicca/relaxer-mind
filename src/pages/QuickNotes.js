import React from 'react';

import QuickNoteHeader from '../components/Note/QuickNoteHeader';

class QuickNotes extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         newItem: '',
         list: [],
      };
   }

   componentDidMount() {
      this.hydrateStateWithLocalStorage();

      // add event listener to save state to localStorage
      // when user leaves/refreshes the page
      window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
   }

   componentWillUnmount() {
      window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));

      // saves if component has a chance to unmount
      this.saveStateToLocalStorage();
   }

   hydrateStateWithLocalStorage() {
      // for all items in state
      for (let key in this.state) {
         // if the key exists in localStorage
         if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);

            // parse the localStorage string and setState
            try {
               value = JSON.parse(value);
               this.setState({ [key]: value });
            } catch (e) {
               // handle empty string
               this.setState({ [key]: value });
            }
         }
      }
   }

   saveStateToLocalStorage() {
      // for every item in React state
      for (let key in this.state) {
         // save to localStorage
         localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
   }

   updateInput(key, value) {
      // update react state
      this.setState({ [key]: value });
   }

   addItem() {
      // create a new item with unique id
      const newItem = {
         id: 1 + Math.random(),
         value: this.state.newItem.slice(),
         day: new Date().getDate(),
         month: new Date().getMonth() + 1,
         year: new Date().getFullYear(),
      };

      // copy current list of items
      const list = [...this.state.list];

      // add the new item to the list
      list.push(newItem);

      // update state with new list, reset the new item input
      this.setState({
         list,
         newItem: '',
      });
   }

   deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);

      this.setState({ list: updatedList });
   }

   render() {
      return (
         <div>
            <QuickNoteHeader />
            <br />
            <br />
            <div className='ui form'>
               <div
                  className='field'
                  style={{
                     padding: 50,
                     textAlign: 'left',
                     maxWidth: 500,
                     margin: 'auto',
                  }}>
                  <h2 className='ui centered align header'>Aggiungi una nuova Quick Note</h2>
                  <br />
                  <br />
                  <br />
                  <input
                     type='text'
                     placeholder='Aggiungi la tua nota'
                     value={this.state.newItem}
                     onChange={e => this.updateInput('newItem', e.target.value)}
                  />
                  <br />
                  <br />
                  <br />
                  <button
                     className='ui button fluid blue'
                     onClick={() => this.addItem()}
                     disabled={!this.state.newItem.length}>
                     AGGIUNGI NOTA
                  </button>
                  <br /> <br />
               </div>
            </div>
            <br /> <br />
            <br /> <br />
            <div className='ui cards card-p'>
               {this.state.list.map(item => {
                  return (
                     <div className={`card ${this.state.completed}`} key={item.id}>
                        <div className='content'>
                           <div className='header'>Quick - Note: ID {item.id.toFixed(2)}</div>
                           <br />
                           <div className='meta'>
                              Data: {item.day}/{item.month}/{item.year}
                           </div>
                           <br />
                           <div className='description'>
                              <h4>{item.value}</h4>
                           </div>
                        </div>
                        <br />
                        <div className='extra content'>
                           <div className='ui two buttons'>
                              <div
                                 onClick={() => this.deleteItem(item.id)}
                                 className='ui basic red button'>
                                 ELIMINA
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default QuickNotes;
