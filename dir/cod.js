const Length = {
  Nanometer: "nm",
  Micrometer: "μm",
  Millimeter: "mm",
  Centimeter: "cm",
  Meter: "m",
  Kilometer: "km",
  Inch: "in",
  Yard: "yd",
  USSurveyFoot: "ft-us",
  Foot: "ft",
  Fathom: "fathom",
  Mile: "mi",
  NauticalMile: "nMi",
};

const acceleration = {
  Gforce: "g-force",
  Metrepersecondsquared: "m/s2",
};

const angle = {
  Radian: "rad",
  Degree: "deg",
  Gradian: "grad",
  Arcminute: "arcmin",
  Arcsecond: "arcsec",
};

const apparentPower = {
  VoltAmpere: "VA",
  MillivoltAmpere: "mVA",
  KilovoltAmpere: "kVA",
  MegavoltAmpere: "MVA",
  GigavoltAmpere: "GVA",
};

const current = {
  Ampere: "A",
  Milliampere: "mA",
  Kiloampere: "kA",
};

const area = {
  SquareNanometer: "nm2",
  SquareMicrometer: "μm2",
  SquareMillimeter: "mm2",
  SquareCentimeter: "cm2",
  SquareMeter: "m2",
  Hectare: "ha",
  SquareKilometer: "km2",
  SquareInch: "in2",
  SquareYard: "yd2",
  SquareFoot: "ft2",
  Acre: "ac",
  SquareMile: "mi2",
};

const charge = {
  Coulomb: "c",
  Millicoulomb: "mC",
  Microcoulomb: "μC",
  Nanocoulomb: "nC",
  Picocoulomb: "pC",
};

const digital = {
  Bit: "b",
  Byte: "B",
  Kilobit: "Kb",
  Kilobyte: "KB",
  Megabit: "Mb",
  Megabyte: "MB",
  Gigabit: "Gb",
  Gigabyte: "GB",
  Terabit: "Tb",
  Terabyte: "TB",
};

const each = {
  Each: "ea",
  Dozen: "dz",
};

const energy = {
  Watthour: "Wh",
  Milliwatthour: "mWh",
  Megawatthour: "MWh",
  Kilowatthour: "kWh",
  Gigawatthour: "GWh",
  Joule: "J",
  Kilojoule: "kJ",
  Megajoule: "MJ",
  Gigajoule: "GJ",
};

const force = {
  Newton: "N",
  Kilonewton: "kN",
  Poundforce: "lbf",
};

const frequency = {
  Millihertz: "mHz",
  Hertz: "Hz",
  Megahertz: "MHz",
  Kilohertz: "kHz",
  Gigahertz: "GHz",
  Terahertz: "THz",
  Rotationperminute: "rpm",
  Degreepersecond: "deg/s",
  Radianpersecond: "rad/s",
};

const illuminance = {
  Lux: "lx",
  Footcandle: "ft-cd",
};

const mass = {
  Microgram: "mcg",
  Milligram: "mg",
  Gram: "g",
  Kilogram: "kg",
  MetricTonne: "mt",
  Ounce: "oz",
  Pound: "lb",
  Ton: "t",
};

const massFlowRate = {
  Kilogrampersecond: "kg/s",
  Kilogramperhour: "kg/h",
  Tonperhour: "mt/h",
  Poundperhour: "lb/h",
  Poundpersecond: "lb/s",
};

const pace = {
  Minuteperkilometre: "min/km",
  Secondpermetre: "s/m",
  Minutepermile: "min/mi",
  Secondperfoot: "s/ft",
};

const partsPer = {
  PartperMillion: "ppm",
  PartperBillion: "ppb",
  PartperTrillion: "ppt",
  PartperQuadrillion: "ppq",
};

const pieces = {
  Piece: "pcs",
  BakersDozen: "bk-doz",
  Couple: "cp",
  DozenDozen: "doz-doz",
  Dozen: "doz",
  GreatGross: "gr-gr",
  Gross: "gros",
  HalfDozen: "half-dozen",
  LongHundred: "long-hundred",
  Reams: "ream",
  Scores: "scores",
  SmallGross: "sm-gr",
  Trio: "trio",
};

const reactiveEnergy = {
  VoltAmpereReactiveHour: "VARh",
  MegavoltAmpereReactiveHour: "MVARh",
  KilovoltAmpereReactiveHour: "kVARh",
  MillivoltAmpereReactiveHour: "mVARh",
  GigavoltAmpereReactiveHour: "GVARh",
};

