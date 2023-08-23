import { Outlet } from "react-router-dom"

export let Animation=()=>{
    return(
        <div className="animation">

            <h1>CSS Animation</h1>

            <p>CSS allows animation of HTML elements without using JavaScript or Flash!</p>

            <div className="animated_div">CSS</div>

            <p>In this chapter you will learn about the following properties:</p>

            <li><span>@keyframes</span></li>
            <li><span>animation-name</span></li>
            <li><span>animation-duration</span></li>
            <li><span>animation-delay</span></li>
            <li><span>animation-iteration-count</span></li>
            <li><span>animation-direction</span></li>
            <li><span>animation-timing-function</span></li>
            <li><span>animation-fill-mode</span></li>
            <li><span>animation</span></li>

            <h2>What are CSS Animations?</h2>

            <p>An animation lets an element gradually change from one style to another.</p>

            <p>You can change as many CSS properties you want, as many times as you want.</p>

            <p>To use CSS animation, you must first specify some keyframes for the animation.</p>

            <p>Keyframes hold what styles the element will have at certain times.</p>

            <h2>The @keyframes Rule</h2>

            <p>When you specify CSS styles inside the <span>@keyframes</span> rule, the animation will gradually change from the current style to the new style at certain times.</p>

            <p>To get an animation to work, you must bind the animation to an element.</p>

            <img src={require('../images/keyframes.png')} alt="color animation" />

            <p className="note"><b>Note:</b> The <span>animation-duration</span> property defines how long an animation should take to complete. If the <span>animation-duration</span> property is not specified, no animation will occur, because the default value is 0s (0 seconds). </p>

            <div className="color"></div>

            <h2>Delay an Animation</h2>

            <p>The <span>animation-delay</span> property specifies a delay for the start of an animation.</p>

            <p>The following example has a 2 seconds delay before starting the animation:</p>

            <img src={require('../images/delay.png')} alt="delay animation" />

            <div className="delay"></div>

            <h2>Set How Many Times an Animation Should Run</h2>

            <p>The <span>animation-iteration-count</span> property specifies the number of times an animation should run.</p>

            <p>The following example will run the animation 3 times before it stops:</p>

            <img src={require('../images/run.png')} alt="run animation" />

            <div className="run"></div>

            <h2>Run Animation in Reverse Direction</h2>

            <p>The <span>animation-direction</span> property specifies whether an animation should be played forwards, backwards or in alternate cycles.</p>

            <p>animation-direction</p>

            <li><span>normal</span> - The animation is played as normal (forwards). This is default</li>
            <li><span>reverse</span> - The animation is played in reverse direction (backwards)</li>
            <li><span>alternate</span> - The animation is played forwards first, then backwards</li>
            <li><span>alternate-reverse</span>-reverse - The animation is played backwards first, then forwards</li>

            <p>The following example will run the animation in reverse direction (backwards):</p>

            <img src={require('../images/reverse.png')} alt="reverse" />

            <div className="reverse"></div>

            <p>The following example uses the value "alternate" to make the animation run forwards first, then backwards:</p>

            <img src={require('../images/alternate.png')} alt="alternate" />

            <div className="alternate"></div>

            <p>The following example uses the value "alternate-reverse" to make the animation run backwards first, then forwards:</p>

            <img src={require('../images/alternate-reverse.png')} alt="alternate-reverse" />

            <div className="alternate-reverse"></div>

            <h2>Animation Shorthand Property</h2>

            <p>The example below uses six of the animation properties:</p>

            <img src={require('../images/shorthand.png')} alt="shorthand" />

            <div className="shorthand"></div>

            <p>The same animation effect as above can be achieved by using the shorthand <span>animation</span> property:</p>

            <img src={require('../images/shorthand_used.png')} alt="shorthand_used" />

            <div className="shorthand_used"></div>










            <Outlet/>
        </div>

    )
}