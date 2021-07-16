import React from 'react';
import ReactDom from 'react-dom'

// CSS
// one dot '.' for each parent folder
import './index.css'

// function Greeting() {
//     return <h4>Hello world, welcome to Regin's first component</h4>;
// }

function BookList() {
    return <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
</article>

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._SX322_BO1,204,203,200_.jpg' alt='' />

const Title = () => <h1>Pepe the clown</h1>
const Author = () => <h4>Dota player</h4>

ReactDom.render(<BookList/>,document.getElementById('root'));
