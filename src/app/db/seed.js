const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = async () => {
  console.log("creating user");

  await prisma.user.createMany({
    data: [
      {
        email: "dummy@aol.com",
        firstName: "dummy",
        lastName: "dummy",
        clerkId: "dummy",
        isAdmin: false,
      },
      {
        email: "somaan@aol.com",
        firstName: "somaan",
        lastName: "iqbal",
        clerkId: "somaan",
        isAdmin: true,
      },
      {
        email: "travynn@aol.com",
        firstName: "travynn",
        lastName: "ippolito",
        clerkId: "travynn",
        isAdmin: true,
      },
      {
        email: "steven@aol.com",
        firstName: "steven",
        lastName: "kaste",
        clerkId: "steven",
        isAdmin: true,
      },
    ],
  });
};

const createVenue = async () => {
  console.log("creating venue");

  await prisma.venues.createMany({
    data: [
      //
      //NFL teams
      //
      {
        name: "AT&T Stadium",
        location: "Arlington, Texas",
        home_team: "Dallas Cowboys",
        capacity: 80000,
        img_url: "n/a",
      },
      {
        name: "Mercedes-Benz Stadium",
        location: "Atlanta, Georgia",
        home_team: "Atlanta Falcons",
        capacity: 71000,
        img_url: "n/a",
      },
      {
        name: "Arrowhead Stadium",
        location: "Kansas City, Missouri",
        home_team: "Kansas City Chiefs",
        capacity: 76416,
        img_url: "n/a",
      },
      {
        name: "Empower Field at Mile High",
        location: "Denver, Colorado",
        home_team: "Denver Broncos",
        capacity: 76125,
        img_url: "n/a",
      },
      {
        name: "Gillette Stadium",
        location: "Foxborough, Massachusetts",
        home_team: "New England Patriots",
        capacity: 65873,
        img_url: "n/a",
      },
      {
        name: "Soldier Field",
        location: "Chicago, Illinois",
        home_team: "Chicago Bears",
        capacity: 61500,
        img_url: "n/a",
      },
      {
        name: "Lambeau Field",
        location: "Green Bay, Wisconsin",
        home_team: "Green Bay Packers",
        capacity: 81441,
        img_url: "n/a",
      },
      {
        name: "Lucas Oil Stadium",
        location: "Indianapolis, Indiana",
        home_team: "Indianapolis Colts",
        capacity: 67000,
        img_url: "n/a",
      },
      {
        name: "TIAA Bank Field",
        location: "Jacksonville, Florida",
        home_team: "Jacksonville Jaguars",
        capacity: 67379,
        img_url: "n/a",
      },
      {
        name: "SoFi Stadium",
        location: "Inglewood, California",
        home_team: "Los Angeles Rams",
        capacity: 70835,
        img_url: "n/a",
      },
      {
        name: "Allegiant Stadium",
        location: "Paradise, Nevada",
        home_team: "Las Vegas Raiders",
        capacity: 65000,
        img_url: "n/a",
      },
      {
        name: "Bank of America Stadium",
        location: "Charlotte, North Carolina",
        home_team: "Carolina Panthers",
        capacity: 73778,
        img_url: "n/a",
      },
      {
        name: "Paul Brown Stadium",
        location: "Cincinnati, Ohio",
        home_team: "Cincinnati Bengals",
        capacity: 65515,
        img_url: "n/a",
      },
      {
        name: "FirstEnergy Stadium",
        location: "Cleveland, Ohio",
        home_team: "Cleveland Browns",
        capacity: 67844,
        img_url: "n/a",
      },
      {
        name: "Ford Field",
        location: "Detroit, Michigan",
        home_team: "Detroit Lions",
        capacity: 65000,
        img_url: "n/a",
      },
      {
        name: "NRG Stadium",
        location: "Houston, Texas",
        home_team: "Houston Texans",
        capacity: 72220,
        img_url: "n/a",
      },
      {
        name: "Jacksonville Municipal Stadium",
        location: "Jacksonville, Florida",
        home_team: "Jacksonville Jaguars",
        capacity: 67246,
        img_url: "n/a",
      },
      {
        name: "Hard Rock Stadium",
        location: "Miami Gardens, Florida",
        home_team: "Miami Dolphins",
        capacity: 65326,
        img_url: "n/a",
      },
      {
        name: "US Bank Stadium",
        location: "Minneapolis, Minnesota",
        home_team: "Minnesota Vikings",
        capacity: 66655,
        img_url: "n/a",
      },
      {
        name: "MetLife Stadium",
        location: "East Rutherford, New Jersey",
        home_team: "New York Giants",
        capacity: 82500,
        img_url: "n/a",
      },
      {
        name: "MetLife Stadium",
        location: "East Rutherford, New Jersey",
        home_team: "New York Jets",
        capacity: 82500,
        img_url: "n/a",
      },
      {
        name: "Bank of America Stadium",
        location: "Charlotte, North Carolina",
        home_team: "Carolina Panthers",
        capacity: 73778,
        img_url: "n/a",
      },
      {
        name: "Lumen Field",
        location: "Seattle, Washington",
        home_team: "Seattle Seahawks",
        capacity: 68000,
        img_url: "n/a",
      },
      {
        name: "Raymond James Stadium",
        location: "Tampa, Florida",
        home_team: "Tampa Bay Buccaneers",
        capacity: 65890,
        img_url: "n/a",
      },
      {
        name: "Nissan Stadium",
        location: "Nashville, Tennessee",
        home_team: "Tennessee Titans",
        capacity: 69143,
        img_url: "n/a",
      },
      {
        name: "FedExField",
        location: "Landover, Maryland",
        home_team: "Washington Football Team",
        capacity: 60700,
        img_url: "n/a",
      },
      {
        name: "M&T Bank Stadium",
        location: "Baltimore, Maryland",
        home_team: "Baltimore Ravens",
        capacity: 70008,
        img_url: "n/a",
      },
      {
        name: "Highmark Stadium",
        location: "Orchard Park, New York",
        home_team: "Buffalo Bills",
        capacity: 71608,
        img_url: "n/a",
      },
      {
        name: "SoFi Stadium",
        location: "Inglewood, California",
        home_team: "Los Angeles Chargers",
        capacity: 70240,
        img_url: "n/a",
      },
      {
        name: "Lincoln Financial Field",
        location: "Philadelphia, Pennsylvania",
        home_team: "Philadelphia Eagles",
        capacity: 69029,
        img_url: "n/a",
      },
      {
        name: "Heinz Field",
        location: "Pittsburgh, Pennsylvania",
        home_team: "Pittsburgh Steelers",
        capacity: 68400,
        img_url: "n/a",
      },
      {
        name: "Levi's Stadium",
        location: "Santa Clara, California",
        home_team: "San Francisco 49ers",
        capacity: 68500,
        img_url: "n/a",
      },
      //
      //MLB teams
      //
      {
        name: "AT&T Park",
        location: "San Francisco, California",
        home_team: "San Francisco Giants",
        capacity: 41508,
        img_url: "n/a",
      },
      {
        name: "Angel Stadium",
        location: "Anaheim, California",
        home_team: "Los Angeles Angels",
        capacity: 45050,
        img_url: "n/a",
      },
      {
        name: "Oriole Park at Camden Yards",
        location: "Baltimore, Maryland",
        home_team: "Baltimore Orioles",
        capacity: 45971,
        img_url: "n/a",
      },
      {
        name: "Fenway Park",
        location: "Boston, Massachusetts",
        home_team: "Boston Red Sox",
        capacity: 37755,
        img_url: "n/a",
      },
      {
        name: "Guaranteed Rate Field",
        location: "Chicago, Illinois",
        home_team: "Chicago White Sox",
        capacity: 40615,
        img_url: "n/a",
      },
      {
        name: "Great American Ball Park",
        location: "Cincinnati, Ohio",
        home_team: "Cincinnati Reds",
        capacity: 42319,
        img_url: "n/a",
      },
      {
        name: "Progressive Field",
        location: "Cleveland, Ohio",
        home_team: "Cleveland Guardians",
        capacity: 35041,
        img_url: "n/a",
      },
      {
        name: "Coors Field",
        location: "Denver, Colorado",
        home_team: "Colorado Rockies",
        capacity: 50445,
        img_url: "n/a",
      },
      {
        name: "Comerica Park",
        location: "Detroit, Michigan",
        home_team: "Detroit Tigers",
        capacity: 41249,
        img_url: "n/a",
      },
      {
        name: "Minute Maid Park",
        location: "Houston, Texas",
        home_team: "Houston Astros",
        capacity: 41168,
        img_url: "n/a",
      },
      {
        name: "Kauffman Stadium",
        location: "Kansas City, Missouri",
        home_team: "Kansas City Royals",
        capacity: 37903,
        img_url: "n/a",
      },
      {
        name: "Angel Stadium",
        location: "Anaheim, California",
        home_team: "Los Angeles Angels",
        capacity: 45050,
        img_url: "n/a",
      },
      {
        name: "Dodger Stadium",
        location: "Los Angeles, California",
        home_team: "Los Angeles Dodgers",
        capacity: 56000,
        img_url: "n/a",
      },
      {
        name: "Marlins Park",
        location: "Miami, Florida",
        home_team: "Miami Marlins",
        capacity: 34742,
        img_url: "n/a",
      },
      {
        name: "American Family Field",
        location: "Milwaukee, Wisconsin",
        home_team: "Milwaukee Brewers",
        capacity: 41900,
        img_url: "n/a",
      },
      {
        name: "Target Field",
        location: "Minneapolis, Minnesota",
        home_team: "Minnesota Twins",
        capacity: 38760,
        img_url: "n/a",
      },
      {
        name: "Citi Field",
        location: "New York, New York",
        home_team: "New York Mets",
        capacity: 41922,
        img_url: "n/a",
      },
      {
        name: "Yankee Stadium",
        location: "New York, New York",
        home_team: "New York Yankees",
        capacity: 47309,
        img_url: "n/a",
      },
      {
        name: "Oakland Coliseum",
        location: "Oakland, California",
        home_team: "Oakland Athletics",
        capacity: 46732,
        img_url: "n/a",
      },
      {
        name: "Citizens Bank Park",
        location: "Philadelphia, Pennsylvania",
        home_team: "Philadelphia Phillies",
        capacity: 42792,
        img_url: "n/a",
      },
      {
        name: "PNC Park",
        location: "Pittsburgh, Pennsylvania",
        home_team: "Pittsburgh Pirates",
        capacity: 38083,
        img_url: "n/a",
      },
      {
        name: "Petco Park",
        location: "San Diego, California",
        home_team: "San Diego Padres",
        capacity: 40209,
        img_url: "n/a",
      },
      {
        name: "Oracle Park",
        location: "San Francisco, California",
        home_team: "San Francisco Giants",
        capacity: 41508,
        img_url: "n/a",
      },
      {
        name: "T-Mobile Park",
        location: "Seattle, Washington",
        home_team: "Seattle Mariners",
        capacity: 47168,
        img_url: "n/a",
      },
      {
        name: "Busch Stadium",
        location: "St. Louis, Missouri",
        home_team: "St. Louis Cardinals",
        capacity: 44256,
        img_url: "n/a",
      },
      {
        name: "Tropicana Field",
        location: "St. Petersburg, Florida",
        home_team: "Tampa Bay Rays",
        capacity: 25745,
        img_url: "n/a",
      },
      {
        name: "Globe Life Field",
        location: "Arlington, Texas",
        home_team: "Texas Rangers",
        capacity: 40718,
        img_url: "n/a",
      },
      {
        name: "Rogers Centre",
        location: "Toronto, Ontario",
        home_team: "Toronto Blue Jays",
        capacity: 49282,
        img_url: "n/a",
      },
      {
        name: "Nationals Park",
        location: "Washington, D.C.",
        home_team: "Washington Nationals",
        capacity: 41339,
        img_url: "n/a",
      },
      //
      //NBA teams
      //
      {
        name: "State Farm Arena",
        location: "Atlanta, Georgia",
        home_team: "Atlanta Hawks",
        capacity: 16500,
        img_url: "n/a",
      },
      {
        name: "TD Garden",
        location: "Boston, Massachusetts",
        home_team: "Boston Celtics",
        capacity: 19524,
        img_url: "n/a",
      },
      {
        name: "Barclays Center",
        location: "Brooklyn, New York",
        home_team: "Brooklyn Nets",
        capacity: 17732,
        img_url: "n/a",
      },
      {
        name: " Spectrum Center",
        location: "Charlotte, North Carolina",
        home_team: "Charlotte Hornets",
        capacity: 19077,
        img_url: "n/a",
      },
      {
        name: "United Center",
        location: "Chicago, Illinois",
        home_team: "Chicago Bulls",
        capacity: 20917,
        img_url: "n/a",
      },
      {
        name: "Rocket Mortgage FieldHouse",
        location: "Cleveland, Ohio",
        home_team: "Cleveland Cavaliers",
        capacity: 19432,
        img_url: "n/a",
      },
      {
        name: "American Airlines Center",
        location: "Dallas, Texas",
        home_team: "Dallas Mavericks",
        capacity: 19200,
        img_url: "n/a",
      },
      {
        name: "Ball Arena",
        location: "Denver, Colorado",
        home_team: "Denver Nuggets",
        capacity: 19520,
        img_url: "n/a",
      },
      {
        name: "Little Caesars Arena",
        location: "Detroit, Michigan",
        home_team: "Detroit Pistons",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Chase Center",
        location: "San Francisco, California",
        home_team: "Golden State Warriors",
        capacity: 18064,
        img_url: "n/a",
      },
      {
        name: "Toyota Center",
        location: "Houston, Texas",
        home_team: "Houston Rockets",
        capacity: 18055,
        img_url: "n/a",
      },
      {
        name: "Bankers Life Fieldhouse",
        location: "Indianapolis, Indiana",
        home_team: "Indiana Pacers",
        capacity: 17923,
        img_url: "n/a",
      },
      {
        name: "Crypto.com Arena",
        location: "Los Angeles, California",
        home_team: "LA Clippers",
        capacity: 19068,
        img_url: "n/a",
      },
      {
        name: "Staples Center",
        location: "Los Angeles, California",
        home_team: "Los Angeles Lakers",
        capacity: 19068,
        img_url: "n/a",
      },
      {
        name: "Fiserv Forum",
        location: "Milwaukee, Wisconsin",
        home_team: "Milwaukee Bucks",
        capacity: 17500,
        img_url: "n/a",
      },
      {
        name: "Target Center",
        location: "Minneapolis, Minnesota",
        home_team: "Minnesota Timberwolves",
        capacity: 18978,
        img_url: "n/a",
      },
      {
        name: "Smoothie King Center",
        location: "New Orleans, Louisiana",
        home_team: "New Orleans Pelicans",
        capacity: 16867,
        img_url: "n/a",
      },
      {
        name: "Madison Square Garden",
        location: "New York, New York",
        home_team: "New York Knicks",
        capacity: 19812,
        img_url: "n/a",
      },
      {
        name: "Fiserv Forum",
        location: "Milwaukee, Wisconsin",
        home_team: "Milwaukee Bucks",
        capacity: 17500,
        img_url: "n/a",
      },
      {
        name: "Chesapeake Energy Arena",
        location: "Oklahoma City, Oklahoma",
        home_team: "Oklahoma City Thunder",
        capacity: 18203,
        img_url: "n/a",
      },
      {
        name: "Amway Center",
        location: "Orlando, Florida",
        home_team: "Orlando Magic",
        capacity: 18846,
        img_url: "n/a",
      },
      {
        name: "Wells Fargo Center",
        location: "Philadelphia, Pennsylvania",
        home_team: "Philadelphia 76ers",
        capacity: 20478,
        img_url: "n/a",
      },
      {
        name: "Talking Stick Resort Arena",
        location: "Phoenix, Arizona",
        home_team: "Phoenix Suns",
        capacity: 18055,
        img_url: "n/a",
      },
      {
        name: "Moda Center",
        location: "Portland, Oregon",
        home_team: "Portland Trail Blazers",
        capacity: 19441,
        img_url: "n/a",
      },
      {
        name: "Golden 1 Center",
        location: "Sacramento, California",
        home_team: "Sacramento Kings",
        capacity: 17317,
        img_url: "n/a",
      },
      {
        name: "AT&T Center",
        location: "San Antonio, Texas",
        home_team: "San Antonio Spurs",
        capacity: 18354,
        img_url: "n/a",
      },
      {
        name: "Crypto.com Arena",
        location: "Los Angeles, California",
        home_team: "LA Clippers",
        capacity: 19068,
        img_url: "n/a",
      },
      {
        name: "Chase Center",
        location: "San Francisco, California",
        home_team: "Golden State Warriors",
        capacity: 18064,
        img_url: "n/a",
      },
      {
        name: "Climate Pledge Arena",
        location: "Seattle, Washington",
        home_team: "Seattle SuperSonics",
        capacity: 17564,
        img_url: "n/a",
      },
      {
        name: "FedExForum",
        location: "Memphis, Tennessee",
        home_team: "Memphis Grizzlies",
        capacity: 17794,
        img_url: "n/a",
      },
      {
        name: "Amalie Arena",
        location: "Tampa, Florida",
        home_team: "Toronto Raptors",
        capacity: 19041,
        img_url: "n/a",
      },
      {
        name: "Vivint Arena",
        location: "Salt Lake City, Utah",
        home_team: "Utah Jazz",
        capacity: 18306,
        img_url: "n/a",
      },
      {
        name: "Capital One Arena",
        location: "Washington, D.C.",
        home_team: "Washington Wizards",
        capacity: 20356,
        img_url: "n/a",
      },
      //
      //NHL teams
      //
      {
        name: "State Farm Arena",
        location: "Atlanta, Georgia",
        home_team: "Atlanta Thrashers",
        capacity: 16500,
        img_url: "n/a",
      },
      {
        name: "TD Garden",
        location: "Boston, Massachusetts",
        home_team: "Boston Bruins",
        capacity: 19215,
        img_url: "n/a",
      },
      {
        name: "KeyBank Center",
        location: "Buffalo, New York",
        home_team: "Buffalo Sabres",
        capacity: 19070,
        img_url: "n/a",
      },
      {
        name: "Scotiabank Saddledome",
        location: "Calgary, Alberta",
        home_team: "Calgary Flames",
        capacity: 19289,
        img_url: "n/a",
      },
      {
        name: "PNC Arena",
        location: "Raleigh, North Carolina",
        home_team: "Carolina Hurricanes",
        capacity: 18319,
        img_url: "n/a",
      },
      {
        name: "United Center",
        location: "Chicago, Illinois",
        home_team: "Chicago Blackhawks",
        capacity: 19717,
        img_url: "n/a",
      },
      {
        name: "Ball Arena",
        location: "Denver, Colorado",
        home_team: "Colorado Avalanche",
        capacity: 18007,
        img_url: "n/a",
      },
      {
        name: "Nationwide Arena",
        location: "Columbus, Ohio",
        home_team: "Columbus Blue Jackets",
        capacity: 18500,
        img_url: "n/a",
      },
      {
        name: "American Airlines Center",
        location: "Dallas, Texas",
        home_team: "Dallas Stars",
        capacity: 18432,
        img_url: "n/a",
      },
      {
        name: "Joe Louis Arena",
        location: "Detroit, Michigan",
        home_team: "Detroit Red Wings",
        capacity: 19732,
        img_url: "n/a",
      },
      {
        name: "Honda Center",
        location: "Anaheim, California",
        home_team: "Anaheim Ducks",
        capacity: 17174,
        img_url: "n/a",
      },
      {
        name: "FLA Live Arena",
        location: "Sunrise, Florida",
        home_team: "Florida Panthers",
        capacity: 19173,
        img_url: "n/a",
      },
      {
        name: "Staples Center",
        location: "Los Angeles, California",
        home_team: "Los Angeles Kings",
        capacity: 19068,
        img_url: "n/a",
      },
      {
        name: "Xcel Energy Center",
        location: "St. Paul, Minnesota",
        home_team: "Minnesota Wild",
        capacity: 17344,
        img_url: "n/a",
      },
      {
        name: "Bell Centre",
        location: "Montreal, Quebec",
        home_team: "Montreal Canadiens",
        capacity: 21273,
        img_url: "n/a",
      },
      {
        name: "Bridgestone Arena",
        location: "Nashville, Tennessee",
        home_team: "Nashville Predators",
        capacity: 17113,
        img_url: "n/a",
      },
      {
        name: "Prudential Center",
        location: "Newark, New Jersey",
        home_team: "New Jersey Devils",
        capacity: 16273,
        img_url: "n/a",
      },
      {
        name: "Barclays Center",
        location: "Brooklyn, New York",
        home_team: "New York Islanders",
        capacity: 17113,
        img_url: "n/a",
      },
      {
        name: "Madison Square Garden",
        location: "New York, New York",
        home_team: "New York Rangers",
        capacity: 18200,
        img_url: "n/a",
      },
      {
        name: "Canadian Tire Centre",
        location: "Ottawa, Ontario",
        home_team: "Ottawa Senators",
        capacity: 17500,
        img_url: "n/a",
      },
      {
        name: "Wells Fargo Center",
        location: "Philadelphia, Pennsylvania",
        home_team: "Philadelphia Flyers",
        capacity: 19094,
        img_url: "n/a",
      },
      {
        name: "PPG Paints Arena",
        location: "Pittsburgh, Pennsylvania",
        home_team: "Pittsburgh Penguins",
        capacity: 18387,
        img_url: "n/a",
      },
      {
        name: "Enterprise Center",
        location: "St. Louis, Missouri",
        home_team: "St. Louis Blues",
        capacity: 18312,
        img_url: "n/a",
      },
      {
        name: "SAP Center at San Jose",
        location: "San Jose, California",
        home_team: "San Jose Sharks",
        capacity: 17562,
        img_url: "n/a",
      },
      {
        name: "Climate Pledge Arena",
        location: "Seattle, Washington",
        home_team: "Seattle Kraken",
        capacity: 17151,
        img_url: "n/a",
      },
      {
        name: "Amalie Arena",
        location: "Tampa, Florida",
        home_team: "Tampa Bay Lightning",
        capacity: 19092,
        img_url: "n/a",
      },
      {
        name: "Scotiabank Arena",
        location: "Toronto, Ontario",
        home_team: "Toronto Maple Leafs",
        capacity: 18819,
        img_url: "n/a",
      },
      {
        name: "Rogers Place",
        location: "Edmonton, Alberta",
        home_team: "Edmonton Oilers",
        capacity: 18506,
        img_url: "n/a",
      },
      {
        name: "Rogers Arena",
        location: "Vancouver, British Columbia",
        home_team: "Vancouver Canucks",
        capacity: 18860,
        img_url: "n/a",
      },
      {
        name: "Capital One Arena",
        location: "Washington, D.C.",
        home_team: "Washington Capitals",
        capacity: 18506,
        img_url: "n/a",
      },
      {
        name: "Bell MTS Place",
        location: "Winnipeg, Manitoba",
        home_team: "Winnipeg Jets",
        capacity: 15068,
        img_url: "n/a",
      },
      //
      //MLS teams
      //
      {
        name: "Mercedes-Benz Stadium",
        location: "Atlanta, Georgia",
        home_team: "Atlanta United FC",
        capacity: 42000,
        img_url: "n/a",
      },
      {
        name: "Audi Field",
        location: "Washington, D.C.",
        home_team: "D.C. United",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Soldier Field",
        location: "Chicago, Illinois",
        home_team: "Chicago Fire FC",
        capacity: 61500,
        img_url: "n/a",
      },
      {
        name: "Empower Field at Mile High",
        location: "Denver, Colorado",
        home_team: "Colorado Rapids",
        capacity: 18596,
        img_url: "n/a",
      },
      {
        name: "MAPFRE Stadium",
        location: "Columbus, Ohio",
        home_team: "Columbus Crew SC",
        capacity: 19500,
        img_url: "n/a",
      },
      {
        name: "Toyota Stadium",
        location: "Frisco, Texas",
        home_team: "FC Dallas",
        capacity: 20514,
        img_url: "n/a",
      },
      {
        name: "BBVA Stadium",
        location: "Houston, Texas",
        home_team: "Houston Dynamo FC",
        capacity: 22039,
        img_url: "n/a",
      },
      {
        name: "Children's Mercy Park",
        location: "Kansas City, Kansas",
        home_team: "Sporting Kansas City",
        capacity: 18500,
        img_url: "n/a",
      },
      {
        name: "Banc of California Stadium",
        location: "Los Angeles, California",
        home_team: "Los Angeles FC",
        capacity: 22000,
        img_url: "n/a",
      },
      {
        name: "Dignity Health Sports Park",
        location: "Carson, California",
        home_team: "LA Galaxy",
        capacity: 27000,
        img_url: "n/a",
      },
      {
        name: "Inter Miami CF Stadium",
        location: "Fort Lauderdale, Florida",
        home_team: "Inter Miami CF",
        capacity: 18000,
        img_url: "n/a",
      },
      {
        name: "Allianz Field",
        location: "St. Paul, Minnesota",
        home_team: "Minnesota United FC",
        capacity: 19650,
        img_url: "n/a",
      },
      {
        name: "Gillette Stadium",
        location: "Foxborough, Massachusetts",
        home_team: "New England Revolution",
        capacity: 20824,
        img_url: "n/a",
      },
      {
        name: "Red Bull Arena",
        location: "Harrison, New Jersey",
        home_team: "New York Red Bulls",
        capacity: 25117,
        img_url: "n/a",
      },
      {
        name: "Yankee Stadium",
        location: "New York, New York",
        home_team: "New York City FC",
        capacity: 28000,
        img_url: "n/a",
      },
      {
        name: "Exploria Stadium",
        location: "Orlando, Florida",
        home_team: "Orlando City SC",
        capacity: 25500,
        img_url: "n/a",
      },
      {
        name: "Subaru Park",
        location: "Chester, Pennsylvania",
        home_team: "Philadelphia Union",
        capacity: 18500,
        img_url: "n/a",
      },
      {
        name: "Providence Park",
        location: "Portland, Oregon",
        home_team: "Portland Timbers",
        capacity: 25218,
        img_url: "n/a",
      },
      {
        name: "Rio Tinto Stadium",
        location: "Sandy, Utah",
        home_team: "Real Salt Lake",
        capacity: 20213,
        img_url: "n/a",
      },
      {
        name: "PayPal Park",
        location: "San Jose, California",
        home_team: "San Jose Earthquakes",
        capacity: 18000,
        img_url: "n/a",
      },
      {
        name: "SeatGeek Stadium",
        location: "Bridgeview, Illinois",
        home_team: "Chicago Fire FC",
        capacity: 20500,
        img_url: "n/a",
      },
      {
        name: "Stade Saputo",
        location: "Montreal, Quebec",
        home_team: "CF Montreal",
        capacity: 19132,
        img_url: "n/a",
      },
      {
        name: "Nissan Stadium",
        location: "Nashville, Tennessee",
        home_team: "Nashville SC",
        capacity: 69143,
        img_url: "n/a",
      },
      {
        name: "Mercedes-Benz Stadium",
        location: "Atlanta, Georgia",
        home_team: "Atlanta United FC",
        capacity: 42000,
        img_url: "n/a",
      },
      {
        name: "Rio Grande Credit Union Field at Isotopes Park",
        location: "Albuquerque, New Mexico",
        home_team: "New Mexico United",
        capacity: 15586,
        img_url: "n/a",
      },
      {
        name: "Q2 Stadium",
        location: "Austin, Texas",
        home_team: "Austin FC",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Lower.com Field",
        location: "Columbus, Ohio",
        home_team: "Columbus Crew SC",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Bank of California Stadium",
        location: "Los Angeles, California",
        home_team: "Los Angeles FC",
        capacity: 22000,
        img_url: "n/a",
      },
      {
        name: "Audi Field",
        location: "Washington, D.C.",
        home_team: "D.C. United",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Providence Park",
        location: "Portland, Oregon",
        home_team: "Portland Timbers",
        capacity: 25218,
        img_url: "n/a",
      },
      {
        name: "Allianz Field",
        location: "St. Paul, Minnesota",
        home_team: "Minnesota United FC",
        capacity: 19650,
        img_url: "n/a",
      },
      {
        name: "PayPal Park",
        location: "San Jose, California",
        home_team: "San Jose Earthquakes",
        capacity: 18000,
        img_url: "n/a",
      },
      {
        name: "SeatGeek Stadium",
        location: "Bridgeview, Illinois",
        home_team: "Chicago Fire FC",
        capacity: 20500,
        img_url: "n/a",
      },
      {
        name: "Lower.com Field",
        location: "Columbus, Ohio",
        home_team: "Columbus Crew SC",
        capacity: 20000,
        img_url: "n/a",
      },
      {
        name: "Fortress Obetz",
        location: "Obetz, Ohio",
        home_team: "Columbus Crew SC",
        capacity: 6200,
        img_url: "n/a",
      },
      {
        name: "Highmark Stadium",
        location: "Pittsburgh, Pennsylvania",
        home_team: "Pittsburgh Riverhounds SC",
        capacity: 5000,
        img_url: "n/a",
      },
      {
        name: "Dillon Stadium",
        location: "Hartford, Connecticut",
        home_team: "Hartford Athletic",
        capacity: 5500,
        img_url: "n/a",
      },
      {
        name: "Rentschler Field",
        location: "East Hartford, Connecticut",
        home_team: "Hartford Athletic",
        capacity: 40000,
        img_url: "n/a",
      },
      {
        name: "Weidner Field",
        location: "Colorado Springs, Colorado",
        home_team: "Colorado Springs Switchbacks FC",
        capacity: 8500,
        img_url: "n/a",
      },
      {
        name: "Memorial Stadium",
        location: "Berkeley, California",
        home_team: "California Golden Bears",
        capacity: 62787,
        img_url: "n/a",
      },
      {
        name: "Starfire Sports Complex",
        location: "Tukwila, Washington",
        home_team: "Seattle Sounders FC 2",
        capacity: 4400,
        img_url: "n/a",
      },
    ],
  });
};

