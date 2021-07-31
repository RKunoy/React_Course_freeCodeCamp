import React from 'react';
import ReactDom from 'react-dom'

// CSS
// one dot '.' for each parent folder
import './index.css'

// setup list
const books = [
    {
        id: 1,
        img:'https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._SX322_BO1,204,203,200_.jpg',
        title: 'Guide to a Better Life',
        author: 'Joseph Stalin'
    },
    {
        id: 2,
        img:'https://images-na.ssl-images-amazon.com/images/I/41ItBEAc3kS._SX327_BO1,204,203,200_.jpg',
        title: 'Nr1 President evur',
        author: 'Some Redneck'
    },
    {
        id: 3,
        img:'https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._SX377_BO1,204,203,200_.jpg',
        title: 'Shortcut to Depression',
        author: 'USA'
    }
];



function BookList() {
    return ( 
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book 
                        key={book.id}
                        {...book}   // 'spread syntax' passes all elements of the object
                    >
                    </Book>
                )
            })}
        </section>
    );
}


const Book = ({img, title, author}) => {
    // attribute, eventHandler
    // onClick, onMouseOver

    // Alerts 'Hello World!' and displays info in console
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello World!');
    }
    // Prints author name in console
    const mouseOver = (author) => {
        console.log(author);
    }
    return (
    <article className='book' onMouseOver={()=> {
        console.log(title);
    }}>
        <img src={img} alt='' />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        
        <button type="button" onClick={clickHandler}>
            Onclick Example
        </button>
        
        <button type="button" onClick={() => mouseOver(author)}>More Complex Example</button>
    </article>
    );
};
ReactDom.render(<BookList/>,document.getElementById('root'));
