const db = require ('../db/config')
const SQL = require("sql-template-strings");

class Blog {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.content = data.content;
    }

    static create(title, author, content) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogData = await db.run(SQL`INSERT INTO blogs (title, author, content) VALUES (${title}, ${author}, ${content}) RETURNING *;`);
                let newBlog = new Blog(blogData.rows[0]);
                resolve (newBlog);
            } catch (error) {
                reject('Error creating new blog')
            }
        });
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let blogData = await db.run(SQL`SELECT * FROM blogs WHERE id = ${id};`);
                let blog = new Blog(blogData.rows[0]);
                resolve (blog);
            } catch (error) {
                reject('Blog not found');
            }
        });
    }
}

module.exports = Blog;