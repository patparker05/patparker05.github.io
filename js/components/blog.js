/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function blog() {
    var content = `
        <h2>Web Design Experience</h2>
         <p>
            Coming into this class I had no web design experience. I was familiar with a few 
            html concepts, but had never done anything with css, javascript or libraries such 
            as jQuery. As far as other programming, I have done c#, java, python and sql.
         </p>
        <h2>Database Design</h2>
         <p>
            For my database there will be two main tables. The first table holds user data. That includes
            name, age, sex, email, phone number, etc.. The second table will hold course data. The 
            course data includes name, location, rating, total yardage, etc.. 
        </p>
        <h2>Homework Blogs</h2>
        <h3>Homework #1 (Home Page)</h3>
        <p>
            The first homework that was assigned was fairly easy for me to complete. The 
            easiest part to me was setting up the html page. There really wasn’t much to it and 
            didn’t take me much time. The hardest part about it was positioning the different 
            elements using css, especially the nav bar. I eventually went back to the tutorial 
            videos and saw I had missed one property that fixed the problem.
        </p>
        <h3>Homework #2 (UI Dropdown)</h3>
        <p>
            The second assigned homework was far more difficult than the first. Having to learn 
            javascript without prior knowledge was what gave me the most problems. Javascript 
            has many different methods with similar functions, but they work in different ways. 
            This resulted in a lot of googling to find out what the correct function for each method 
            was.
        </p>   
        <h3>Homework #3 (OO JS)</h3>
        <p>
            The third homework took a while to complete. Creating an object is easy, but the hard
             part is figuring out how to represent a js object on an html page. The hardest part was trying
             get the image file to properly format into the object divs. When you have three working parts
             (CSS, Javascript, HTML) that all need to work perfectly for one web page it can be discouraging
             when you have no idea what is wrong with your code. If someone could make  an ide that debugs
             Javascript, HTML and CSS at the same time, they would make a lot of money. And save web
             designers a lot of time. I realize that the chrome dev tools have a debug feature, but it is confusing
             at times and forces you to create extra testing variables if you want to see the value of something.
        </p>
        <h3>Homework #4 (Advanced JS)</h3>
        <p>
            This homework was challenging, but felt rewarding once I completed it. I found that getting the 
            SlideShows compoent to work outside of the index.html page was the most difficult part. I found
            that I had to create a new div inside the SlideShows function and append the slideshows to that
            div before returning it. I found the ajax and json to be easy as most of the work was explained in
            the tutorials on the professor's website.
        </p>
        <h3>Homework #5 (Click Sortable Table)</h3>
        <p>
            I found this homework to be one of the easier assingments of the year. When we first started
            discussing the concepts of this assignment, I was a bit intimidated. However, after completing
            the lab, the material became more clear to me. A reason for this could be that the lab and 
            homework are too similar. This could be good or bad depending on how you look at it.
        <p>
        `;

    var ele = document.createElement('div');
    ele.innerHTML = content;
    return ele;
}