import React from 'react';
import ReactDom from 'react-dom'

// CSS
// one dot '.' for each parent folder
import './index.css'

// setup variables
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
                        {...book}
                    >
                    </Book>
                )
            })}
        </section>
    );
}


const Book = ({img, title, author}) => {
    return (
    <article className='book'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
    );
};
ReactDom.render(<BookList/>,document.getElementById('root'));
