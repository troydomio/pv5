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
                   <p> ↦ View Code</p>
                   <p>↦  Live Site</p>
                    </div>
                </div>

                <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>Memories </p>
                    <p className='projdesc'>A full-stack social media application created with React and Node.js that allows user's to create an account, login, upload posts and leave comments!</p>
                    <div className='icons'>
                   <p> ↦ View Code</p>
                   <p>↦  Live Site</p>
                    </div>
                </div>
                <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>Hair Salon Website</p>
                    <p className='projdesc'>A freelance project for a local hair stylist in Dallas, Texas that allows  her clients to book her services, review her testimonals and see her past work.</p>
                    <div className='icons'>
                   <p> ↦ View Code</p>
                   <p>↦ Live Site</p>
                   <p>↦ Case Study</p>
                    </div>
                </div>
                
        </div>
        <div className='row2'>
            <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>Spoiled Case Study</p>
                    <p className='projdesc'>A case study on a web application that aims to combat excessive food waste in the Unitied States by providing a reference to user's on the shelf-life of their groceries.</p>
                    <div className='icons'>
                   <p>↦ Case Study</p>
                    </div>
                   
                </div>
                <div className='project1'>
                    <img src='https://wcapsu.files.wordpress.com/2014/02/liora-heather-grey-carpet-square.jpg'></img>
                    <p className='projtitle'>React Coffee Shop</p>
                    <p className='projdesc'>An E-commerce store front for a fictional coffee shop. User's have the capabilities to browse drinks and intereact with items via a shopping cart.</p>
                    <div className='icons'>
                   <p> ↦ View Code</p>
                   <p>↦ Live Site</p>
                    </div>
                </div>
                <div className='project1'>
                    <img src='https://cdn-icons-png.flaticon.com/512/21/21127.png'></img>
                    <p className='projtitle'>More Projects</p>
                </div>
        </div>
    </div>
    )
}

export default Projects;