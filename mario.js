
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

// declaration of a function that creates a mario pyramid via side effects.
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // create a loop to iterates through each row.
    for (rows = 0; rows < height; rows++) {

        // create a string to represent a line.
        var line = '';

        // determine how many spaces go on that line.
        spaces = (height - 1) - rows;

        // save the spaces to the variable.
        for (s = spaces; s > 0; s--) {
            line += ' ';
        }

        // determine how many hashes go on a line.
        hashes = (height + 1) - spaces;

        // save the hashes.
        for (h = 0; h < hashes; h++) {
            line += '#';
        }

        // write the line.
        console.log(line + '\n')
    }
}
