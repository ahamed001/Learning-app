import { Outlet } from "react-router-dom"
import '../style/csscontents.css';


export let Cssintro=()=>{
    return(
        <div className="cssintro">

            <h1>CSS Introduction</h1>

            <p>CSS is the language we use to style a Web page.</p>

            <h2>What is CSS?</h2>

            <li>CSS stands for Cascading Style Sheets</li>

            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>

            <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>

            <li>External stylesheets are stored in CSS files</li>

            <h2>Why Use CSS?</h2>

            <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>

            <img src={require('../images/cssintro.png')} alt="css" />

            <h2>CSS Solved a Big Problem</h2>

            <p>HTML was NEVER intended to contain tags for formatting a web page!</p>

            <p>HTML was created to describe the content of a web page, like:</p>

            <p><span>&lt;h1&gt;</span> This is a heading <span>&lt;/h1&gt;</span></p>

            <p><span>&lt;p&gt;</span>This is a paragraph.<span>&lt;/p&gt;</span></p>

            <p>When tags like <span>&lt;font&gt;</span>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. 
            Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p>

            <p>To solve this problem, the Code Hub created CSS.</p>

            <p>CSS removed the style formatting from the HTML page!</p>

            <p className="note">If you don't know what HTML is, we suggest that you read our <a href='http://localhost:3000/htmlunits/intro'> HTML Tutorial </a></p> 
        
            <h2>CSS Saves a Lot of Work!</h2>

            <p>The style definitions are normally saved in external .css files.</p>

            <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>

            

            <Outlet/>
        </div>

    )
}