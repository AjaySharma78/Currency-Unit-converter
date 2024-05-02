const BASE_URL = "https://currency-converter-pro1.p.rapidapi.com/convert";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e594862d6msh715ca40bd2fa8d5p1b54b8jsndb8b8067f91e",
    "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
  },
};
const dropdowns = document.querySelectorAll(".dropdown #for");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from #for");
const toCurr = document.querySelector(".to #for");
const msg = document.querySelector(".msg");
const swap = document.getElementById("swap");

function arr(List) {
  for (let select of dropdowns) {
    for (currCode in List) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      newOption.className = "option";
      newOption.id = "option";
      if (
        (select.name === "from" &&
          [
            "USD",
            "Foot",
            "Gforce",
            "Radian",
            "VoltAmpere",
            "Ampere",
            "Hectare",
            "Coulomb",
            "Terabit",
            "Dozen",
            "Watthour",
            "Poundforce",
            "Millihertz",
            "Footcandle",
            "Microgram",
            "Tonperhour",
            " Secondpermetre",
            "PartperMillion",
            "Piece",
            "VoltAmpereReactiveHour",
            "VoltAmpereReactive",
            "DegreeCelsius",
            "Kilovolt",
            "Gigawatt",
            "Pascal",
            "Metrepersecond",
            "Nanosecond",
            "CubicMillimeter",
            "Litreperhour",
          ].includes(currCode)) ||
        (select.name === "to" &&
          [
            "NPR",
            "Yard",
            "Metrepersecondsquared",
            "Degree",
            "GigavoltAmpere",
            "Kiloampere",
            "Acre",
            "Picocoulomb",
            "Bit",
            "Each",
            "Joule",
            "Newton",
            "Hertz",
            "Lux",
            "Gram",
            "Poundperhour",
            "Minutepermile",
            "PartperBillion",
            "Couple",
            "GigavoltAmpereReactiveHour",
            "GVAR",
            "GigavoltAmpereReactive",
            "DegreeRankine",
            "Volt",
            "Watt",
            "Bar",
            "knot",
            "Hour",
            "Litre",
            "Cuppersecond",
          ].includes(currCode))
      ) {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
      if (lenghtUnit.value === "Currency") {
        updateFlag(evt.target);
      }
    });
  }
}

const updateExchangeRate = async () => {
  let amount = document.getElementById("input");
  let amtVal = amount.value;
  if ((amtVal === "", amtVal < 1)) {
    amtVal = 1;
    amount.value = "1";
  }
  var URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}&amount=1`;
  let response = await fetch(URL, options);
  let data = await response.json();
  let rate = data.meta.rates.from;
  let finalAmount = amtVal * rate;
  msg.innerText = `${finalAmount.toFixed(3)} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

window.addEventListener("load", () => {
  arr(countryList);
  updateExchangeRate();
});

var lenghtUnit = document.getElementById("country");
const topBox = document.getElementById("top");
const downBox = document.getElementById("down");
const mainBox = document.getElementById("mainBox");
const button = document.getElementById("button");
const downSelect = document.querySelector("#down #for");
const resultText = document.getElementById("resultText");

swap.addEventListener("click", function () {
  if (lenghtUnit.value === "Currency") {
    const fromCurrValue = fromCurr.value;
    const toCurrValue = toCurr.value;
    fromCurr.value = toCurrValue;
    toCurr.value = fromCurrValue;
    updateExchangeRate();
    updateFlag(fromCurr);
    updateFlag(toCurr);
  } else {
    const fromCurrValue = fromCurr.value;
    const toCurrValue = toCurr.value;
    fromCurr.value = toCurrValue;
    toCurr.value = fromCurrValue;
  }
});

let from;
let toLen;

function logNameAndAge(obj) {
  if (obj.hasOwnProperty(fromCurr.value)) {
    from = obj[fromCurr.value];
  }
  if (obj.hasOwnProperty(toCurr.value)) {
    toLen = obj[toCurr.value];
  }
}

lenghtUnit.addEventListener(
  "change",
  function () {
    fromCurr.innerHTML = "";
    toCurr.innerHTML = "";
    if (this.value === "Currency") {
      arr(countryList);
    } else {
      const data = {
        Length: Length,
        acceleration: acceleration,
        angle: angle,
        apparentPower: apparentPower,
        current: current,
        area: area,
        charge: charge,
        digital: digital,
        each: each,
        energy: energy,
        force: force,
        frequency: frequency,
        illuminance: illuminance,
        mass: mass,
        massFlowRate: massFlowRate,
        pace: pace,
        partsPer: partsPer,
        pieces: pieces,
        reactiveEnergy: reactiveEnergy,
        reactivePower: reactivePower,
        temperature: temperature,
        voltage: voltage,
        power: power,
        pressure: pressure,
        speed: speed,
        time: time,
        volume: volume,
        volumeFlowRate: volumeFlowRate,
      }[this.value];
      if (data) {
        arr(data);
        logNameAndAge(data);
        update();
      }
    }
  },
  false
);

const arry1 = [button, downBox, mainBox];
lenghtUnit.addEventListener(
  "change",
  function () {
    if (this.value === "Currency") {
      updateExchangeRate();
      let img = document.querySelectorAll("img");
      img.forEach((e) => {
        e.style.visibility = "visible";
      });
      document.body.style.background =
        "linear-gradient(to right top,rgb(248 113 113),rgb(254 202 202))";
      topBox.style.background = `linear-gradient(to right top,rgb(252 165 165),rgb(239 68 68))`;
      downSelect.style.backgroundColor = "rgb(248 113 113)";
      resultText.style.color = "rgb(248 113 113)";
      resultText.style.borderColor = "rgb(248 113 113)";
      swap.style.backgroundColor = "#ff9f9f";
      arry1.map((e) => {
        e.style.backgroundColor = "#f9cdcd";
        e.style.color = "rgb(248 113 113)";
        e.style.borderColor = "rgb(248 113 113)";
      });
    } else {
      document.body.style.background =
        "linear-gradient(to left top,rgb(96 165 250),rgb(191 219 254))";
      topBox.style.background = `linear-gradient(to right top,rgb(147 197 253), rgb(59 130 246))`;
      swap.style.backgroundColor = "rgb(137 193 255)";
      downSelect.style.backgroundColor = "rgb(96 165 250)";
      resultText.style.color = "#3b82f6";
      resultText.style.borderColor = "#3b82f6";
      arry1.map((e) => {
        e.style.backgroundColor = "#bcdaff";
        e.style.borderColor = "#3b82f6";
        e.style.color = "#3b82f6";
      });
      let img = document.querySelectorAll("img");
      img.forEach((e) => {
        e.style.visibility = "hidden";
      });
    }
  },
  false
);

const update = async () => {
  let amount = document.getElementById("input");
  let amtVal = amount.value;
  if ((amtVal === "", amtVal < 1)) {
    amtVal = 1;
    amount.value = "1";
  }

  const url = `https://measurement-unit-converter.p.rapidapi.com/${lenghtUnit.value}?value=${amount.value}&from=${from}&to=${toLen}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e594862d6msh715ca40bd2fa8d5p1b54b8jsndb8b8067f91e",
      "X-RapidAPI-Host": "measurement-unit-converter.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const newRes = await response.json();
  msg.innerText = newRes.value;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (lenghtUnit.value === "Currency") {
    updateExchangeRate();
  } else {
    update();
  }
});
