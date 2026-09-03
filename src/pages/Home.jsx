import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const tourData = [
  {
    date: 'JUL16',
    city: 'DETROIT, MI',
    venue: 'DTE ENERGY MUSIC THEATRE',
  },
  {
    date: 'JUL19',
    city: 'TORONTO,ON',
    venue: 'BUDWEISER STAGE',
  },
  {
    date: 'JUL22',
    city: 'BRISTOW, VA',
    venue: 'JIGGY LUBE LIVE',
  },
  {
    date: 'JUL29',
    city: 'PHOENIX, AZ',
    venue: 'AK-CHIN PAVILION',
  },
  {
    date: 'AUG 2',
    city: 'LAS VEGAS, NV',
    venue: 'T-MOBILE ARENA',
  },
  {
    date: 'AUG 7',
    city: 'CONCORD, CA',
    venue: 'CONCORD PAVILION',
  },
];

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="home-hero">

        <h1>The Generics</h1>

        <Button
          variant="outline-info"
          size="lg"
          className="latest-album-btn"
        >
          Get our Latest Album
        </Button>

        <button className="play-button">
          ▶
        </button>

      </section>

      {/* Tours Section */}
      <Container className="tours-section">

        <h2>TOURS</h2>

        <div className="tour-list">

          {tourData.map((tour) => (
            <div
              className="tour-row"
              key={tour.date + tour.city}
            >

              <span className="tour-date">
                {tour.date}
              </span>

              <span className="tour-city">
                {tour.city}
              </span>

              <span className="tour-venue">
                {tour.venue}
              </span>

              <Button
                variant="info"
                className="ticket-button"
              >
                BUY TICKETS
              </Button>

            </div>
          ))}

        </div>

      </Container>

    </div>
  );
}

export default Home;