import React from "react";
import Card from "./Card";
import ListItem from "./ListItem";


function List(props) {
    return (
        <div>
            <ul>
                {props.items.map(item => <ListItem  key={item.id} onDone={props.onDone} onItemDeleted={props.onItemDeleted} item={item}></ListItem>)}
            </ul>
        </div>
    )

}

export default List