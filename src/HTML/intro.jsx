import React from "react";
import { Outlet } from "react-router-dom";

import '../style/htmlcontents.css';


let Intro=()=>{
    return(
        <div className="intro">
        <h1> HTML Introduction </h1>
        <p> HTML is the standard markup language for creating Web pages. </p>
        <h2> What is HTML? </h2>
        <li> HTML stands for Hyper Text Markup Language </li>
        <li> HTML is the standard markup language for creating Web pages </li>
        <li> HTML describes the structure of a Web page </li>
        <li> HTML consists of a series of elements </li>
        <li> HTML elements tell the browser how to display the content </li>
        <li> HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc. </li>

        <h2> Example Explained </h2>
        <li> The <span>&lt;!DOCTYPE html&gt;</span> declaration defines that this document is an HTML5 document </li>
        <li> The <span>&lt;html&gt;</span> element is the root element of an HTML page </li>
        <li> The <span>&lt;head&gt;</span> element contains meta information about the HTML page </li>
        <li> The <span>&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab) </li>
        <li> The <span>&lt;body&gt;</span> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. </li>
        <li> The <span>&lt;h1&gt;</span> element defines a large heading </li>
        <li> The <span>&lt;p&gt;</span> element defines a paragraph </li>

        <h2> What is an HTML Element? </h2>
        <p> An HTML element is defined by a start tag, some content, and an end tag: </p>
        <h3> <span> &lt;tagname&gt; </span> Content goes here... <span> &lt;/tagname&gt; </span> </h3>
        <p> The HTML <b>element</b> is everything from the start tag to the end tag: </p>
        <h3> &lt;h1&gt; My First Heading &lt;/h1&gt; </h3>
        <h4> &lt;p&gt; My first paragraph. &lt;/p&gt; </h4>

        <p className="note"> <b>Note:</b> Some HTML elements have no content (like the <span> &lt;br&gt; </span> element). These elements are called empty elements. Empty elements do not have an end tag! </p>

        <h2> Web Browsers </h2>
        <p> The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly. </p>
        <p> A browser does not display the HTML tags, but uses them to determine how to display the document:  </p>
        <img src={require('../images/heading.png')} alt="web browser" />
        <p className="note"><b>Note:</b> The content inside the <span> &lt;body&gt; </span> section will be displayed in a browser. The content inside the <span> &lt;title&gt; </span> element will be shown in the browser's title bar or in the page's tab.</p>

        <Outlet/>
        
        </div>
    )
}

export default Intro;