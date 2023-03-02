import React, { useState, createContext } from 'react';
export const List = createContext();

export const Generator = ({children}) => {

    const [myList, setMyList] = useState([]);

    const toggle = (game) => {
        let index = myList.indexOf(game);
        if(myList.includes(game)){
            myList.splice(index,1);
            setMyList([...myList]);
            game.onList = false;
        } else {
            myList.push(game);
            setMyList([...myList]);
            game.onList = true;
        }
    }

    return (
        <List.Provider value={{myList, setMyList, toggle}}>
            {children}
        </List.Provider>
    )
}
//I recycled this block of code from the netflix exercise