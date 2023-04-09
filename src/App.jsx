import ReactTimeAgo from "react-time-ago";

function App() {
  const time1 = Date.now();
  const time2 = Date.parse("02-09-2023 8:10 PM");

  return (
    <div>
      <center>
        <h1>
          <ReactTimeAgo date={time1} locale='en-US' />
        </h1>

        <h1>
          <ReactTimeAgo date={time2} locale='en-US' />
        </h1>
      </center>
    </div>
  );
}

export default App;
