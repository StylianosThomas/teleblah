DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs (
    id serial PRIMARY KEY,
    title varchar(40) NOT NULL,
    author varchar(20) NOT NULL,
    content varchar NOT NULL
);

INSERT INTO blogs (title, author, content) 
VALUES
    ('My life''s Story', 'Stelios', 'I was born, I lived and then I died. The end!' ),
    ('Tasty Potato', 'potatoLover69', 'Today I found the most beautiful potato in all of the world!. I went immediately home and cooked it. Then I ate it. It was delicious! 12/10 would eat again.' );