// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
    const element = e.target;
    element.classList.toggle("active");
  }
  
  // Selects and HTML element, and calls a function which will be executed when the element is clicked.
  const section1Element = document.getElementById("section1");
  section1Element.addEventListener("click", toggle);

  const section2Element = document.getElementById("section2");
  section2Element.addEventListener("click", toggle);

  const section3Element = document.getElementById("section3");
  section3Element.addEventListener("click", toggle);

  
function toggleDescription(event) {
    const clickedTitle = event.target;
    const description = clickedTitle.nextElementSibling;
  
    clickedTitle.classList.toggle('active');
    description.classList.toggle('active');
  }
  
  function createFAQSection(title, body) {
    const accordion = document.querySelector('.accordion');
  
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = title;
  
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = body;
  
    accordion.appendChild(titleElement);
    accordion.appendChild(descriptionElement);
  
    titleElement.addEventListener('click', toggleDescription);
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        createFAQSection(post.title, post.body);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  