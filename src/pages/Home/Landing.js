import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 ">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className='text-xl'>Best Quality</p>
                        <h1 data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" class="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="700" data-aos-delay="800" class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh]'>
                        <img className='h-full shrink-0' src="https://api.lorem.space/image/movie?w=260&h=400" />

                    </div>

                </div>
            </div>
            <div className=' rounded-lg mx-auto mt-[-50px] relative bg-base-200 z-50 shadow-lg p-10 w-5/6'>
                <h2 className='text-2xl mb-5 text-primary'>Get Free Extimate</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;