##ParticleMesh DevFolio
New Portfolio using JS Canvas 

#Description
- This is a simple Website made to showcase my Front-End skill as Developer.
- I used 'canvas' here to create a particle effect when mousemove over the main home Screen.
- Only HTML, CSS, and Javascript is used.
- Problems faced while building :
  - particle effect was not working in specific areas.
  - canvas element only shown when it is used as a first child element inside body and cover all other elements.
  - contact form goes out of screen for android devices.
  - my social profile links at the left of the screen overlap with the center element in small screen(adnroid size). 
- How i solved the above problems :
  - I used z-index property to send it backwards and keep other element  in front of it.
  - I had to change the structure of my html a little so canvas element loads.
  - The parent container has "overflow:hidden" property for the windows screen size and for android screen i had to change this property to "overflow:auto". To make scroll if element tries to go outside the container.
  - my social link container were not a part of my center element text. Which is why they keep overlapping with them when i reduced the screen size.
- Features i would like to implement in the future:
  - make a login system in this site(for me only), so, that in work section i don't have to manually add other future work but rather upload it after logging in(simple editing system for logged in used).
  - i will make it more interactive, for now the user can only change the particle number by pressing the button. So i will add some new feature where user can also increase size of particle, length of line commecting them and some minor changes.
  
#Here is the referral link from youtube tutorial where i learned how to make particle mesh system like i used.

**[Youtube Tutorial for particle system](https://youtu.be/Yvz_axxWG4Y)**
