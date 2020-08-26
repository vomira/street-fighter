Streetfighter Logic
components
1. playing field (arena) --> 2d grid on which players can move
--> background image
2. players (2 default players)
 --> starting coordinates
 --> stats: name, health, strength, stamina
 --> actions: move(l,r,up,duck), kick, punch, block, 1 special attack (combo of 3 keys);

3. actions
3.1 move l,r --> incrementing x-coordinates on keystroke
3.2 jump --> implementation as in jump & run
3.3 duck --> change img and player coordinates on y axis
3.4 block --> change img and disable damage received through enemy attacks (add attribute "blocked"?)
3.5 punch --> change img, check distance to other player, if yes, substract dmg equal to strength of char, substract from stamina
3.6 kick --> same as punch
OPTIONAL: 
3.7. special attacks --> if certain key combo is pressed, special img and double damage/other special effect

4. stamina refill
--> each move takes certain amount of stamina, stamina is refilled with time

5. game over
if 1 char has health <= 0, change img to defeated and display game over screen with the winner


screens
1. welcome screen: display players with name, picture, strength, stamina and controls for them
OPTIONAL: choose your player
--> start button

2. fight screen
--> countdown, lock movements in this time

3. game over screen
--> replay button


CONTROLS

Player 1
jump: W
left: A
right: D
duck: S

kick: F
punch: G
block: T

Player 2
jump: Up Arrow
left: Left Arrow
right: Right Arrow
duck: Down Arrow

kick: K
punch: L
block: I


Assets:
http://arcade.photonstorm.com/


To Do

- constantly loose stamina on block
- Animations!
- special attacks
- winner screen
- background music


