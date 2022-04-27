import React, { useEffect, useState } from "react";
import List from "./List";
import Item from "./Item";
import './Todo.css'

function Todo() {

    const [text, setText] = useState('')
    const [items, setItems] = useState([])

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem("savedItems"))
        if(savedItems){
            setItems(savedItems)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("savedItems", JSON.stringify(items))
    }, [items])

    function handleChange(event) {
        let t = event.target.value
        setText(t)

    }

    function addItem(event) {
        event.preventDefault()

        if (!text.replace(/\s+/g, '') == "") {

            let item = new Item(text)
            item.id = items.length + Math.random() * 1000;

            setItems([...items, item])
            setText('')
        }
    }

    function onItemDeleted(item){
        
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems)

    }

    function onDone(item){
        let updatedItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done
            }
            return it
        })

        setItems(updatedItems)
    }

    return (
        <div className="container">
            <h1>Todo-List</h1>
            <form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button className="add" onClick={addItem} type="submit">Add</button>
            </form>

        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            
        </div>
    )
}



export default Todo