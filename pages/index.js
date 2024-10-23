import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to My Awesomdhbhbdhbdhbe Homepage</title>
        <meta name="description" content="An enhanced Next.js homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to My Awesome Homepage</h1>
            <p className="subtitle">
              Discover the world of Next.js with this beautifully crafted homepage.
            </p>
            <a href="/about">
              <button>Learn More</button>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Next.js Project | Built with ❤️ and Next.js</p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
        }

        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
        }

        .hero-content {
          text-align: center;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 30px;
        }

        button {
          background-color: white;
          color: #6a11cb;
          border: none;
          padding: 15px 30px;
          font-size: 18px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
        }

        button:hover {
          background-color: #2575fc;
          color: white;
          transform: scale(1.05);
        }

        footer {
          background-color: #f5f5f5;
          text-align: center;
          padding: 20px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        footer p {
          color: #333;
        }
      `}</style>
    </div>
  )
}
