import Collector from './common/Collector';
import User from '../data/User/Users.json';
import Link from 'next/link';

var TopCollector = User.slice(0,9);

const TopCollectors = () => {

    return (
        <div>
            <section className="seller-section pb-100">
        <div className="container">
            <div className="section-header">
                <h3 className="header-title">Top Collectors</h3>
                <div className="header-content">
                    <ul className="filter-group d-flex flex-wrap align-items-center">
                        
                        <li className="li day-filter">
                            <div className="select-wrapper arrow-orange" data-icon="&#xea99;">
                                <select className="form-select" aria-label="Day select">
                                    
                                    <option value="1">All Time</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-wrapper">
                <div className="seller-wrapper">
                    <div className="row g-3">
                        {
                            TopCollector.map((item,i=1) =>(
                                <Collector key={item.id} data={item} count={i} />
                                
                            ))
                        }
                        
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/allauthors">
                        <a className="default-btn move-right"><span>Go To Rank</span></a>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default TopCollectors;