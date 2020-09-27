# webcam-gifmaker

=======
 webcam-gifmakeris a trivially simple JQuery "Slot Machine ". Its only dependencies are jQuery , jQuery Easing library and Gifshot. It can be allowed to run randomly or to go to a pre-specified .


Understanding the Code
----------------------
The code starts with the pattern as storing "this" in a private variable "that". It then sets member variables with a mix of values from the options map and hard-wired defaults.

The init function is defined but only called once the other member functions are set. It creates the appropriate number of window/reels.

The CSS suggest the structure slots generates:

    .ezslots>.window>.slider>.symbol>.content

* ezslots - a class assigned to the containing div
* window - refers one of the reel-viewing windows
* slider - this is the part that actually moves.
* symbol - container for a single symbol that will show up in the window
* content - where the symbol actually "lives" (needed for horizontal and vertical centering)

Heights and width are manually and redundantly applied to ensure consistency with the animation.

Also, each reel window is given the class "window_#" where # is its position in the ezslots div.

i had used json data from an api to fetch the winner details and had shown that in a modal with some blink effects.
