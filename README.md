# dumbGallery
_Some jQuery that makes galleries using the default WordPress configuration. Just upload 15 images to any post or page and watch it go.<br/>
by <a href='https://plus.google.com/104536213394512642005?rel=author'>Chris Walker</a><br/>
(http://www.youtube.com/watch?v=Th6mGAwvQYU)<br/>

This is a jQuery gallery that I built for a client to display images on his webpage. (It was a rework of two similar image galleries. It seems that making bullet lists are too difficult.) It works well with WordPress. If the post or page has more than 15 images on it, the jQuery kicks in and builds the gallery. It is required that the images be in a paragraph, but this is the default for Wordpress. The jQuery in the plugin will then find the images and build a bunch of little boxes for the individual images. It also builds one large box to show the first image. As the small boxes are clicked, the images contained within them display in the large box. The titles of the images are transferred to the small boxes.

##How does this thing work?
The directions to use this plugin are pretty straight forward. This isn't a polished product. I'll admit it isn't great, but it works and that's all that matters. These are the bullet points to remember.

1. These images need to use the IMG tag. (What else is there?)
2. These images need to be in a paragraph.
3. This will find the images if they are in multiple paragraphs.
4. Having them in hyperlinks is optional.
5. There need to be a minimum of 15 images on the page.
6. Only one gallery per page will be built.
7. The gallery is placed after the last photo's parent item.
8. I built it this way, because that's the way WordPress embeds images by default.
9. Also, the script will find the title of each image and make that the title of the little boxes.
10. Finally, the script will hide the images. I did this because the little boxes can not have their image stolen by right clicking and pulling up the context menu. (You can still get it from the CSS, though.)

##License
Copyright (c) 2013 Chris Walker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.