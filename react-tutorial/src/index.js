import React from 'react';
import ReactDom from 'react-dom'

// CSS
// one dot '.' for each parent folder
import './index.css'

// setup variables
const firstBook = {
    img:'https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._SX322_BO1,204,203,200_.jpg',
    title: 'Guide to a Better Life',
    author: 'Gabe Newel'
};

const secondBook = {
    img:'https://images-na.ssl-images-amazon.com/images/I/41ItBEAc3kS._SX327_BO1,204,203,200_.jpg',
    title: 'Nr1 President evur',
    author: 'Some Redneck'
};

function BookList() {
    return ( 
        <section className='booklist'>
            <Book
                img={firstBook.img} 
                title={firstBook.title} 
                author={firstBook.author} 
            >
                <p>Veniam duis officia do sit. Ipsum deserunt ea anim qui id. Non sint laboris fugiat mollit officia amet enim elit labore aliquip nostrud sint. Tempor elit ea voluptate velit aute aute Lorem.</p>
            </Book>
            
            <Book 
                img={secondBook.img} 
                title={secondBook.title} 
                author={secondBook.author} 
            ></Book>
        </section>
    );
}


const Book = (props) => {
    console.log(props);
    return (
    <article className='book'>
        <img src={props.img} alt='' />
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
        {props.children}
    </article>
    );
};
ReactDom.render(<BookList/>,document.getElementById('root'));
