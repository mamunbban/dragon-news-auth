
import Header from '../components/Header';
import RightNav from '../components/layout-component/RightNav';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className=' col-span-9 font-semibold'>
                    <div className="card bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={news?.image_url}
                            
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{news?.title}</h2>
                        <p>{news?.details}</p>
                        <div className="card-actions">
                            <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
                        </div>
                    </div>
                </div></section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;