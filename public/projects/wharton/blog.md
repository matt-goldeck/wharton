hi this is my portfolio site now

please dont look too hard at the old rambling blog posts

### what is it

it's a blog. more or less.

built with [next.js](https://nextjs.org/) because server side rendering is the future, the app router is hot, and the 'backend' API means i don't have to configure a real backend. plus i like typescript. it's still javascript but it's less gross :/

and [tailwindcss](https://tailwindcss.com/) and also [daisyui](https://daisyui.com/), because styling scares me and i don't like doing it more than i have to.

and its [hosted on vercel](https://vercel.com/) because honestly if you're not hosting your next.js code there you should seek help

### why

i'm having fun working in a more fullstack role and it's nice to build things.

and my [old jekyll blog](https://github.com/matt-goldeck/matt-goldeck.github.io) was ugly and cumbersome.

### is there anything interesting about it?

no

ok fine so i'm managing blog posts as folders, where assets have their own subfolder, the metadata is stored in json, and the content of the post is stored as a plain markdown file. 

the markdown gets parsed and formatted via [react-markdown](https://github.com/remarkjs/react-markdown), pan-fried with [rehype-raw](https://github.com/rehypejs/rehype-raw) to allow for some spicy inline html, then zested gingerly with [remark-gfm](https://github.com/remarkjs/remark-gfm) for that tangy github flavor. 


### etymology

joseph wharton was a businessman. he co-founded what you might call [a moderately successful steel company](https://en.wikipedia.org/wiki/Bethlehem_Steel) and a couple of [irrelevant colleges](https://en.wikipedia.org/wiki/Wharton_School) to educate stable geniuses.

a cool thing you might not know is he was kind of an asshole and hatched a somewhat forgotten land grab scheme that i find amusing.

![](/projects/wharton/assets/scheme.jpeg)

a renowned philadelphia businessman, he began to gobble up disused industrial tracts across the delaware under the guise of expanding his existing farming enterprise. but our boy joey actually low key kind of wanted to turn most of south jersey into a [series of mega reservoirs to pipe drinking water to philly](https://www.inquirer.com/news/water-pinelands-drinking-philadelphia-watershed-pinelands-wharton-20230327.html).

the legislature caught wind and, justifiably, legislated him out of this mortal coil and into the next dimension. the wharton estate was stuck with a series of useless piecemeal forest plots for another 70 years until they could sell it to the state, who bundled it into a [state forest](https://en.wikipedia.org/wiki/Wharton_State_Forest) and packaged it with the new [pinelands national preserve](https://en.wikipedia.org/wiki/Pinelands_National_Reserve).

so i codename this blog's [repo](https://github.com/matt-goldeck/wharton) not after the man, but his folly and the forest it so serendipitously gave us


