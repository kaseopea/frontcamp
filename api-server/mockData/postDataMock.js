const Post = require('../src/posts/postSchema');

module.exports = [
    new Post({
        title: 'What Is Gulp?',
        body: `
        What is Gulp? One description is that Gulp is a task runner. Another would be that it’s a toolkit for automating time-consuming tasks. Whatever you want to call it, there’s one characteristic that remains true: automation. Let’s dig a little deeper...
        
        Basically, you use Gulp to automate stuff that you would normally have to do manually, such as manually compiling Sass, manually optimizing images, manually refreshing your page in the browser, and so on. Well, these three actions can be consolidated into independent tasks. Then you would take those tasks and have Gulp run them automatically. That's why tools like Gulp and Grunt are called task runners.
        `,
        author: 'Adi Purdila',
        tags: ['gulp', 'javascript']
    }),
    new Post({
        title: 'How to Build an Off-Canvas Menu With CSS and a Touch of JavaScript',
        body: `In this tutorial we’ll go through a simple yet effective method for creating an off-canvas menu with HTML, CSS, and JavaScript. To get an initial idea of what we’ll be building, take a look at the related CodePen demo (check out the larger version for a better experience):
        
        This demo will work well only on desktop browsers. Mobile devices will require a different page layout, but that’s beyond the scope of this tutorial. As usual, we use Babel to compile the ES6 code down to ES5.

The only small issue I encountered while testing it is the text rendering change that happens when the overlay is being animated. Although I tried various approaches proposed in different Stack Overflow threads, I wasn’t able to find a straightforward solution for all operating systems and browsers. So keep in your mind that you might see small font rendering issues as the overlay is being animated.`,
        author: 'George Martsoukos',
        tags: ['navigation', 'javascript', 'html', 'css']
    }),
    new Post({
        title: 'Data Visualization With DataTables.js and Highcharts.js',
        body: `In this tutorial, you’ll learn how to visualize data by taking advantage of the DataTables.js and Highcharts.js JavaScript libraries.
        
        Note: we had to add jQuery to our project because DataTables.js is a jQuery plugin. However, keep in mind that Highcharts.js is a pure JavaScript library, and thus doesn’t require jQuery. The next step is to grab the table data and build the chart. We don’t want all the table data. In fact, if you look back at the finished version of our demo, you’ll notice that the chart only contains data from the first three columns (Country, Population, Density).
        `,
        author: 'George Martsoukos',
        tags: ['data visualization', 'html', 'css', 'javascript', 'jquery']
    }),
    new Post({
        title: 'Learn Something New: Master These Trending Topics for 2018',
        body: 'Want to take advantage of this pivotal moment in the evolution of layout? Rachel Andrew’s new book with A Book Apart, The New CSS Layout, is an excellent introduction to a complex topic. With practical examples, Rachel breaks down every bit of the specification in a way that’s easy to understand.',
        author: 'Joel Bankhead',
        tags: []
    }),
    new Post({
        title: 'How to Get Up and Running With Vue',
        body: 'In the introductory post for this series we spoke a little about how web designers can benefit by using Vue. In this tutorial we’ll learn how to get Vue up and running, whilst answering some initial questions you may have. Note: If you are creating a production app, it is recommended that you use a package controller like yarn to manage all of your dependencies, and deploy to CDN-powered locations. This is particularly important if you want to build Vue into your JavaScript package, for example using something like Webpack. ',
        author: 'Jonathan Cutrell',
        tags: ['vue', 'html', 'javascript']
    })
];
