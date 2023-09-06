import Link from "next/link";

const News = ({ data }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="nft-item blog-item">
        <div className="nft-inner">
          <div className="nft-thumb">
            <a>
              <img src={`${data.image}`} alt="blog-img" />
            </a>
          </div>
          <div className="nft-content">
            <div className="author-details">
              <h4>
                <a>
                  <a>{`${data.title}`}</a>
                </a>
              </h4>
              <div className="meta-info"></div>
              <a href={`${data.link}`} target="blank" >
                <a className="default-btn move-right small-btn">
                  <span>SHOP NOW</span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
