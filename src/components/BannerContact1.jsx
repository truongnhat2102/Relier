import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/db'
import '../assets/styles/components/BannerContact1.css'

const BannerContact1 = () => {
    return (

        <div className='container'>
            <section className="bg-light">
                <div className="container py-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="contact-header col-lg-4">
                            <h1 className="h2 pb-3 text-primary">Contact</h1>
                            <h3 className="h4 regular-400">Elit, sed do eiusmod tempor</h3>
                            <p className="light-300">
                                Vector illustration is from <Link className='my_link' rel="nofollow" href="https://storyset.com/" target="_blank">StorySet</Link>.
                                Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                        </div>
                        <div className="contact-img col-lg-5 align-items-end col-md-4">
                            <img src={assets.banner_contact_1} />
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h1 className="col-12 col-xl-8 h2 text-left text-primary pt-3">Create success campaign with us!</h1>
                <h2 className="col-12 col-xl-8 h4 text-left regular-400">Elit, sed do eiusmod tempor </h2>
                <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
                    Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate.
                </p>
            </div>

        </div>
    )

}

export default BannerContact1;

