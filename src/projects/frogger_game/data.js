module.exports = {
    "id": "frogger_game",
    "name": "Frogger Game",
    "primary": "program",
    "secondary": true,
    "imageCount": 4,
    "designText": "<p>A clone of the Konami classic Frogger in HTML5, created for the Fall 2016 class of CIS 580 at Kansas State University.</p> <h1>Design Requirements</h1> <ul> <li>The game should involve an animated player sprite with at least five frames of animation.</li> <li>Movement for the player should proceed in fixed increments, i.e. 'hopping', rather than 'walking'. Pushing the forward button should start a hop, which is then interpolated over several frames before a landing. </li> <li>Multiple obstacles appear in the game, and move vertically.</li> <li>A background appropriate to the game should have clear cues to where obstacles will appear (i.e. cars appear on a road, logs in a river).</li> <li>Some obstacles, i.e. cars, kill the player sprite when collided with.</li> <li>Other obstacles (i.e. logs, which keep the frog protagonist from drowning), are necessary to collide with.</li> </ul> <h1>Style Choices</h1> <ul> <li>Frog and car sprites are provided by an open source location.</li> <li>Background and logs were made by myself using Illustrator.</li> <li>UI is drawn on using Javascript.</li> </ul> <br><p>***Credits on github repo***</p><a href=/external/frogger><div id='play-button'> Play the Game! </div></a><a href='https://github.com/CjoewD/JavaScript-Frogger-Game' target='_blank'><div id='play-button'> View GitHub Repo </div></a>",
    "codingText": "<p>A clone of the Konami classic Frogger in HTML5, created for the Fall 2016 class of CIS 580 at Kansas State University.</p> <h1>Requirements</h1> <p> You will be building a clone of Frogger, where the purpose is to move the player from the left side of the screen to the right, while avoiding obstacles traveling vertically between. <ul> <li>The game should involve an animated player sprite with at least five frames of animation.</li> <li>Movement for the player should proceed in fixed increments, i.e. 'hopping', rather than 'walking'. Pushing the forward button should start a hop, which is then interpolated over several frames before a landing. While hopping, the player cannot change the action their sprite is taking.</li> <li>Multiple obstacles appear in the game, and move vertically. Obstacles are implemented as classes in their own modules.</li> <li>A background appropriate to the game is provided, with clear cues to where obstacles will appear (i.e. cars appear on a road, logs in a river).</li> <li>Some obstacles, i.e. cars, kill the player sprite when collided with.</li> <li>Other obstacles (i.e. logs, which keep the frog protagonist from drowning), are necessary to collide with.</li> <li>The player begins with three lives. Dying restarts the player at the beginning with one less life.</li> <li>The player's score and level is displayed on the game screen in some fashion - either through the drawText() method or via an HTML element overlayed on the game screen.</li> <li>Instructions on how to play the game appear in some easily-accessible fashion, i.e. on the page, or over the game screen accessed with the esc key.</li> <li>Reaching the far side of the screen awards the player with points, advances the level, and restarts the player at the initial point with the obstacles moving faster.</li> </ul> <h1>Optional Requirements</h1> <ul> <li>Adding an obstacle that has two or more states that can be helpful or harmful, i.e. an alligator whose head can be rode upon, but eats you when its mouth is open. </li> </ul> <br><p>***Credits on github repo***</p><a href=/external/frogger><div id='play-button'> Play the Game! </div></a> <a href='https://github.com/CjoewD/JavaScript-Frogger-Game' target='_blank'><div id='play-button'> View GitHub Repo </div></a>"
}
