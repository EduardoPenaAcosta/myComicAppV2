import React, {useState} from 'react';
import {Text} from 'react-native'


//Components
import Header from './Header';
import Listitems from './LisItems'
import AddModal from './AddModal';
import InputModal from './InputModal';
import ImageModal from './ImageModal';


const Home = () => {

    let numRandom = Math.random() * 1;

    //initial comics
    const initialComics = [{
        title: 'Batman',
        key: String(Math.random()*1)
    }, {
        title: 'Spiderman',
        key: String(Math.random()*1)
    },{
        title: 'Pokemon',
        key: String(Math.random()*1)
    }]


    const [comics, setComics] = useState(initialComics);
    const [comicInputValue, setComicInputValue] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImageVisible,setModalImageVisible] = useState(false);
    const [modalAddVisible, setModalAddVisible] = useState(false);
    

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


    return(
        <>
        <Header />
        <Listitems 
            comics={comics}
            setComics={setComics}
            handleEdit={handleEdit}
            setModalImageVisible={setModalImageVisible}
        />
        <AddModal
         modalAddVisible={modalAddVisible}
         setModalAddVisible={setModalAddVisible}
         comicInputValue={comicInputValue}
         setComicInputValue={setComicInputValue}
         handleAddComic={handleAddComic}
         comics={comics}
         setComicAEditar={setComicAEditar}
         handleEditComic={handleEditComic}
         />
        <InputModal 
            modalVisible={modalVisible}
            setModalVisible={setModalAddVisible}
            comicInputValue={comicInputValue}
            setComicInputValue={setComicInputValue}
            handleAddComic={handleAddComic}
            comics={comics}
            setComicAEditar={setComicAEditar}
            handleEditComic={handleEditComic}
        />

        <ImageModal 
            modalImageVisible = {modalImageVisible}
            setModalImageVisible={setModalImageVisible}
        />
        </>
    );
}

export default Home;