## Saber Sheep: An Evolutionary Journey

Saber Sheep is a basic JavaScript game that I programmed in highschool.  It follows basic Mendelian Genetics as you try to selectively breed your sheep to survive against oncoming disasters.  It can be played [here](https://studio.code.org/projects/applab/NYK9xbAL8M4be54wG3g5_Ddav618HSqOj4JsEwYKREg/view). 


# Usage

Playing is really easy.  Just click the link and click 'Play' on the bottom left hand corner.  For each round, you can see the oncoming disaster listed up top- and you have to guess what change you would like to make to your breeding stock.  Then, the disaster plays and eliminates some of your sheep.  It will tell you more about what sheep did well and what sheep did not. If you survive all seven round, you win.  More instructions can be read by clicking 'Directions' on the bottom right hand corner of the home screen.

# Concepts Learned

Saber Sheep was my first full project. 
* I used functions to denote the different types of disasters, and to control all the variables in the sheeps.  
* I also made sure to delete the elements that were no longer in use, like the lost sheep.  
* To make sure each disaster only comes once, they are placed in a random combination in the beginning.  
* Basic debugging was something I really had to learn to make the game, because there were so many moving parts.  If sheep were not appearing on the board, I had to diagnose if they were dying early or if the elements were just not showing properly.  The game required a methoidcal focus to fix up.  
* I also learned how to balance the game. I played many times to try and create a game that was winnable, but not too easy.  I tweaked the number of sheep, the death ratios, and the preferred alleles to make it winnable regardless of the order of the natural disasters.  

# What I would change

* When I was in highschool I had no idea that classes and structs existed. Now, I would put the sheep in an array of sheep objects so that I could iterate through them with ease.  
* I would go back to my original design, where the sheperd's choice to encourage certain alleles would result in particular sheep having certain breeding patterns.  
    - Using dynamic allocation, I could actively add sheep babies over the course of the game.  They would then grow up over a couple natural disasters.  
* There are some really bad variable names in this code. 
    - Many elements have names like "continueButton"
    - I  would like to reiterate that I made this in highschool and that it does not match my current clean code standards.
* There are almost no comments.  
    - I fell into that pit of, "Why would I comment? I know what everything means?".  I can still understand it, even years later, but placing comments and meaningful variable names would have been a big help.

When I look at this code, I can see how far I've come.  It was a passion project in highscool and fully reflected the best of my abilities. It has since become deprecated, as I have grown beyond it.  I have considered updating it but that plan is at least on pause until Summer 2021 when I will have more personal time.

# Contributing
Feel free to fork it or copy it for anything personal.  I am not allowing outside changes on the original, though.

# License
[Feel free to adapt and to share, but give attribution.](https://creativecommons.org/licenses/by-nc/4.0/)
