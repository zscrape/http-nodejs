import { createServer } from 'http';

createServer((req, res) => {
  const Hero = require('@ulixee/hero');

  const fs = require('fs');
  const path = require("path");

  (async () => {
    const hero = new Hero()
    await hero.goto('https://www.southwest.com/air/booking/select.html?adultPassengersCount=1&adultsCount=1&departureDate=2023-05-25&departureTimeOfDay=NOON_TO_SIX&destinationAirportCode=SNA&fareType=USD&int=HOMEQBOMAIR&originationAirportCode=SJC&passengerType=ADULT&reset=true&returnDate=2023-05-28&returnTimeOfDay=NOON_TO_SIX&tripType=roundtrip');
    await sleep(20000);

    const directory = 'screenshots';
    const screenshot = await hero.takeScreenshot({
      format: 'jpeg',
      jpegQuality: 100,
      fullPage: true,
    });

    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = `image-${timestamp}.jpg`;

    // Check if the directory exists, and create it if it doesn't
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }

    fs.writeFile(path.join(directory, filename), screenshot, function(err) {
      if (err) {
        console.log('Error saving image:', err);
      } else {
        console.log(`Image saved as ${filename} in ${directory} directory successfully`);
      }
    });

    await hero.close();
  })();


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}).listen(process.env.PORT);
