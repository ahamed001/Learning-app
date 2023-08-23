import { Outlet } from "react-router-dom"

export let Flex=()=>{
    return(
        <div className="flex">

            <h1>CSS Flex</h1>

            <h2>Child Elements (Items)</h2>

            <p>The direct child elements of a flex container automatically becomes flexible (flex) items.</p>

            <img src={require('../images/child.png')} alt="flex" />

            <div className="flex-container1">
                <div>1</div>
                <div>2</div>
                <div>3</div> 
                <div>4</div>
            </div>

            <p>The flex item properties are:</p>

            <li><span>order</span></li>
            <li><span>flex-grow</span></li>
            <li><span>flex-shrink</span></li>
            <li><span>flex-basis</span></li>
            <li><span>flex</span></li>
            <li><span>align-self</span></li>

            <h2>The order Property</h2>

            <p>The <span>order</span> property specifies the order of the flex items.</p>

            <p>The first flex item in the code does not have to appear as the first item in the layout.</p>

            <p>The order value must be a number, default value is 0.</p>

            <img src={require('../images/order.png')} alt="order" />

            <div className="flex-container2">
                <div style={{order: "3"}}>1</div>
                <div style={{order: "2"}}>2</div>
                <div style={{order: "4"}}>3</div>
                <div style={{order: "1"}}>4</div>
            </div>

            <h2>The flex-grow Property</h2>

            <p>The <span>flex-grow</span> property specifies how much a flex item will grow relative to the rest of the flex items.</p>

            <p>The value must be a number, default value is 0.</p>

            <img src={require('../images/grow.png')} alt="grow" />

            <div className="flex-container3">
                <div style={{flexGrow: "1"}}>1</div>
                <div style={{flexGrow: "1"}}>2</div>
                <div style={{flexGrow: "8"}}>3</div>
                
            </div>

            <h2>The flex-shrink Property</h2>

            <p>The <span>flex-shrink</span> property specifies how much a flex item will shrink relative to the rest of the flex items.</p>

            <p>The value must be a number, default value is 1.</p>

            <img src={require('../images/shrink.png')} alt="shrink" />

            <div class="flex-container4">
                <div>1</div>
                <div>2</div>
                <div style={{flexShrink: "0"}}>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
            </div>

            <h2>The flex-basis Property</h2>

            <p>The <span>flex-basis</span> property specifies the initial length of a flex item.</p>

            <img src={require('../images/basis.png')} alt="basis" />

            <div class="flex-container5">
                <div>1</div>
                <div>2</div>
                <div style={{flexBasis:"200px"}}>3</div>
                <div>4</div>
            </div>

            <h2>The flex Property</h2>

            <p>The <span>flex</span> property is a shorthand property for the <span>flex-grow</span>, <span>flex-shrink</span>, and <span>flex-basis</span> properties.</p>

            <h2>The align-self Property</h2>

            <p>The <span>align-self</span> property specifies the alignment for the selected item inside the flexible container.</p>

            <p>The <span>align-self</span> property overrides the default alignment set by the container's <span>align-items</span> property.</p>

            <img src={require('../images/align.png')} alt="align" />

            <div class="flex-container6">
                <div>1</div>
                <div>2</div>
                <div style={{alignSelf: "center"}}>3</div>
                <div>4</div>
            </div>


            <Outlet/>
        </div>

    )
}