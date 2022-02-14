import React, {useState} from 'react';
import {Text} from 'react-native'


//Components
import Header from './Header';
import Listitems from './LisItems'


const Home = () => {

    //initial comics
    const initialComics = [{
        title: 'Get some snaks',
        date: " Fri, 08 Jan 2022",
        key: "1"
    }, {
        title: 'Get some comics',
        date: " Fri, 08 Jan 2022",
        key: "2"
    },{
        title: 'do it ',
        date: " Fri, 08 Jan 2022",
        key: "3"
    }]


    const [comics, setComics] = useState(initialComics);
   
    return(
        <>
        <Header />
        <Listitems 
            comics={comics}
            setComics={setComics}
        />
        </>
    );
}

export default Home;