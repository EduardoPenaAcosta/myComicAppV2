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
        key: Math.random() *1
    }, {
        title: 'Spiderman',
        key: Math.random() *1
    },{
        title: 'Pokemon',
        key: Math.random() *1
    }]


    const [comics, setComics] = useState(initialComics);
    const [comicInputValue, setComicInputValue] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("Añadir comic")

    // function to add a new comic to the
    const handleAddComic = (comic) => {
        const newComics = [...comics, comic];
        setComics(newComics);
        setModalVisible(false);
    }

    const [comicAEditar, setComicAEditar] = useState(null);

    const handleEdit = (item) => {
        setComicAEditar(item);
        setModalVisible(true);
        setComicInputValue(item.title);
    }

    const handleEditComic = (editedComic) => {
        const newComics = [...comics];
        const comicIndex = comics.findIndex((comic) => comic.key === editedComic.key);
        newComics.splice(comicIndex, 1, editedComic);
        setComics(newComics);
        setComicAEditar(null);
        setModalVisible(false);
    }

    const handleTitle = (isTrue) =>{
        if(isTrue){
            setTitle("Editar comic");
        }else{
            setTitle("Añadir comic")
        }
        
    }



   
    return(
        <>
        <Header />
        <Listitems 
            comics={comics}
            setComics={setComics}
            handleEdit={handleEdit}
            handleTitle={handleTitle}
        />
        <InputModal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            comicInputValue={comicInputValue}
            setComicInputValue={setComicInputValue}
            handleAddComic={handleAddComic}
            comics={comics}
            setComicAEditar={setComicAEditar}
            handleEditComic={handleEditComic}
            title={title}
            handleTitle={handleTitle}
        />
        </>
    );
}

export default Home;