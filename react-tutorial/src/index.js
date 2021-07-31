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
    </section>
}

const Book = () => <article className='book'>
    <img src='https://images-na.ssl-images-amazon.com
    /images/I/51Hj-Lfw+0S._SX322_BO1,204,203,200_.jpg' alt='' />
    <h1>Guide to a Better Life</h1>
    <h4 >Gabe Newel</h4>
</article>


ReactDom.render(<BookList/>,document.getElementById('root'));
