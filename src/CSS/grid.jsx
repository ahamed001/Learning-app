import { Outlet } from "react-router-dom"

export let Grid=()=>{
    return(
        <div className="grid">

            <h1>CSS Grid Container</h1>

            <div class="grid-container1">
                <div class="grid-item item1"><h1>1</h1></div>
                <div class="grid-item item2"><h1>2</h1></div>
                <div class="grid-item item3"><h1>3</h1></div>  
                <div class="grid-item item4"><h1>4</h1></div>
                <div class="grid-item item5"><h1>5</h1></div>
                <div class="grid-item item6"><h1>6</h1></div>  
                <div class="grid-item item7"><h1>7</h1></div>
                <div class="grid-item item8"><h1>8</h1></div>
            </div>

            <h2>Grid Container</h2>

            <p>To make an HTML element behave as a grid container, you have to set the <span>display</span> property to <span>grid</span> or <span>inline-grid</span>.</p>

            <p>Grid containers consist of grid items, placed inside columns and rows.</p>

            <h2>The grid-template-columns Property</h2>

            <p>The <span>grid-template-columns</span> property defines the number of columns in your grid layout, and it can define the width of each column.</p>

            <p>The value is a space-separated-list, where each value defines the width of the respective column.</p>

            <p>If you want your grid layout to contain 4 columns, specify the width of the 4 columns, or "auto" if all columns should have the same width.</p>

           

            <p className="note"><b>Note:</b> If you have more than 4 items in a 4 columns grid, the grid will automatically add a new row to put the items in.</p>

            <p>The <span>grid-template-columns</span> property can also be used to specify the size (width) of the columns.</p>

            

            <h2>The grid-template-rows Property</h2>

            <p>The <span>grid-template-rows</span> property defines the height of each row.</p>

            <div class="grid-container2">
                <div>1</div>
                <div>2</div>
                <div>3</div>    
                <div>4</div>
                <div>5</div>
                <div>6</div>  
            </div>

            <p>The value is a space-separated-list, where each value defines the height of the respective row:</p>

            

            <h2>The justify-content Property</h2>

            <p>The <span>justify-content</span> property is used to align the whole grid inside the container.</p>

            
            <div class="grid-container3">
                <div>1</div>
                <div>2</div>
                <div>3</div>  
                <div>4</div>
                <div>5</div>
                <div>6</div>  
            </div>


            <p className="note"><b>Note:</b> The grid's total width has to be less than the container's width for the <span>justify-content</span> property to have any effect.</p>

            <h2>The align-content Property</h2>

            <p>The <span>align-content</span> property is used to vertically align the whole grid inside the container.</p>

            
            <div class="grid-container4">
                <div>1</div>
                <div>2</div>
                <div>3</div>  
                <div>4</div>
                <div>5</div>
                <div>6</div>  
            </div>


            <p className="note"><b>Note:</b> The grid's total height has to be less than the container's height for the <span>align-content</span> property to have any effect.</p>







            <Outlet/>
        </div>

    )
}