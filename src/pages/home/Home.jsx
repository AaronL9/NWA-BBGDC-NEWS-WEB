import "./Home.css";
import { useEffect } from "react";
import { useState } from "react";
import algoliasearch from "algoliasearch";

// Pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Components
import NewsCard from "../../components/NewsCard";
import Spinner from "../../components/spinner/Spinner.jsx";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_KEY
);
const mainIndex = searchClient.initIndex("news");

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageNum, setPageNum] = useState(0);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const { hits, nbHits } = await mainIndex.search("", {
          page: page - 1,
          hitsPerPage: 12,
        });
        setPageNum(Math.ceil(nbHits / 10));
        setNews(hits);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [page]);

  if (loading) {
    return (
      <div className="loader-overlay">
        <Spinner />
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="no-news-placeholder">
        Currently, there are no news articles available. Stay tuned for updates!
        Thank you for your understanding.
      </div>
    );
  }

  return (
    <div className="news-root">
      <div className="news-container">
        {news.map((data) => (
          <NewsCard key={data.objectID} {...data} />
        ))}
      </div>
      <div className="news-pagination">
        <Stack spacing={2}>
          <Pagination count={pageNum} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  );
}
