import React from 'react'

function Slideshow() {
    return (
        <>
            <div className="mySlides w3-display-container w3-center">
                <img src="http://www.w3schools.com/w3images/la.jpg" style={{ width: "100%" }} />
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>Los Angeles</h3>
                    <p>
                        <b>We had the best time playing at Venice Beach!</b>
                    </p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src="http://www.w3schools.com/w3images/ny.jpg" style={{ width: "100%" }} />
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>New York</h3>
                    <p>
                        <b>The atmosphere in New York is lorem ipsum.</b>
                    </p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img src="http://www.w3schools.com/w3images/chicago.jpg" style={{ width: "100%" }} />
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>Chicago</h3>
                    <p>
                        <b>Thank you, Chicago - A night we won't forget.</b>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Slideshow