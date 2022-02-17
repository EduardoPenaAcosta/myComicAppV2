import React, {useState } from 'react';
import {SwipeListView} from "react-native-swipe-list-view";

// styled Components
import {
    ListView,
    ListViewHidden, 
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors
} from '../styles/appStyles'

//import icons from expo
import { Entypo } from '@expo/vector-icons';


const ListItems = ({comics, setComics, handleEdit})  => {

    //Styling swiped
    const [swipedRow, setSwipedRow] = useState(null);

    const handleDelete = (rowMap, rowKey) => {
        const newComics = [...comics];
        const comicIndex = comics.findIndex((comic) => comic.key === rowKey);
        newComics.splice(comicIndex,1);
        setComics(newComics)

    }

    return(
        <SwipeListView
            data={comics}
            renderItem={(data) => {
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                return(
                    <ListView 
                        underlayColor={colors.primary}
                    >
                        <>
                        <RowText>{data.item.title}</RowText>
                        <RowText>{data.item.date}</RowText>
                        </>
                    </ListView>
                );
            }}
            renderHiddenItem={(data,rowMap) => {
                return(
                    <ListViewHidden>
                        <HiddenButton
                            onPress={() => handleDelete(rowMap, data.item.key) }
                        >
                            <Entypo name="trash" size={25} color={colors.secondary} />
                        </HiddenButton>
                        <HiddenButton>
                            <Entypo name="edit" size={25} color={colors.secondary} 
                                    onPress={() => handleEdit(data.item) }
                            />
                        </HiddenButton>
                </ListViewHidden>
                )
                
            }}
            leftOpenValue={80}
            previewRowKey={1}
            previewOpenValue={80}
            previewOpenDelay={3000}
            showsVerticalScrollIndicator={false}
            disableLeftSwipe={true}
            style={{
                flex:1,
                paddingBottom: 30,
                marginBottom: 40, 
            }}
            onRowOpen={( (rowKey) => {
                setSwipedRow(rowKey);
            })}
            onRowClose={() => {
                setSwipedRow(null);
            }}
        />
    );
}

export default ListItems;