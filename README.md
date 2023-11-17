How to complete this assignment
Part 1
Your FAQ should fulfill the following basic requirements:

Click a section title to expand its description.
Click the title again to collapse the description.
This assignment is a little different than previous assignments. For this one, we've given you some code, but you need to connect the dots and make it work. In the code folder, you'll find an HTML file, a CSS file, and a JavaScript file. You will need to complete the following tasks in order to fulfill the requirements set out above:

Link to the JavaScript file from the HTML, so that the JavaScript gets run.
Use CSS to hide the ".description" divs.
The JavaScript file is set up to add toggle an ".active" class on the ".title" divs when you click the title (use the inspector to see this in action). Use an "adjacent" CSS selector to select the panel next to an ".active" element and set it to display: block; to make it visible. Read this to learn about the adjacent selector.
Once you have one section showing and hiding, you need to update the JavaScript to call the toggle function for section2 and section3.
Part 2
Your FAQ should now be filled with data that you download from: https://jsonplaceholder.typicode.com/posts.

Use fetch to download the data.
Use forEach or a for-loop to iterate through the data and create a div with a section class for each title property and a div with a description class for each body property.
Make sure that each title is showing and hiding the description div when clicked.
Setup repo in Github
Create a Github repo.
Upload your files to Github:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Address to your repo>
git push -u origin main
Hand in the assignment
Click the link in canvas and input the link to your repo repo.