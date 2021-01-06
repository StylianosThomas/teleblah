const form = document.querySelector('#new-blog-form');

form.addEventListener('submit', submitPost);

// create
function submitPost(e){
    e.preventDefault();

    const blogData = {
        title: e.target.title.value,
        author: e.target.author.value,
        content: e.target.content.value
        
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/blog', options)
        .then(r => r.json())
        .then(showBlog)
        .then(() => e.target.reset())
        .catch(console.warn)
};

// helpers
function showBlog(blogData){
    console.log(blogData)
};