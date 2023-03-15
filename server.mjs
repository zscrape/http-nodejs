import { createServer } from 'http';
import {Hero} from '@ulixee/hero';

createServer((req, res) => {

  (async () => {
    const hero = new Hero()
    await hero.goto('https://www.southwest.com/air/booking/select.html?adultPassengersCount=1&adultsCount=1&departureDate=2023-05-25&departureTimeOfDay=NOON_TO_SIX&destinationAirportCode=SNA&fareType=USD&int=HOMEQBOMAIR&originationAirportCode=SJC&passengerType=ADULT&reset=true&returnDate=2023-05-28&returnTimeOfDay=NOON_TO_SIX&tripType=roundtrip');
    await sleep(20000);

    await hero.close();
  })();


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}).listen(process.env.PORT);