const reactivePower = {
  VoltAmpereReactive: "VAR",
  MillivoltAmpereReactive: "mVAR",
  MegavoltAmpereReactive: "MVAR",
  GigavoltAmpereReactive: "GVAR",
};

const temperature = {
  DegreeCelsius: "C",
  DegreeKelvin: "K",
  DegreeFahrenheit: "F",
  DegreeRankine: "R",
};

const voltage = {
  Volt: "V",
  Millivolt: "mV",
  Kilovolt: "kV",
};

const power = {
  Watt: "W",
  Milliwatt: "mW",
  Kilowatt: "kW",
  Megawatt: "MW",
  Gigawatt: "GW",
  HorsepowerMetric: "PS",
  Britishthermalunitpersecond: "Btu/s",
  Footpoundpersecond: "ft-lb/s",
  HorsepowerBritish: "hp",
};

const pressure = {
  Pascal: "Pa",
  Kilopascal: "kPa",
  Megapascal: "MPa",
  Hectopascal: "hPa",
  Bar: "bar",
  Torr: "torr",
  Poundpersquareinch: "psi",
  Kilopoundpersquareinch: "ksi",
  Inchofmercury: "inHg",
};

const speed = {
  Metrepersecond: "m/s",
  Kilometreperhour: "km/h",
  Millimeterperhour: "mm/h",
  Mileperhour: "mph",
  Knot: "knot",
  Footpersecond: "ft/s",
  Footperminute: "ft/min",
  Inchperhour: "in/h",
};

const time = {
  Nanosecond: "ns",
  Microsecond: "mu",
  Millisecond: "ms",
  Second: "s",
  Minute: "min",
  Hour: "h",
  Day: "d",
  Week: "week",
  Month: "month",
  Year: "year",
};

const volume = {
  CubicMillimeter: "mm3",
  CubicCentimeter: "cm3",
  Millilitre: "ml",
  Centilitre: "cl",
  Decilitre: "dl",
  Litre: "l",
  Kilolitre: "kl",
  Megalitre: "Ml",
  Gigalitre: "Gl",
  Cubicmeter: "m3",
  Cubickilometer: "km3",
  KryddmåTt: "krm",
  Tesked: "tsk",
  Matsked: "msk",
  Kaffekopp: "kkp",
  Glas: "glas",
  Kanna: "kanna",
  Teaspoon: "tsp",
  Tablespoon: "Tbs",
  Cubicinch: "in3",
  FluidOunce: "fl-oz",
  Cup: "cup",
  Pint: "pnt",
  Quart: "qt",
  Gallon: "gal",
  Cubicfoot: "ft3",
  Cubicyard: "yd3",
};

const volumeFlowRate = {
  sCentilitrepersecond: "cl/s",
  CubicCentimeterpersecond: "cm3/s",
  CubicMillimeterpersecond: "mm3/s",
  Cubicfootperhour: "ft3/h",
  Cubicfootperminute: "ft3/min",
  Cubicfootpersecond: "ft3/s",
  Cubicinchperhour: "in3/h",
  Cubicinchperminute: "in3/min",
  Cubicinchpersecond: "in3/s",
  Cubickilometerpersecond: "km3/s",
  Cubicmeterperhour: "m3/h",
  Cubicmeterperminute: "m3/min",
  Cubicmeterpersecond: "m3/s",
  Cubicyardperhour: "yd3/h",
  Cubicyardperminute: "yd3/min",
  Cubicyardpersecond: "yd3/s",
  Cuppersecond: "cup/s",
  Decilitrepersecond: "dl/s",
  FluidOunceperhour: "fl-oz/h",
  FluidOunceperminute: "fl-oz/min",
  FluidOuncepersecond: "fl-oz/s",
  Gallonperhour: "gal/h",
  Gallonperminute: "gal/min",
  Gallonpersecond: "gal/s",
  Kilolitreperhour: "kl/h",
  Kilolitreperminute: "kl/min",
  Kilolitrepersecond: "kl/s",
  KilovoltAmpereReactive: "kVAR",
  Litreperhour: "l/h",
  Litreperminute: "l/min",
  Litrepersecond: "l/s",
  Millilitrepersecond: "ml/s",
  Pintperhour: "pnt/h",
  Pintperminute: "pnt/min",
  Pintpersecond: "pnt/s",
  Quartpersecond: "qt/s",
  Tablespoonpersecond: "Tbs/s",
  Teaspoonpersecond: "tsp/s",
};