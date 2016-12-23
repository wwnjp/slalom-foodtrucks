export const dummyDatabase = {
  get() {
    let res = {
      "data": {
          "metadata": {
              "ads": [],
              "new": ["revelry", "saigon-alley", "bon-me-6", "sante", "slideby", "tenoch-mexican-2", "fresh-food-generation", "bon-me-5", "posto", "chicken-rice-4"],
              "regions": [{
                  "identifier": "boston",
                  "name": "Boston",
                  "time_zone": "America\/New_York",
                  "regions": [{
                      "identifier": "chp",
                      "name": "City Hall Plaza",
                      "time_zone": "America\/New_York"
                  }, {
                      "identifier": "greenway",
                      "name": "Greenway",
                      "time_zone": "America\/New_York"
                  }, {
                      "identifier": "sowa",
                      "name": "SoWa Open Market",
                      "time_zone": "America\/New_York"
                  }]
              }]
          },
          "vendors": {
              "baja": {
                  "description_short": "Amazing tacos, burritos and tostadas.",
                  "identifier": "baja",
                  "name": "Baja Taco Truck",
                  "region": "boston",
                  "url": "bajatacotruck.com",
                  "phone": "(781) 631-2700",
                  "email": "info@bajatacotruck.com",
                  "twitter": "bajatacotruck",
                  "description": "Baja Taco Truck's mission is to bring the San Diego taqueria\/taco shop to the streets of Brookline, Waltham and Boston. We'll feature amazing tacos, burritos and tostadas made with Carne Asada, chicken and fish prepared as it is in Baja.",
                  "rating": 542,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1482165000,
                      "display": "Constant Contact",
                      "latitude": 42.41700333,
                      "longitude": -71.25854551
                  },
                  "open": [{
                      "start": 1482424200,
                      "end": 1482433200,
                      "display": "High Street, on The Greenway.",
                      "latitude": 42.3566935,
                      "longitude": -71.05111345
                  }, {
                      "start": 1482510600,
                      "end": 1482519600,
                      "display": "High Street, on The Greenway.",
                      "latitude": 42.3566935,
                      "longitude": -71.05111345
                  }]
              },
              "bon-me": {
                  "description_short": null,
                  "identifier": "bon-me",
                  "name": "Bon Me Blue",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright blue truck. For you, Bon Me.",
                  "rating": 883,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1471618800,
                      "display": "City Hall Plaza",
                      "latitude": 42.360304,
                      "longitude": -71.058798
                  },
                  "open": []
              },
              "bon-me-2": {
                  "description_short": null,
                  "identifier": "bon-me-2",
                  "name": "Bon Me Yellow",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright yellow truck. For you, Bon Me.",
                  "rating": 754,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482159600,
                      "display": "Boston Common at Brewer Fountain",
                      "latitude": 42.356296,
                      "longitude": -71.062569
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482348600,
                      "display": "Boston Common at Brewer Fountain",
                      "latitude": 42.356296,
                      "longitude": -71.062569
                  }, {
                      "start": 1482508800,
                      "end": 1482519600,
                      "display": "Landmark Center",
                      "latitude": 42.34356673,
                      "longitude": -71.10258423
                  }, {
                      "start": 1482768000,
                      "end": 1482780600,
                      "display": "Boston Common at Brewer Fountain",
                      "latitude": 42.356296,
                      "longitude": -71.062569
                  }]
              },
              "bon-me-3": {
                  "description_short": null,
                  "identifier": "bon-me-3",
                  "name": "Bon Me Red",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright red truck. For you, Bon Me.",
                  "rating": 454,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482246000,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482348600,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  }, {
                      "start": 1482350400,
                      "end": 1482368400,
                      "display": "BU East - Commonwealth Ave outside Morse Auditorium",
                      "latitude": 42.34913938,
                      "longitude": -71.10126932
                  }, {
                      "start": 1482422400,
                      "end": 1482435000,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  }, {
                      "start": 1482508800,
                      "end": 1482521400,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  }, {
                      "start": 1482768000,
                      "end": 1482780600,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  }, {
                      "start": 1482854400,
                      "end": 1482867000,
                      "display": "High Street (Rowes Warf)",
                      "latitude": 42.35668844,
                      "longitude": -71.05128589
                  }]
              },
              "bon-me-4": {
                  "description_short": null,
                  "identifier": "bon-me-4",
                  "name": "Bon Me Orange",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright red truck. For you, Bon Me.",
                  "rating": 262,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482246000,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482350400,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  }, {
                      "start": 1482422400,
                      "end": 1482436800,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  }, {
                      "start": 1482508800,
                      "end": 1482523200,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  }, {
                      "start": 1482768000,
                      "end": 1482782400,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  }, {
                      "start": 1482854400,
                      "end": 1482868800,
                      "display": "Dewey Sq on the Greenway",
                      "latitude": 42.35292217,
                      "longitude": -71.05577264
                  }]
              },
              "bon-me-5": {
                  "description_short": null,
                  "identifier": "bon-me-5",
                  "name": "Bon Me Green",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright red truck. For you, Bon Me.",
                  "rating": 134,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1481900400,
                      "display": "Blossom St (behind MGH)",
                      "latitude": 42.363935,
                      "longitude": -71.067994
                  },
                  "open": [{
                      "start": 1482422400,
                      "end": 1482436800,
                      "display": "Stuart St \/ Trinity Pl",
                      "latitude": 42.34843,
                      "longitude": -71.075413
                  }, {
                      "start": 1482508800,
                      "end": 1482537600,
                      "display": "Blossom St (behind MGH)",
                      "latitude": 42.363935,
                      "longitude": -71.067994
                  }]
              },
              "bon-me-6": {
                  "description_short": null,
                  "identifier": "bon-me-6",
                  "name": "Bon Me Purple",
                  "region": "boston",
                  "url": "bonmetruck.com",
                  "phone": "(617) 989-9804",
                  "email": "info@bonmetruck.com",
                  "twitter": "bonme",
                  "description": "Bold, fresh, and fun Asian food; made from scratch and served from a bright Purple truck. For you, Bon Me.",
                  "rating": 14,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482246000,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482372000,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482422400,
                      "end": 1482458400,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482508800,
                      "end": 1482544800,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482595200,
                      "end": 1482631200,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482681600,
                      "end": 1482717600,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482768000,
                      "end": 1482804000,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }, {
                      "start": 1482854400,
                      "end": 1482890400,
                      "display": "Harvard, outside the Science Center",
                      "latitude": 42.37593243,
                      "longitude": -71.11713271
                  }]
              },
              "chicken-rice": {
                  "description_short": "Chicken & rice with addictingly delicious white sauce & spicy-hot red sauce.",
                  "identifier": "chicken-rice",
                  "name": "Chicken & Rice Guys",
                  "region": "boston",
                  "url": "www.cnrguys.com",
                  "phone": "(914) 473-0622",
                  "email": "info@cnrguys.com",
                  "twitter": "CnRGuys",
                  "description": "Chicken & rice with addictingly delicious white sauce & spicy-hot red sauce. Served with rice, lettuce and pita, with a choice of lamb, chicken, both, or just veggies.",
                  "rating": 1140,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482246000,
                      "display": "Lexington: 101 Hartwell Ave",
                      "latitude": 42.465734,
                      "longitude": -71.263826
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482346800,
                      "display": "Milk St. on the Greenway",
                      "latitude": 42.358736,
                      "longitude": -71.051766
                  }, {
                      "start": 1482422400,
                      "end": 1482433200,
                      "display": "1601 Trapelo Rd, Waltham",
                      "latitude": 42.41793906,
                      "longitude": -71.2592049
                  }, {
                      "start": 1482508800,
                      "end": 1482521400,
                      "display": "Dewey Square on the Greenway",
                      "latitude": 42.35292361,
                      "longitude": -71.05575916
                  }, {
                      "start": 1482768000,
                      "end": 1482780600,
                      "display": "High St. on the Greenway",
                      "latitude": 42.356641,
                      "longitude": -71.050876
                  }, {
                      "start": 1482854400,
                      "end": 1482865200,
                      "display": "Lexington: 101 Hartwell Ave",
                      "latitude": 42.465734,
                      "longitude": -71.263826
                  }]
              },
              "chicken-rice-2": {
                  "description_short": null,
                  "identifier": "chicken-rice-2",
                  "name": "Chicken & Rice Guys 2",
                  "region": "boston",
                  "url": "cnrguys.com",
                  "phone": "(914) 473-0622",
                  "email": "info@cnrguys.com",
                  "twitter": "CnRGuys",
                  "description": "Chicken & rice with addictingly delicious white sauce & spicy-hot red sauce. Served with rice, lettuce and pita, with a choice of lamb, chicken, both, or just veggies.",
                  "rating": 740,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482267600,
                      "display": "NEU - Opera Pl at Huntington Ave",
                      "latitude": 42.340605,
                      "longitude": -71.089146
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482346800,
                      "display": "140 4th Ave Waltham",
                      "latitude": 42.39335029,
                      "longitude": -71.25853834
                  }, {
                      "start": 1482422400,
                      "end": 1482433200,
                      "display": "Athena Health parking lot - School St and Wooley Ave",
                      "latitude": 42.36311727,
                      "longitude": -71.1673581
                  }, {
                      "start": 1482508800,
                      "end": 1482523200,
                      "display": "Harvard University Science Center",
                      "latitude": 42.37621774,
                      "longitude": -71.11670091
                  }, {
                      "start": 1482595200,
                      "end": 1482609600,
                      "display": "Harvard University Science Center",
                      "latitude": 42.37621774,
                      "longitude": -71.11670091
                  }, {
                      "start": 1482681600,
                      "end": 1482696000,
                      "display": "Harvard University Science Center",
                      "latitude": 42.37621774,
                      "longitude": -71.11670091
                  }, {
                      "start": 1482768000,
                      "end": 1482778800,
                      "display": "27 Wormwood St.",
                      "latitude": 42.34742496,
                      "longitude": -71.05033064
                  }, {
                      "start": 1482854400,
                      "end": 1482865200,
                      "display": "1 Rogers Street, Cambridge",
                      "latitude": 42.36585109,
                      "longitude": -71.07748084
                  }]
              },
              "chicken-rice-3": {
                  "description_short": null,
                  "identifier": "chicken-rice-3",
                  "name": "Chicken & Rice Guys 3",
                  "region": "boston",
                  "url": "cnrguys.com",
                  "phone": "(914) 473-0622",
                  "email": "info@cnrguys.com",
                  "twitter": "CnRGuys",
                  "description": "Chicken & rice with addictingly delicious white sauce & spicy-hot red sauce. Served with rice, lettuce and pita, with a choice of lamb, chicken, both, or just veggies.",
                  "rating": 422,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1481900400,
                      "display": "Seaport Blvd & Thomson Pl",
                      "latitude": 42.3521743,
                      "longitude": -71.04673009
                  },
                  "open": [{
                      "start": 1482336000,
                      "end": 1482348600,
                      "display": "Back Bay Stuart St at Trinity Place",
                      "latitude": 42.34855369,
                      "longitude": -71.07541853
                  }, {
                      "start": 1482422400,
                      "end": 1482433200,
                      "display": "Greenway Carousel",
                      "latitude": 42.360662,
                      "longitude": -71.052719
                  }, {
                      "start": 1482508800,
                      "end": 1482519600,
                      "display": "Seaport Blvd & Thomson Pl",
                      "latitude": 42.3521743,
                      "longitude": -71.04673009
                  }]
              },
              "chicken-rice-4": {
                  "description_short": null,
                  "identifier": "chicken-rice-4",
                  "name": "Chicken & Rice Guys 4",
                  "region": "boston",
                  "url": "cnrguys.com",
                  "phone": "(914) 473-0622",
                  "email": "info@cnrguys.com",
                  "twitter": "CnRGuys",
                  "description": "Chicken & rice with addictingly delicious white sauce & spicy-hot red sauce. Served with rice, lettuce and pita, with a choice of lamb, chicken, both, or just veggies.",
                  "rating": 191,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1482249600,
                      "display": "1 Rogers St, Cambridge",
                      "latitude": 42.36583578,
                      "longitude": -71.07753521
                  },
                  "open": [{
                      "start": 1482422400,
                      "end": 1482433200,
                      "display": "44 Mall Road, Burlington",
                      "latitude": 42.48694287,
                      "longitude": -71.20549623
                  }, {
                      "start": 1482768000,
                      "end": 1482778800,
                      "display": "36 Cambridge Park Drive, VECNA, Alewife",
                      "latitude": 42.39411753,
                      "longitude": -71.1440558
                  }]
              },
              "cod-squad": {
                  "description_short": null,
                  "identifier": "cod-squad",
                  "name": "The Cod Squad",
                  "region": "boston",
                  "url": "captainmardens.com",
                  "phone": "(781) 235-0860",
                  "email": "nancy@captainmardens.com",
                  "twitter": "codsquadtruck",
                  "description": "We have a lobster roll that you will REALLY LOVE! The same freshest seafood that nearly 400 premier chefs in Boston and beyond order daily for their customers. Fresh haddock, clams, scallops, oysters, lobster, calamari, and more! Come taste for yourself and experience Boston's only lobster roll made with fresh lobster meat!",
                  "rating": 85,
                  "payment_methods": ["cash", "credit_card", "debit_card", "levelup"],
                  "promoted": false,
                  "last": {
                      "time": 1481817600,
                      "display": "Harvard University - Science Center Plaza",
                      "latitude": 42.37669681,
                      "longitude": -71.1181633
                  },
                  "open": []
              },
              "coffee-trike": {
                  "description_short": null,
                  "identifier": "coffee-trike",
                  "name": "The Coffee Trike",
                  "region": "boston",
                  "url": "thecoffeetrike.com",
                  "phone": null,
                  "email": "info@thecoffeetrike.com",
                  "twitter": "thecoffeetrike",
                  "description": "Mobile espresso tricycle.",
                  "rating": 101,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1466258400,
                      "display": "Park St and Tremont St.",
                      "latitude": 42.35654461,
                      "longitude": -71.06319918
                  },
                  "open": []
              },
              "compliments": {
                  "description_short": "Compliments is a locally inspired food truck based out of Somerville, MA. We bring to you made-to-order gourmet food.",
                  "identifier": "compliments",
                  "name": "Compliments Food Truck",
                  "region": "boston",
                  "url": "complimentsfood.com",
                  "phone": "(617) 895-6058",
                  "email": "info@complimentsfood.com",
                  "twitter": "complimentsfood",
                  "description": "Compliments is a locally inspired food truck based out of Somerville, MA. We bring to you made-to-order gourmet sandwiches and delicious fried sides. You can see us on the streets of Boston, at local breweries and of course farmers markets. We offer catering for all events including weddings, birthday parties, business gatherings and more! Also don\u2019t be surprised if you see us at local festivals, fairs and other festivities too. Every order comes with a smile so check out our",
                  "rating": 145,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1460475000,
                      "display": "Clarendon & Boylston",
                      "latitude": 42.35056272,
                      "longitude": -71.07519393
                  },
                  "open": []
              },
              "cookie-monstah": {
                  "description_short": null,
                  "identifier": "cookie-monstah",
                  "name": "Cookie Monstah",
                  "region": "boston",
                  "url": "thecookiemonstah.com",
                  "phone": "(617) 615-6595",
                  "email": "info@thecookiemonstah.com",
                  "twitter": "MonstahTruck",
                  "description": "Boston's freshest food truck devoted exclusively to cookies. Whether looking for a breakfast cookie to get you moving, an afternoon pick-me-up or a cookie dessert, the Monstah has a cookie for all tastes.",
                  "rating": 606,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1471186800,
                      "display": "Brewers Fountain on The Boston Common",
                      "latitude": 42.356128,
                      "longitude": -71.063004
                  },
                  "open": []
              },
              "fresh-food-generation": {
                  "description_short": "Caribbean and Latin America breakfast, lunch, and dinner.",
                  "identifier": "fresh-food-generation",
                  "name": "Fresh Food Generation",
                  "region": "boston",
                  "url": "freshfoodgeneration.com",
                  "phone": "(617) 602-7184",
                  "email": "operations@freshfoodgeneration.com",
                  "twitter": "FFGeneration",
                  "description": "Caribbean and Latin American inspired menu with ingredients from local farms. House made sauces and drinks. Breakfast, lunch, and dinner.",
                  "rating": 23,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1476982800,
                      "display": "Bowdoin Street Health Center",
                      "latitude": 42.30606858,
                      "longitude": -71.06781491
                  },
                  "open": []
              },
              "meimei": {
                  "description_short": null,
                  "identifier": "meimei",
                  "name": "Mei Mei Street Kitchen",
                  "region": "boston",
                  "url": "meimeiboston.com",
                  "phone": null,
                  "email": "hello@meimeiboston.com",
                  "twitter": "meimeiboston",
                  "description": "We are a sibling-run food truck serving up creative, local, sustainable Chinese-American fare. Our farm-sourced menu changes often - come try it for yourself!",
                  "rating": 1195,
                  "payment_methods": ["cash", "credit_card", "debit_card", "levelup"],
                  "promoted": false,
                  "last": {
                      "time": 1482247800,
                      "display": "Dewey Square on the Greenway",
                      "latitude": 42.35285219,
                      "longitude": -71.05557304
                  },
                  "open": [{
                      "start": 1482424200,
                      "end": 1482435000,
                      "display": "Belvidere St at Prudential Station",
                      "latitude": 42.34526891,
                      "longitude": -71.0821305
                  }, {
                      "start": 1482510600,
                      "end": 1482521400,
                      "display": "Dewey Square on the Greenway",
                      "latitude": 42.35285219,
                      "longitude": -71.05557304
                  }, {
                      "start": 1482769800,
                      "end": 1482780600,
                      "display": "Belvidere St at Prudential Station",
                      "latitude": 42.34526891,
                      "longitude": -71.0821305
                  }, {
                      "start": 1482856200,
                      "end": 1482867000,
                      "display": "Dewey Square on the Greenway",
                      "latitude": 42.35285219,
                      "longitude": -71.05557304
                  }]
              },
              "momogoose-3": {
                  "description_short": null,
                  "identifier": "momogoose-3",
                  "name": "Momogoose 3",
                  "region": "boston",
                  "url": "momogoose.com",
                  "phone": "(617) 858-6182",
                  "email": "info@momogoose.com",
                  "twitter": "momogoose",
                  "description": "Gourmet, healthy Southeast Asian cuisine. Vegan, vegetarian, and non-vegetarian. We invest profits to local and global charities, including the United Nation's World Food Programme via our Meal for Meal Initiative.",
                  "rating": 124,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1463583600,
                      "display": "City Hall Plaza",
                      "latitude": 42.35960803,
                      "longitude": -71.05892075
                  },
                  "open": []
              },
              "momogoose-4": {
                  "description_short": null,
                  "identifier": "momogoose-4",
                  "name": "Momogoose 4",
                  "region": "boston",
                  "url": "momogoose.com",
                  "phone": "(617) 858-6182",
                  "email": "info@momogoose.com",
                  "twitter": "momogoose",
                  "description": "Gourmet, healthy Southeast Asian cuisine. Vegan, vegetarian, and non-vegetarian. We invest profits to local and global charities, including the United Nation's World Food Programme via our Meal for Meal Initiative.",
                  "rating": 178,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1459954800,
                      "display": "Rose Fitzgerald Kennedy Greenway @ Congress St",
                      "latitude": 42.35369137,
                      "longitude": -71.05360458
                  },
                  "open": []
              },
              "moyzilla": {
                  "description_short": null,
                  "identifier": "moyzilla",
                  "name": "Moyzilla",
                  "region": "boston",
                  "url": "moyzillaboston.com",
                  "phone": "(781) 640-2361",
                  "email": "moyzilla@gmail.com",
                  "twitter": "moyzillatruck",
                  "description": "Dumplings & Asian Street Food",
                  "rating": 179,
                  "payment_methods": ["cash", "credit_card", "debit_card", "apple_pay"],
                  "promoted": false,
                  "last": {
                      "time": 1476457200,
                      "display": "High St. on the Greenway (High St. & Atlantic Ave.)",
                      "latitude": 42.35665113,
                      "longitude": -71.05107141
                  },
                  "open": []
              },
              "posto": {
                  "description_short": "We are bringing our passion for Neapolitan pizza to the streets!",
                  "identifier": "posto",
                  "name": "Posto Mobile",
                  "region": "boston",
                  "url": "postomobile.com",
                  "phone": "(617) 625-0600",
                  "email": "kmarshall@alpinerestaurantgroup.com",
                  "twitter": "PostoMobile",
                  "description": "Posto Mobile is an extension of our acclaimed Posto Restaurant in Davis Square, Somerville. We are bringing our passion for Neapolitan pizza to the streets!",
                  "rating": 48,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1462806000,
                      "display": "Seaport Blvd",
                      "latitude": 42.35224234,
                      "longitude": -71.04670498
                  },
                  "open": []
              },
              "ramis": {
                  "description_short": "Authentic Middle Eastern foods. Falafel, Shawarma, Homemade Hummus, and more!",
                  "identifier": "ramis",
                  "name": "ChikChak Food Truck",
                  "region": "boston",
                  "url": "ChikChakFoodTruck.com",
                  "phone": "(617) 213-5030",
                  "email": "Matt@chikchakfoodtruck.com",
                  "twitter": "chikchakboston",
                  "description": "Our menu ranges from a variety of authentic Kosher Israeli\/Middle Eastern foods such as Falafel, Shawarma, Homemade Hummus, and much more!",
                  "rating": 91,
                  "payment_methods": ["cash", "credit_card", "debit_card", "apple_pay"],
                  "promoted": false,
                  "last": {
                      "time": 1469368800,
                      "display": "Revere Beach",
                      "latitude": 42.42467258,
                      "longitude": -70.98283142
                  },
                  "open": []
              },
              "revelry": {
                  "description_short": null,
                  "identifier": "revelry",
                  "name": "Revelry",
                  "region": "boston",
                  "url": "revelryboston.com",
                  "phone": "(857) 600-8414",
                  "email": "info@revelryboston.com",
                  "twitter": "revelryboston",
                  "description": "New Orleans Creole\/Cajun food truck. Po boy sandwiches, jambalayas, gumbos, red beans and rice.",
                  "rating": 1,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1480437000,
                      "display": "Washington St & Boylston St",
                      "latitude": 42.35253589,
                      "longitude": -71.06258483
                  },
                  "open": []
              },
              "roxys": {
                  "description_short": null,
                  "identifier": "roxys",
                  "name": "Roxy's Grilled Cheese",
                  "region": "boston",
                  "url": "roxysgrilledcheese.com",
                  "phone": null,
                  "email": "catering@roxysgrilledcheese.com",
                  "twitter": "RoxysGrilledChz",
                  "description": "We don't make your grandma's grilled cheese. We can if you'd like us to, but if you leave it up to us, we're going to put our own twist on things. We're about taking grilled cheese to the next level by adding ingredients you never really thought possible.",
                  "rating": 1233,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1482159600,
                      "display": "BU East",
                      "latitude": 42.3492192,
                      "longitude": -71.10082138
                  },
                  "open": []
              },
              "saigon-alley": {
                  "description_short": "Banh Mi Sandwiches, Rice, Noodles, Spring Rolls, Vietnamese Iced Coffee",
                  "identifier": "saigon-alley",
                  "name": "Saigon Alley",
                  "region": "boston",
                  "url": "saigon-alley.com",
                  "phone": "(207) 351-6745",
                  "email": "evan.englehart@gmail.com",
                  "twitter": "Saigon_Alley",
                  "description": "Vietnamese street food straight from Saigon to Boston.",
                  "rating": 6,
                  "payment_methods": ["cash", "credit_card", "debit_card"],
                  "promoted": false,
                  "last": {
                      "time": 1469286000,
                      "display": "Milford's Multicultural Music & Food Fest",
                      "latitude": 42.15915619,
                      "longitude": -71.49777362
                  },
                  "open": []
              },
              "sante": {
                  "description_short": null,
                  "identifier": "sante",
                  "name": "SANT\u00c9 \u25e6 Mobile Farmhouse Caf\u00e9",
                  "region": "boston",
                  "url": "santemobilecafe.com",
                  "phone": "(781) 775-4804",
                  "email": "info@santemobilecafe.com",
                  "twitter": "santemobilecafe",
                  "description": "We offer salads, wraps, smoothies, coffee and more. All with legendary service!",
                  "rating": 11,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1460646000,
                      "display": "Cambridge Discovery Park",
                      "latitude": 42.39930682,
                      "longitude": -71.14925299
                  },
                  "open": []
              },
              "slideby": {
                  "description_short": null,
                  "identifier": "slideby",
                  "name": "Slideby",
                  "region": "boston",
                  "url": "slidebyboston.com",
                  "phone": "(617) 756-5676",
                  "email": "slidebyboston@yahoo.com",
                  "twitter": "slidebyboston",
                  "description": "Chef-run artisanal slider truck.",
                  "rating": 13,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1479398400,
                      "display": "Stuart st @ Trinity",
                      "latitude": 42.34849693,
                      "longitude": -71.07547112
                  },
                  "open": []
              },
              "sweet-tomatoes": {
                  "description_short": null,
                  "identifier": "sweet-tomatoes",
                  "name": "Sweet Tomatoes Pizza",
                  "region": "boston",
                  "url": "sweettomatoespizzatruck.com",
                  "phone": null,
                  "email": "contact@sweettomatoespizzatruck.com",
                  "twitter": "swttomatotruck",
                  "description": "A thin crust Neapolitan style pizzeria gone mobile.",
                  "rating": 179,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1465570800,
                      "display": "1279 Washington St West Newton",
                      "latitude": 42.34949502,
                      "longitude": -71.22532217
                  },
                  "open": []
              },
              "taco-party": {
                  "description_short": "Building tacos from the ground up since 2013.",
                  "identifier": "taco-party",
                  "name": "Taco Party",
                  "region": "boston",
                  "url": "tacopartytruck.com",
                  "phone": "(617) 905-5829",
                  "email": "keith@tacopartytruck.com",
                  "twitter": "tacopartytruck",
                  "description": "Building tacos from the ground up since 2013.",
                  "rating": 249,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1482165000,
                      "display": "Greenway- Dewey Sq",
                      "latitude": 42.35295297,
                      "longitude": -71.05536863
                  },
                  "open": [{
                      "start": 1482337800,
                      "end": 1482348600,
                      "display": "Pearl St & Franklin St",
                      "latitude": 42.3560372,
                      "longitude": -71.05478952
                  }]
              },
              "tenoch-mexican": {
                  "description_short": null,
                  "identifier": "tenoch-mexican",
                  "name": "Tenoch Mexican",
                  "region": "boston",
                  "url": "tenochmexican.com",
                  "phone": "(781) 395-2221",
                  "email": "info@tenochmexican.com",
                  "twitter": "TenochMexican",
                  "description": "Tenoch is an eat-in, take-out Mexican torter\u00eda w\/3 locations: 24 Riverside Ave., Medford; 3 Lewis St, Boston; and 382 Highland Ave, Somerville and 2 food trucks.",
                  "rating": 183,
                  "payment_methods": ["cash"],
                  "promoted": false,
                  "last": {
                      "time": 1473346800,
                      "display": "Dewey Square. Boston",
                      "latitude": 42.35358429,
                      "longitude": -71.05613021
                  },
                  "open": []
              },
              "tenoch-mexican-2": {
                  "description_short": null,
                  "identifier": "tenoch-mexican-2",
                  "name": "Tenoch Mexican 2",
                  "region": "boston",
                  "url": "tenochmexican.com",
                  "phone": "(781) 395-2221",
                  "email": "info@tenochmexican.com",
                  "twitter": "TenochMexican",
                  "description": "The on-wheels version of our Medford Square restaurant, exclusively selling tortas, Mexican pressed sandwiches.",
                  "rating": 52,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1473433200,
                      "display": "Belvidere Street (Between Dalton St and Harrison Ave)",
                      "latitude": 42.34596795,
                      "longitude": -71.08379407
                  },
                  "open": []
              },
              "zinnekens-waffles": {
                  "description_short": null,
                  "identifier": "zinnekens-waffles",
                  "name": "Zinneken's Waffles",
                  "region": "boston",
                  "url": "zinnetruck.com",
                  "phone": "(617) 905-1821",
                  "email": "zetruck@zinnekens.com",
                  "twitter": "zinnetruck",
                  "description": "Best Belgian waffles made by actual Belgians! We use the finest ingredient imported from Europe to make the most authentic Belgian waffle outside Belgium. Our dough is handcrafted in order to ensure the exclusivity of its texture.",
                  "rating": 169,
                  "payment_methods": null,
                  "promoted": false,
                  "last": {
                      "time": 1482093000,
                      "display": "Harvard University Science Center",
                      "latitude": 42.37602546,
                      "longitude": -71.11588409
                  },
                  "open": []
              }
          }
      }

    }


    return Promise.resolve(res);
  }
}
