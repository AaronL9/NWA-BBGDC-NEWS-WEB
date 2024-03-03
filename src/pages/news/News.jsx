import "./News.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatNewsDate } from "../../util/StringFormatter";
import { useErrorBoundary } from "react-error-boundary";

// Compnents
import ImageLoader from "../../components/loader/image_loader/ImageLoader";
import Spinner from "../../components/spinner/Spinner";

export default function News() {
  const { id } = useParams();
  const { showBoundary } = useErrorBoundary();

  const [newsData, setNewsData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    let dataVar = [];
    async function getNews() {
      try {
        const response = await fetch(
          `https://${import.meta.env.VITE_NWA_API}/api/public/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ docId: id }),
          }
        );

        const json = await response.json();

        if (!response.ok) throw new Error(json.error);

        console.log(json);
        dataVar = json;
      } catch (error) {
        showBoundary(error.message);
      } finally {
        setNewsData(dataVar);
      }
    }
    getNews();
  }, [id, showBoundary]);

  return (
    <div className="news-view">
      {!newsData ? (
        <div className="loader-overlay">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="news-view__header">
            <h2>{newsData?.title}</h2>
            <h3>{formatNewsDate(newsData.createdAt, newsData.updatedAt)}</h3>
            {imageLoading && <ImageLoader />}
            <img
              src={newsData?.imageUrl}
              alt="news image"
              onLoad={() => setImageLoading(false)}
            />
          </div>
          <div
            className="news-view__body"
            dangerouslySetInnerHTML={{ __html: newsData?.body }}
          ></div>
        </>
      )}
    </div>
  );
}
