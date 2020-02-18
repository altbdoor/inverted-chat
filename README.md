# InvertedChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.


### What is this

A y-axis-flipped chat, so that the latest messages always appear at the bottom, instead of the top. A typical overflowed element will always focus to the top, even though new DOM elements are being appended in. The only real way to handle this is via JavaScript, with events and a suitable "scroll to bottom" code.


### How is it achieved

We flip the whole overflowed box vertically with `transform: scaleY(-1)`, and do the same to each individual messages. The messages get double flipped, and will appear correct to the user.

We can also try to use `transform: rotate(180deg)` on the overflowed box as well, but do note that the scrollbar will appear at the left then. This could still be fixed via `direction: rtl`, but we will need to override it again with `direction: ltr` in the messages.


### What are the drawbacks

Either via `rotate(180deg)` or `scaleY(-1)`, because the overflowed box is essentially flipped, the scroll behavior is the complete opposite! And unfortunately, there is no CSS to reverse the scroll direction or something.

We might be able to flip the scrollbar again, via `::webkit-scrollbar`, but non-Webkit browsers will be left out, and to provide a unified look, the final solution is still JavaScript.


### Why do this

Just curious, after a colleague asked if reversing the order of messages could solve the "scroll to bottom" problem.


### References

- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
- https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar
- https://css-tricks.com/how-to-create-a-horizontally-scrolling-site/
- https://css-tricks.com/pure-css-horizontal-scrolling/
