import { Outlet } from 'react-router-dom'


export let Forms=()=>{
    return(
        <div className="forms">
            <h1> HTML Forms </h1>
            <p> An HTML form is used to collect user input. The user input is most often sent to a server for processing. </p>

            <h2> The &lt;form&gt; Element </h2>

            <p> The HTML <span> &lt;form&gt; </span> element is used to create an HTML form for user input: </p>

            <img src={require('../images/forms.png')} alt="forms" />

            <p> The <span> &lt;form&gt; </span> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc. </p>

            <h2> The &lt;label&gt; Element </h2>

            <p> Notice the use of the <span>&lt;label&gt;</span> element in the example above. </p>

            <p> The <span>&lt;label&gt;</span> tag defines a label for many form elements. </p>

            <p> The <span>&lt;label&gt;</span> element is useful for screen-reader users, because the 
            screen-reader will read out loud the label when the user focuses on the input element. </p>

            <p> The <span>&lt;label&gt;</span> element also helps users who have difficulty clicking on very 
            small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the 
            <span>&lt;label&gt;</span> element, it toggles the radio button/checkbox. </p>

            <p> The <span>for</span> attribute of the <span>&lt;label&gt;</span> tag should be equal to the <span>id</span> attribute of the <span>&lt;input&gt;</span> element to bind them together. </p>

            <h2> Radio Buttons </h2>

            <p> The <span>&lt;input type="radio"&gt;</span> defines a radio button. </p>

            <p> Radio buttons let a user select ONE of a limited number of choices. </p>

            <img src={require('../images/radiobtn.png')} alt="radio button" />

            <p> This is how the HTML code above will be displayed in a browser: </p>

            <p> Choose your favorite Web language: </p>


            
        <form className='formop'>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">HTML</label><br/>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css">CSS</label><br/>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label for="javascript">JavaScript</label>
        </form>

        <h2>Checkboxes</h2>
        <p>The <span>&lt;input type="checkbox"&gt;</span> defines a <b>checkbox</b>.</p>

        <p>Checkboxes let a user select ZERO or MORE options of a limited number of choices.</p>

        <img src={require('../images/checkbox.png')} alt="checkbox" />
        
        <p>This is how the HTML code above will be displayed in a browser:</p>

        
        <form className='formop'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label>
        </form>


        <h2>Submit Button</h2>

        <p>The <span>&lt;input type="submit"&gt;</span> defines a button for submitting the form data to a form-handler.</p>

        <p>The form-handler is typically a file on the server with a script for processing input data.</p>

        <p>The form-handler is specified in the form's <span>action</span> attribute.</p>

        <img src={require('../images/submitbtn.png')} alt="submit button" />

        
        <form className='formop'>
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" value="John"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>

        
        <Outlet/>
        </div>
    )
}