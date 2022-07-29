import React, {useState} from 'react'
import "./components/App/App.css"
import FilterInput from './components/filtter/FilterInput'
import Modal from './components/modal/Modal'
import Button from './components/Layout/Button'
import AddUser from './components/AddUser/AddUser'
import CardList from './components/cardList/CardLIst'


const App = () => {

    // localStorage.setItem('ola', 'taha')
    // const inputEl  = useRef(null)

    // const testHandler = () => {
    //     console.log(inputEl.current.value);
    // }
    // const onClick = () => {
    //     inputEl.current.focus();

    // }
    

    const [cardToggle, setCardToggle] = useState(true)

    const [filter, setFilter] = useState("")

    const [showModal , setShoeModal] = useState(false)

    const showHandel = () => {
        setShoeModal(!showModal)
    }
    const addNewUser = (data) => {
        setState((prevState) => (setState([...prevState, data])))
    }

    const [state, setState] = useState([
        
        {
            id: 1000,
            name: "taha",
            age: 20,
            address: "baniSwif",
            phone: "01116788581",
            type: "boy"
    },
    {
        id: 2000,
        name: "hiba",
        age: 20,
        address: "baniSwif",
        phone: "01116726726",
        type: "girl"
},

    ]);


    const deleteHandler = (e, selectedID) => {
        // const deleteOberation = state.filter((el, idx) => idx !== clickedIdx);
        // setState(deleteOberation);
        setState((prevState) => {
          return prevState.filter((el) => el.id !== selectedID);
        });
      };

    const toggleHandel = () => {
        // console.log("clicked");
        setCardToggle(!cardToggle)
    }

    const filterName = (name) => {
        setFilter(name)
    }

    const namesHandler = () => {
        if(filter.length !== 0){
            return state.filter((el) => el.name.includes(filter))
        }
        return state
        
    }
    // console.log(state[0].type)

        
        return (
            
      <div className='mainContainer'>
        <Modal show = {showModal} closeModal = {() => setShoeModal(false)}>
            <AddUser addNewUser = {addNewUser} showHandel = {showHandel} />
        </Modal>
        <h1>List of data</h1>
        <div style={{display: "flex"}}>

            <Button
            onClick ={toggleHandel}
            style={{margin: " 0px 10px 20px 0px"}}
            >
            {cardToggle ? "Show Names" : "Hide Names"}
            </Button>

            <Button
            style={{margin: " 0px 10px 20px 0px"}}
            onClick = {showHandel}
            >
            New Record
            </Button>



        </div>
        <div>

            <FilterInput filteration = {filterName}/>

        </div>
        <div className= {cardToggle ? "show" : "hide"}>
        <CardList namesList = {namesHandler()} type = "boy" deleteFunc = {deleteHandler}/></div>
        </div>
  )
}


export default App;