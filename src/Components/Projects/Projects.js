import './Projects.css'

const Projects = () => {
    return(
        <div>
        <div className='row1'>
                <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>Spotify Profile</p>
                    <p className='projdesc'>A MERN stack web application created with React and Node.js to visualize a user's Spotify data! A user can view their top artists & top tracks as well as create new playlists.  </p>
                    <div className='icons'>
                       <p> Coming soon... </p>
                   {/* <p> ↦ View Code</p>
                   <p>↦  Live Site</p> */}
                    </div>
                </div>

                <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>Memories </p>
                    <p className='projdesc'>A full-stack social media application created with React and Node.js that allows user's to create an account, login, upload posts and leave comments!</p>
                    <div className='icons'>
                   {/* <p> ↦ View Code</p>
                   <p>↦  Live Site</p> */}
                     <p> Coming soon... </p>
                    </div>
                </div>
                <div className='project1'>
                    <img src='https://live.staticflickr.com/65535/51996677100_37403be4b4_b.jpg'></img>
                    <p className='projtitle'>Hair Salon Website</p>
                    <p className='projdesc'>A freelance project for a local hair stylist in Dallas, Texas that allows  her clients to book her services, review her testimonals and see her past work.</p>
                    <div className='icons'>
                   <a href="https://github.com/troydomio/prolific-shop" target="_blank"><p>↦ View Code</p></a>
                   <a href="https://www.prolificshopllc.com/" target="_blank"><p>↦ Live Site</p></a>
                   <a href="https://www.behance.net/gallery/140185397/Prolific-Shop-Case-Study" target="_blank"><p>↦ Case Study</p></a>
                    </div>
                </div>
                
        </div>
        <div className='row2'>
            <div className='project1'>
                    <img src='https://live.staticflickr.com/65535/51996651395_44b474a6eb_b.jpg'></img>
                    <p className='projtitle'>Spoiled Case Study</p>
                    <p className='projdesc'>A case study on a web application that aims to combat excessive food waste in the Unitied States by providing a reference to user's on the shelf-life of their groceries.</p>
                    <div className='icons'>
                   <a href="https://www.behance.net/gallery/135409745/Spoiled-Stop-Food-Waste-Case-Study" target="_blank"><p>↦ Case Study</p></a>
                    </div>
                   
                </div>
                <div className='project1'>
                    <img src='https://live.staticflickr.com/65535/51996191998_8afe43d5df_b.jpg'></img>
                    <p className='projtitle'>React Coffee Shop</p>
                    <p className='projdesc'>An E-commerce store front for a fictional coffee shop. User's have the capabilities to browse drinks and intereact with items via a shopping cart.</p>
                    <div className='icons'>
                    <a href="https://github.com/troydomio/e-commerce-shopping-cart" target="_blank"><p>↦ View Code</p></a>
                   <a href="https://troydomio.github.io/e-commerce-shopping-cart/" target="_blank"><p> ↦ Live Site</p></a>
                    </div>
                </div>
                <div className='project1'>
                    <img src='https://live.staticflickr.com/65535/51996138041_f6b68aa6b6_b.jpg'></img>
                    <div className='icons'>
                    <a href="https://github.com/troydomio" target="_blank"><p>↦ More Projects</p></a>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Projects;