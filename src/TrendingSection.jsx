import img1 from './assets/pexels-chuck-3587477.jpg'
import { FaRegPlayCircle } from 'react-icons/fa';

const TrendingSection = () => {
    return (
        <div>
            <h1 className='text-3xl m-20'>Trending Topics</h1>
            <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-4'>

                <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
                    <figure className="md:w-1/2">
                        <img
                            src={img1}
                            alt="Movie"
                            className="w-full h-96"
                        />
                    </figure>
                    <div className="card-body md:w-1/2">
                        <h2 className='text-lg font-semibold'>Laugh Therapy</h2>
                        <h2 className="card-title text-xl text-white">Mental health awareness and self-care practices</h2>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="card-actions items-center">
                            <FaRegPlayCircle className='btn btn-sm rounded-full w-full' />

                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
                    <figure className="md:w-1/2">
                        <img
                            src={img1}
                            alt="Movie"
                            className="w-full h-96"
                        />
                    </figure>
                    <div className="card-body md:w-1/2">
                        <h2 className='text-lg font-semibold'>Laugh Therapy</h2>
                        <h2 className="card-title text-xl text-white">Mental health awareness and self-care practices</h2>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="card-actions items-center">
                            <FaRegPlayCircle className='btn btn-sm rounded-full w-full' />

                        </div>
                    </div>
                </div>




            </section>
        </div>
    );
};

export default TrendingSection;