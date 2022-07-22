import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
    return (
        <div className="container">
            <Head>
                <title>Welcome to Mugongo</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <main>
                <img src="./mug.svg" alt="Mugongo" width="410" height="120" />
                <h1>MUGs Dashboard</h1>

                <iframe src="https://charts.mongodb.com/charts-m001-qzbhb/embed/dashboards?id=62aae1c8-cc74-4ac0-8e58-95361766df7e&theme=light&autoRefresh=true&maxDataAge=1800&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed" width="780" height="700" />

                <div className="grid">

                    <a href="http://localhost:3000/" className="card">
                        <h3>Home &rarr;</h3>
                        <p>Find all MUG's.</p>
                    </a>

                    <a href="http://localhost:3000/form" className="card">
                        <h3>Insert Data &rarr;</h3>
                        <p>Save data into MongoDB.</p>
                    </a>

                    <a href="http://localhost:3000/event" className="card">
                        <h3>Events &rarr;</h3>
                        <p>Find all Events.</p>
                    </a>

                    <a href="http://localhost:3000/group" className="card">
                        <h3>Groups &rarr;</h3>
                        <p>Find all Groups.</p>
                    </a>

                    <a href="http://localhost:3000/organizer" className="card">
                        <h3>Leaders &rarr;</h3>
                        <p>Find all Leaders.</p>
                    </a>

                </div>
            </main>

            <footer>
                <a
                    href="https://mongodb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/mug.svg" alt="MongoDB Logo" className="logo" />
                </a>
            </footer>

            <style jsx>{`
        main {
          padding: 1rem 1rem 1rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #d1e0d5;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #ffffff;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #ffffff;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          min-width: 500px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          flex-basis: 100%;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: row;
          }
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()

    const isConnected = await client.isConnected() // Returns true or false

    return {
        props: { isConnected },
    }
}
