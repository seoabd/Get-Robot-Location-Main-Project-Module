
We're upgrading our robots! They can now convert motion commands into signals and move accordingly:

'forward' translates to y + 1.
'back' to y - 1.
'right' to x + 1.
'left' to x - 1.
But it would be great if the robot could track its location without GPS. So, let's create the getLocation function that accepts two parameters:

coordinates — an array of initial coordinates in the [x, y] format.
commands — an array with a history of commands like ['command1', 'command2', 'command3', ...].
The function should return an array of final coordinates ([x, y]) after moving according per commands.

Examples:
For coordinates = [2, 1] and commands = ['left', 'back', 'back']:

Coordinates after the first command are: [1, 1] (1 step left).
After the second command — [1, 0] (1 step back).
After the third command — [1, -1] (1 step back).
The result is the [1, -1] array.*/
