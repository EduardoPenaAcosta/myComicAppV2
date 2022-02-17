import React, {useState} from 'react';
import {Text} from 'react-native'


//Components
import Header from './Header';
import Listitems from './LisItems'
import InputModal from './InputModal';


const Home = () => {

    //initial comics
    const initialComics = [{
        title: 'Batman',
        date: " Fri, 08 Jan 2022",
        key: "1"
    }, {
        title: 'Spiderman',
        date: " Fri, 08 Jan 2022",
        key: "2"
    },{
        title: 'Pokemon',
        date: " Fri, 08 Jan 2022",
        key: "3"
    }]


    const [comics, setComics] = useState(initialComics);
    const [todoInputValue, setTodoInputValue] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    // function to add a new comic to the
    const handleAddTodo = (comic) => {
        const newComics = [...comics, comic];
        setComics(newComics);
        setModalVisible(false);
    }

    const [comicAEditar, setComicAEditar] = useState(null);

    const handleEdit = (item) => {
        setComicAEditar(item);
        setModalVisible(true);
        setTodoInputValue(item.title);
    }

    const handleEditComic = (editedComic) => {
        const newComics = [...comics];
        const comicIndex = comics.findIndex((comic) => comic.key === editedComic.key);
        newComics.splice(comicIndex, 1, editedComic);
        setComics(newComics);
        setComicAEditar(null);
        setModalVisible(false);
    }


   
    return(
        <>
        <Header />
        <Listitems 
            comics={comics}
            setComics={setComics}
            handleEdit={handleEdit}
        />
        <InputModal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            comics={comics}
            setComicAEditar={setComicAEditar}
            handleEditComic={handleEditComic}
        />
        </>
    );
}

export default Home;