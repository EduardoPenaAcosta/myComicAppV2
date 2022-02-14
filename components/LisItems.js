import React from 'react';
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



const ListItems = ({comics, setComics})  => {
    return(
        <SwipeListView
            data={comics}
            renderItem={(data) => {
                return(
                    <ListView>
                        <>
                        <TodoText>{data.item.title}</TodoText>
                        <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                );
            }}
            renderHiddenItem={() => {

            }}
        />
    );
}

export default ListItems;