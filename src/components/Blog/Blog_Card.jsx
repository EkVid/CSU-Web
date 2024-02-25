const Blog_Card = ({ blogdata }) => {
  const { posts: Posts } = blogdata;

  return (
    <div>
      {Posts.map((monthData, index) => (
        <div key={index}>
          <h2>{monthData.month}</h2>
          <h3 id="names">{monthData.topic_of_the_month}</h3>
          <br/>
          {monthData.articles.map((article, articleIndex) => (
            <article key={articleIndex}>
              <p>{article.contents}</p>
              <p id="date">{article.date}</p>
              <p id="author">By <span>{article.author}</span></p>
              {article.year && <p id="date">Year of Study: {article.year}</p>}
              {article.program && <p id="date">Programs of Study: {article.program}</p>}
              {/* using date id for the style purpose */}
              <br/>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Blog_Card;
