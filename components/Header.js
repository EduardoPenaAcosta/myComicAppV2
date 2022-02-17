import React from 'react';


// styled components
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from '../styles/appStyles'

import { Entypo } from '@expo/vector-icons';

const Header = () => {
    return(
        <HeaderView>
            <HeaderTitle>ComicListApp</HeaderTitle>
        </HeaderView>
    );
}

export default Header;