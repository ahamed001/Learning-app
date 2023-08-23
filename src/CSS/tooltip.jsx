import { Outlet } from "react-router-dom"

export let Tooltip=()=>{
    const quizcss = () => {
        window.location.href="http://localhost:3000/cssunits/quizcss"; 
      };
    return(
        <div className="tooltip">

            <h1>Tooltip</h1>

            <h2>Demo: Tooltip Examples</h2>

            <p>A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element:</p>
            
            <div className="tooltipex">
            <div className="tooltip1">Top
                <span className="tooltiptext">Tooltip text</span>
            </div>
            
            <div className="tooltip2">Bottom
                <span className="tooltiptext">Tooltip text</span>
            </div>

            <div className="tooltip3">Right
                <span className="tooltiptext">Tooltip text</span>
            </div>

            
            <div className="tooltip4">Left
                <span className="tooltiptext">Tooltip text</span>
            </div>
            </div>

            <h2>Tooltip Arrows</h2>

            <p>To create an arrow that should appear from a specific side of the tooltip, add "empty" content after tooltip, 
                with the pseudo-element class <span>::after</span> together with the <span>content</span> property. The arrow 
                itself is created using borders. This will make the tooltip look like a speech bubble.</p>

            <p>This example demonstrates how to add an arrow to the bottom of the tooltip:</p>

            <img src={require('../images/bottom.png')} alt="bottom" /> <br/>
            
            <div className="tooltip1">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div> <br/>

            <img src={require('../images/top.png')} alt="top" /> <br/>

            <div className="tooltip2">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div> <br/>

            <img src={require('../images/left.png')} alt="left" /> <br/>

            <div className="tooltip3">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div> <br/>

            <img src={require('../images/right.png')} alt="right" /> <br/>
            
            <div className="tooltip4">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div>

            <h2>Fade In Tooltips (Animation)</h2>


            <p>If you want to fade in the tooltip text when it is about to be visible, you can use the CSS <span>transition</span> property 
                together with the <span>opacity</span> property, and go from being completely invisible to 100% visible, in a number of specified 
                seconds (1 second in our example):
            </p> 
<div>
                 <img src={require('../images/fade.png')} alt="fade" /> </div>
            
            <div className="tooltip5">Hover over me
                <span className="tooltiptext">Tooltip text</span>
            </div>


            <div>
                <button onClick={quizcss}>Take Quiz</button>
            </div>





            <Outlet/>
        </div>

    )
}