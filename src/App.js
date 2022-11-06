import Weather from './scenes/CurrentWeather'

function App() {
  return (
    <main className="App">
      <div>
        <form>
          <input
            type="text"
            name="location"
            value="Search Location"
          />
        </form>
      </div>
      <Weather/>
    </main>
  );
}

export default App;
