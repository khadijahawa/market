import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Autoplay]);

const Collection = ({item}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="nft-item collection-item">
                <div className="nft-inner">
                    <div className="coll-thumb-wrapper">
                        <div className="nft-coll-thumb ">
                            <div>
                            <Swiper
                            spaceBetween={10}
                            slidesPerView={3}
                            autoplay={true}
                            className="thumb-list swiper-wrapper"
                            >
                            {
                                item.products.map((product) => (
                                    <SwiperSlide key={product.id}>
                                        <div className="single-thumb"><img
                                                src={`${product.image}`}
                                                alt="cat-image" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>      
                            </div>
                        </div>
                    </div>
                    <div className="nft-content">
                        <div className="collection-title">
                            <h5>
                                <a>{`${item.title}`}</a>
                            </h5>
                            <p>Collection has {`${item.items}`} items</p>
                        </div>
                        <div className="meta-info"></div>
              <Link href={`${item.link}`}>
                <a className="default-btn move-left small-btn">
                  <span>MINT</span>
                </a>
              </Link>
              <spacer></spacer>
              <Link href={`${item.idd}`}>
                <a className="default-btn move-right small-btn">
                  <span> Check on Opensea</span>
                </a>
              </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;