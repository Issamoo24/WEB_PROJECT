import React from 'react'
import "./Home.css"

function Home() {
  return (
    <body>
        <header>
            <h1>Welcome to Souk Management System</h1>
        </header>
        <main>
            <section id="about">
                <h2>About Us</h2>
                <p>Souk Management, we are dedicated to revolutionizing the traditional market experience by seamlessly blending cultural heritage with modern management techniques. Our mission is to create vibrant, efficient, and dynamic marketplaces that celebrate diversity, foster community, and drive economic growth.

Who We Are

Souk Management is a team of passionate professionals with extensive experience in market management, urban planning, and community development. We understand the unique challenges and opportunities that come with managing traditional marketplaces, and we are committed to preserving their cultural significance while enhancing their operational efficiency.

Our Vision

To be the leading marketplace management company, known for transforming souks into thriving hubs of commerce and culture. We envision marketplaces that are not only bustling centers of trade but also integral parts of the community, where people come together to share, explore, and connect.</p>
            </section>
            <section id="services">
                <h2>Services</h2>
                <ul>
                    <li>Vendor Management</li>
                    <li>Inventory Control</li>
                    <li>Sales Tracking</li>
                    <li>Customer Support</li>
                </ul>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>If you have any questions or need support, please <a href="mailto:issamoo24@gmail.com">email us</a>.</p>
                <p>Our mobile number as 0713-765423</p>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Souk Management System. All rights reserved.</p>
        </footer>
    </body>
  )
}

export default Home