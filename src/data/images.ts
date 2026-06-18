// Curated Unsplash imagery for Umbrella Health.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  // Clinical
  consult: u("photo-1631815588090-d4bfec5b1ccb", 1800),
  doctorPatient: u("photo-1559757148-5c350d0d3c56", 1600),
  reception: u("photo-1629909613654-28e377c37b09", 2000),
  examRoom: u("photo-1666214280557-f1b5022eb634", 1600),
  ekg: u("photo-1576091160550-2173dba999ef", 1400),
  lab: u("photo-1579154204601-01588f351e67", 1400),
  ultrasound: u("photo-1666214277657-50d76b1d0d6f", 1400),
  sleepStudy: u("photo-1520206183501-b80df61043c2", 1400),
  microscope: u("photo-1582719471384-894fbb16e074", 1400),

  // People
  founder: u("photo-1612349317150-e413f6a5b16d", 1200),
  founderAlt: u("photo-1622253692010-333f2da6031d", 1200),
  doctorWoman1: u("photo-1559839734-2b71ea197ec2", 900),
  doctorMan1: u("photo-1537368910025-700350fe46c7", 900),
  doctorWoman2: u("photo-1594824476967-48c8b964273f", 900),
  doctorMan2: u("photo-1622902046580-2b47f47f5471", 900),
  doctorWoman3: u("photo-1551601651-2a8555f1a136", 900),
  doctorMan3: u("photo-1612531386530-97286d97c2d2", 900),

  // Lifestyle / patients
  glp1Hero: u("photo-1571019613454-1cb2f99b2d8b", 1600),
  longevityHero: u("photo-1571902943202-507ec2618e8f", 1600),
  patientHappy: u("photo-1582719508461-905c673771fd", 1600),
  patientReading: u("photo-1573497019940-1c28c88b4f3e", 1600),
  patientDog: u("photo-1583337130417-3346a1be7dee", 1800),
  busyPro: u("photo-1573496359142-b8d87734a5a2", 1600),
  exec: u("photo-1521119989659-a83eee488004", 1600),

  // NYC
  nyc: u("photo-1543716091-a840c05249ec", 2000),
  brooklyn: u("photo-1518391846015-55a9cc003b25", 1800),
  soho: u("photo-1499781350541-7783f6c6a0c8", 1800),
  unionSquare: u("photo-1496442226666-8d4d0e62e6e9", 1800),
  tribeca: u("photo-1485871981521-5b1fd3805eee", 1800),
};
