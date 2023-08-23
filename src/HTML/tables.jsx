import { Outlet } from 'react-router-dom'

export let Tables=()=>{
    return(
        <div className="tables">
        <h1>HTML Tables</h1>

        <p>HTML tables allow web developers to arrange data into rows and columns.</p>
        
        <h2>Define an HTML Table</h2>

        <p>A table in HTML consists of table cells inside rows and columns.</p>

        <img src={require('../images/tables.png')} alt="Tables" />

        <h2>Table Cells</h2>

        <p>Each table cell is defined by a <span>&lt;td&gt;</span> and a <span>&lt;/td&gt;</span> tag.</p>

        <p className='note'><span>td</span> stands for table data.</p>

        <p>Everything between <span>&lt;td&gt;</span> and <span>&lt;/td&gt;</span> are the content of the table cell.</p>

        <img src={require('../images/tablecell.png')} alt="Table cell" />

        <p className='note'><b>Note:</b> A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.</p>
        
        <h2>Table Rows</h2>

        <p>Each table row starts with a <span>&lt;tr&gt;</span> and ends with a <span>&lt;/tr&gt;</span> tag.</p>

        <p className='note'><span>tr</span> stands for table row.</p>

        <img src={require('../images/tablerow.png')} alt="Table row" />

        <p>You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.</p>

        <p className='note'><b>Note:</b> There are times when a row can have less or more cells than another. You will learn about that in a later chapter.</p>

        <h2>Table Headers</h2>

        <p>Sometimes you want your cells to be table header cells. In those cases use the <span>&lt;th&gt;</span> tag instead of the <span>&lt;td&gt;</span> tag:</p>

        <p className='note'><span>th</span> stands for table header.</p>

        <img src={require('../images/tablehead.png')} alt="Table head" />

        <p>By default, the text in <span>&lt;th&gt;</span> elements are bold and centered, but you can change that with CSS.</p>

        

        <Outlet/>

        </div>


    )
}