const createEvent = async () => {
  console.log("creating event");

  await prisma.event.createMany({
    data: [
      //
      // Football
      //
      {
        venue_id: 1,
        team1: "Dallas Cowboys",
        team2: "Green Bay Packers",
        start_time: new Date(),
        sport: "Football",
      },
      {
        venue_id: 2,
        team1: "Philadelphia Eagles",
        team2: "Tampa Bay Buccaneers",
        start_time: new Date(),
        sport: "Football",
      },
      {
        venue_id: 3,
        team1: "New England Patriots",
        team2: "Kansas City Chiefs",
        start_time: new Date(),
        sport: "Football",
      },
      {
        venue_id: 4,
        team1: "Pittsburgh Steelers",
        team2: "Los Angeles Rams",
        start_time: new Date(),
        sport: "Football",
      },
      //
      // Basketball
      //
      {
        venue_id: 5,
        team1: "Los Angeles Lakers",
        team2: "Brooklyn Nets",
        start_time: new Date(),
        sport: "Basketball",
      },
      {
        venue_id: 6,
        team1: "Golden State Warriors",
        team2: "Miami Heat",
        start_time: new Date(),
        sport: "Basketball",
      },
      {
        venue_id: 7,
        team1: "Chicago Bulls",
        team2: "Toronto Raptors",
        start_time: new Date(),
        sport: "Basketball",
      },
      {
        venue_id: 8,
        team1: "Houston Rockets",
        team2: "Denver Nuggets",
        start_time: new Date(),
        sport: "Basketball",
      },
      //
      // Baseball
      //
      {
        venue_id: 9,
        team1: "New York Yankees",
        team2: "Los Angeles Dodgers",
        start_time: new Date(),
        sport: "Baseball",
      },
      {
        venue_id: 10,
        team1: "Boston Red Sox",
        team2: "Chicago Cubs",
        start_time: new Date(),
        sport: "Baseball",
      },
      {
        venue_id: 11,
        team1: "San Francisco Giants",
        team2: "Atlanta Braves",
        start_time: new Date(),
        sport: "Baseball",
      },
      {
        venue_id: 12,
        team1: "Houston Astros",
        team2: "New York Mets",
        start_time: new Date(),
        sport: "Baseball",
      },
      //
      //Hockey
      //
      {
        venue_id: 13,
        team1: "Edmonton Oilers",
        team2: "Toronto Maple Leafs",
        start_time: new Date(),
        sport: "Hockey",
      },
      {
        venue_id: 14,
        team1: "Vegas Golden Knights",
        team2: "Montreal Canadiens",
        start_time: new Date(),
        sport: "Hockey",
      },
      {
        venue_id: 15,
        team1: "Chicago Blackhawks",
        team2: "New York Rangers",
        start_time: new Date(),
        sport: "Hockey",
      },
      {
        venue_id: 16,
        team1: "Washington Capitals",
        team2: "St. Louis Blues",
        start_time: new Date(),
        sport: "Hockey",
      },
      //
      // Soccer
      //
      {
        venue_id: 17,
        team1: "Seattle Sounders FC 2",
        team2: "California Golden Bears",
        start_time: new Date(),
        sport: "Soccer",
      },
      {
        venue_id: 18,
        team1: "Chicago Fire FC",
        team2: "Los Angeles FC",
        start_time: new Date(),
        sport: "Soccer",
      },
      {
        venue_id: 19,
        team1: "New Mexico United",
        team2: "Atlanta United FC",
        start_time: new Date(),
        sport: "Soccer",
      },
      {
        venue_id: 20,
        team1: "Houston Dynamo FC",
        team2: "Atlanta United FC",
        start_time: new Date(),
        sport: "Soccer",
      },
    ],
  });
};

const createTicket = async () => {
  console.log("creating ticket");

  await prisma.ticket.createMany({
    data: [
      {
        event_id: 1,
        owner_id: 1,
        section: 1,
        seat: 1,
        row: 1,
        price: 10.0,
        date: new Date(),
      },
      {
        event_id: 2,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
    ],
  });
};
const createOrder = async () => {
  console.log("creating order");

  await prisma.order.createMany({
    data: [
      { user_id: 1, ticket_id: 2, created_at: new Date() },
      { user_id: 2, ticket_id: 1, created_at: new Date() },
    ],
  });
};

const createComment = async () => {
  console.log("creating comment");

  await prisma.comments.createMany({
    data: [
      {
        venue_id: 1,
        user_id: 1,
        comment_text: "This stadium doo doo",
        created_at: new Date(),
        category: "stadium",
      },
      {
        venue_id: 2,
        user_id: 2,
        comment_text: "This stadium Boo Boo",
        created_at: new Date(),
        category: "stadium",
      },
    ],
  });
};

const main = async () => {
  console.log("seeding the database");

  await createUser();
  await createVenue();
  await createEvent();
  await createTicket();
  await createOrder();
  await createComment();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
