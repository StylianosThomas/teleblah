const form = document.querySelector('#new-blog-form');

form.addEventListener('submit', submitPost);

// create
function submitPost(e){
    e.preventDefault();

    const blogData = {
        name: e.target.name.value,
        title: e.target.title.value,
        content: e.target.content.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(blogData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/blog', options)
        .then(r => r.json())
        .then(appendBlog)
        .then(() => e.target.reset())
        .catch(console.warn)
};


// helpers
function appendBlog(data){
    data.blog.forEach(appendBlog);
};