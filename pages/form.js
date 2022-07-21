import * as React from 'react'; 

export default function FormPropsTextFields() {
  return (
    <main>
      <img src="./mug.svg" alt="Mugongo" width="410" height="120" />
    
    <div class="row">
    <div class="col-md-12">
      <form action="/api/submit" method="post">
        <h1> Log an Event </h1>
        
        <fieldset>
          
          <legend><span>1</span> Basic Info</legend>
        
          <label for="group">Group:</label>
          <input type="text" id="group" name="group"  />
        
          <label for="date">Date:</label>
          <input type="date" id="date" name="date"  />
       
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />

          <label for="topics">Topics:</label>
          <input type="text" id="topics" name="topics" />
        
          <label for="event">Type:</label> <br />
          <select id="event" name="event">
              <option value="MUG">MUG Event</option>
              <option value="University">University Event</option>
              <option value="Third Party Event">Third Party Event</option>
          </select>

        </fieldset>
        
        <fieldset>  
        
          <legend><span>2</span> Details</legend>
          
          <label for="attendees">Attendees:</label>
          <input type="text" id="attendees" name="attendees"  />

          <label for="duration">Duration:</label>
          <input type="text" id="duration" name="duration"  />

          <label for="budget">Budget:</label>
          <input type="text" id="budget" name="budget"  />

          <label for="primaryLeader">Primary Leader:</label>
          <input type="text" id="primaryLeader" name="primaryLeader"  />
          
         </fieldset>
       
        <button type="submit">Submit</button>
        
       </form>
       </div>
       </div>
      
      <div className="grid">
        <a href="http://localhost:3000/" className="card">
          <h3>Home &rarr;</h3>
          <p>Learn about MUG's.</p>
        </a>

        <a href="http://localhost:3000/event" className="card">
          <h3>Events &rarr;</h3>
          <p>Find about Events.</p>
        </a>

        <a href="http://localhost:3000/organizer" className="card">
          <h3>Organizers &rarr;</h3>
          <p>Learn about Organizers.</p>
        </a>

        <a href="http://localhost:3000/form" className="card">
          <h3>Insert Data &rarr;</h3>
          <p>Save data into MongoDB.</p>
        </a>
      </div>
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
          *, *:before, *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          
          form {
            font-family: 'Nunito', sans-serif;
            color: #384047;
            max-width: 800px;
            margin: 10px auto;
            padding: 10px 20px;
            background: #f4f7f8;
            border-radius: 8px;
          }
          
          h1 {
            margin: 0 0 30px 0;
            text-align: center;
          }
          
          input[type="text"],
          input[type="password"],
          input[type="date"],
          input[type="datetime"],
          input[type="email"],
          input[type="number"],
          input[type="search"],
          input[type="tel"],
          input[type="time"],
          input[type="url"],
          textarea,
          select {
            background: rgba(255,255,255,0.1);
            border: none;
            font-size: 16px;
            height: auto;
            margin: 0;
            outline: 0;
            padding: 15px;
            width: 100%;
            background-color: #e8eeef;
            color: #8a97a0;
            box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
            margin-bottom: 30px;
          }
          
          input[type="radio"],
          input[type="checkbox"] {
            margin: 0 4px 8px 0;
          }
          
          select {
            padding: 6px;
            height: 32px;
            border-radius: 2px;
          }
          
          button {
            padding: 19px 39px 18px 39px;
            color: #FFF;
            background-color: #4bc970;
            font-size: 18px;
            text-align: center;
            font-style: normal;
            border-radius: 5px;
            width: 100%;
            border: 1px solid #3ac162;
            border-width: 1px 1px 3px;
            box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
            margin-bottom: 10px;
            cursor: pointer;
          }
          
          fieldset {
            margin-bottom: 30px;
            border: none;
          }
          
          legend {
            font-size: 1.4em;
            margin-bottom: 10px;
          }
          
          label {
            display: block;
            margin-bottom: 8px;
            font-size: 16px;
          }
          
          label.light {
            font-weight: 300;
            display: inline;
          }
          
          span {
            background-color: #5fcf80;
            color: #fff;
            height: 30px;
            width: 30px;
            display: inline-block;
            font-size: 0.8em;
            margin-right: 4px;
            line-height: 30px;
            text-align: center;
            text-shadow: 0 1px 0 rgba(255,255,255,0.2);
            border-radius: 100%;
          }
          
          @media screen and (min-width: 480px) {
            form {
              min-width: 800px;
            }
      
          }




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

     
    </main>
  );
}
