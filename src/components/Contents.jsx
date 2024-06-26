import React, { useEffect, useState } from 'react';

const Contents = ({ searchQuery, category }) => {
    const [articles, setArticles] = useState([]);

    const api = async(query) => {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=d652dacd517c44a5ab09212873623a60`;
        let response = await fetch(url);
        let result = await response.json();
        setArticles(result.articles);
    }

    useEffect(() => {
        if (searchQuery) {
            api(searchQuery);
        } else if (category) {
            api(category);
        }
    }, [searchQuery, category]);

    return (
        <div className="flex flex-col gap-[25px] p-[10px] m-auto">
            <div className="grid gap-2 lg:grid-cols-4 pt-10">
                {articles.map((article, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm px-10 pt-10 border border-red-200" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={article.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                {article.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                                {article.content}
                            </p>
                            <a href={article.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contents;
