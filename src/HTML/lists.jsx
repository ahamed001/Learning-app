import { Outlet } from 'react-router-dom'

export let Lists=()=>{
    const quizhtml = () => {
        window.location.href="http://localhost:3000/htmlunits/quizhtml"; 
      };
    return(
        <div className="lists">
            <h1>HTML Lists</h1>
            <p>HTML lists allow web developers to group a set of related items in lists.</p>
        
        <p>An unordered HTML list:</p>
            <ul> 
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>

        <p>An ordered HTML list:</p>
            <ol>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ol>

            <h1>Unordered HTML List</h1>

            <p>An unordered list starts with the <span>&lt;ul&gt;</span> tag. Each list item starts with the <span>&lt;li&gt;</span> tag.</p>

            <p>The list items will be marked with bullets (small black circles) by default:</p>

            <img src={require('../images/ul.png')} alt="Ul" />

            
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>

            <h1>Ordered HTML List</h1>

            <p>An ordered list starts with the <span>&lt;ol&gt;</span> tag. Each list item starts with the <span>&lt;li&gt;</span> tag.</p>

            <p>The list items will be marked with numbers by default:</p>

            <img src={require('../images/ol.png')} alt="Ol" />

            <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>

            <h1>HTML Description Lists</h1>

            <p>HTML also supports description lists.</p>

            <p>A description list is a list of terms, with a description of each term.</p>

            <p>The <span>&lt;dl&gt;</span> tag defines the description list, the <span>&lt;dt&gt;</span> 
            tag defines the term (name), and the <span>&lt;dd&gt;</span> tag describes each term:</p>

            <img src={require('../images/dl.png')} alt="Dl" />

            
            <dl>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
            </dl> 

            <button onClick={quizhtml}>Take Quiz</button>


        <Outlet/>

        </div>
    )
}