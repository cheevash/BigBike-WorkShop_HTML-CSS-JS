/**
 * APEX MOTORS | PREMIER SUPERBIKE & MOTORSPORT GEAR
 * High-Octane Interactive Frontend Engine
 */

// ------------------- Currency Exchange Rates & State -------------------
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, locale: "en-US" },
  THB: { symbol: "฿", rate: 36.0, locale: "th-TH" },
  EUR: { symbol: "€", rate: 0.92, locale: "de-DE" },
};

let currentCurrency = "USD";

// ------------------- Products Database -------------------
const PRODUCTS_DATA = [
  {
    id: "p1",
    name: "AGV Pista GP RR Carbon Helmet",
    category: "helmets",
    priceUSD: 1450,
    oldPriceUSD: 1650,
    image: "image/l1.png",
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    badgeType: "green",
    description: "100% carbon fiber racing helmet developed for MotoGP world champions. Extreme optical class 1 visor with 190° field of view.",
    specs: ["100% Carbon Fiber", "Weight: 1,450g", "FIM Homologated", "Hydration System Included"]
  },
  {
    id: "p2",
    name: "Shoei X-Fifteen Marquez Replica",
    category: "helmets",
    priceUSD: 980,
    oldPriceUSD: 1120,
    image: "image/l2.png",
    rating: 4.8,
    reviews: 94,
    badge: "Popular",
    badgeType: "orange",
    description: "Aerodynamic engineering refined through wind-tunnel testing at speeds above 350 km/h with high-efficiency cooling.",
    specs: ["AIM+ Multi-Ply Shell", "Weight: 1,520g", "CWR-F2R Racing Visor", "E.Q.R.S. Safety Cheek Pads"]
  },
  {
    id: "p3",
    name: "Arai RX-7V EVO Carbon Racing",
    category: "helmets",
    priceUSD: 1150,
    oldPriceUSD: 1300,
    image: "image/l3.png",
    rating: 4.9,
    reviews: 86,
    badge: "Top Rated",
    badgeType: "green",
    description: "Smooth R75 round shape design for glancing off impact energy with Diffuser Type 12 advanced air channels.",
    specs: ["PB-SNC2 Shell", "Weight: 1,490g", "ECE 22.06 & FIM", "VAS Shield Mechanism"]
  },
  {
    id: "p4",
    name: "Shark Race-R Pro GP FIM Racing",
    category: "helmets",
    priceUSD: 890,
    oldPriceUSD: 990,
    image: "image/l4.png",
    rating: 4.7,
    reviews: 64,
    badge: "20% OFF",
    badgeType: "orange",
    description: "Equipped with high-performance aerodynamic wing spoiler reducing aerodynamic drag at ultra-high top speed.",
    specs: ["COVA Carbon Matrix", "Weight: 1,400g", "Optical Class 1 Shield", "Quick Release Fastener"]
  },
  {
    id: "p5",
    name: "HJC RPHA 1 Red Bull GP Helmet",
    category: "helmets",
    priceUSD: 799,
    oldPriceUSD: 920,
    image: "image/l5.png",
    rating: 4.8,
    reviews: 72,
    badge: "Special Edition",
    badgeType: "green",
    description: "Official licensed Red Bull racing helmet with reinforced Carbon-Aramid hybrid shell and SilverCool anti-bacterial lining.",
    specs: ["P.I.M. Plus Structure", "Weight: 1,410g", "Tear-off Ready", "Emergency Release Kit"]
  },
  {
    id: "p6",
    name: "Bell Race Star Flex DLX Carbon",
    category: "helmets",
    priceUSD: 760,
    oldPriceUSD: 880,
    image: "image/l6.png",
    rating: 4.6,
    reviews: 51,
    badge: "Sale",
    badgeType: "orange",
    description: "Dedicated 3K carbon shell with cutting-edge Flex progressive 3-layer energy liner to handle low, mid and high-speed impacts.",
    specs: ["3K Carbon Fiber", "Weight: 1,500g", "ProTint Photochromic Visor", "Magnefusion Magnetic Pads"]
  },
  {
    id: "p7",
    name: "Alpinestars Supertech R Vented Boots",
    category: "boots",
    priceUSD: 549,
    oldPriceUSD: 620,
    image: "image/a1.png",
    rating: 4.9,
    reviews: 110,
    badge: "Pro Racing",
    badgeType: "green",
    description: "Evolutionary bio-mechanical internal ankle brace with replaceable TPU toe slider and ultra-lightweight microfiber outer.",
    specs: ["Microfiber & TPU Chassis", "Separate Inner Biomechanical Bootie", "CE Certified Level 2", "Replaceable Magnesium Sliders"]
  },
  {
    id: "p8",
    name: "Dainese Full Metal 6 Titanium Gloves",
    category: "gloves",
    priceUSD: 449,
    oldPriceUSD: 499,
    image: "image/a2.png",
    rating: 4.8,
    reviews: 88,
    badge: "Titanium",
    badgeType: "green",
    description: "Goatskin leather construction reinforced with titanium plates and carbon fiber inserts at knuckles and back of hand.",
    specs: ["Goat Leather & Kevlar Stitching", "Titanium & Carbon Knuckle Protectors", "DCP Distortion Control on Pinky", "Pre-curved Racing Cuff"]
  },
  {
    id: "p9",
    name: "Akrapovič Full Titanium Racing Exhaust",
    category: "exhausts",
    priceUSD: 2850,
    oldPriceUSD: 3200,
    image: "image/a3.png",
    rating: 5.0,
    reviews: 42,
    badge: "+12.5 HP",
    badgeType: "orange",
    description: "Engineered from proprietary high-grade titanium, shedding -5.8 kg while providing an unmistakable acoustic roar.",
    specs: ["Pure Ultralight Titanium", "Weight Savings: -5.8 kg", "Power Gain: +12.5 HP @ 11,200 rpm", "Carbon Endcap & Bracket"]
  },
  {
    id: "p10",
    name: "Brembo GP4-RX CNC Billet Calipers",
    category: "performance",
    priceUSD: 1680,
    oldPriceUSD: 1890,
    image: "image/a4.png",
    rating: 4.9,
    reviews: 37,
    badge: "CNC Billet",
    badgeType: "green",
    description: "Machined from solid aeronautical billet alloy with high-luster nickel surface coating and 4 x 32mm titanium pistons.",
    specs: ["Radial 108mm Mount", "Nickel Plated Solid Billet", "Dual Piston 32mm Design", "Track Ready Sintered Pads"]
  },
  {
    id: "p11",
    name: "Öhlins FGR 250 Superbike Front Forks",
    category: "performance",
    priceUSD: 3450,
    oldPriceUSD: 3800,
    image: "image/a5.png",
    rating: 5.0,
    reviews: 19,
    badge: "Factory Spec",
    badgeType: "orange",
    description: "Pressurized TTX25 cartridge system offering surgical feedback and unwavering stability under extreme braking.",
    specs: ["TTX25 Pressurized Tech", "43mm DLC Coated Inner Tubes", "Billet Lower Fork Bottoms", "Independent Rebound/Compression"]
  },
  {
    id: "p12",
    name: "Dainese Misano 2 D-Air Leather Suit",
    category: "suits",
    priceUSD: 2499,
    oldPriceUSD: 2799,
    image: "image/a6.png",
    rating: 4.9,
    reviews: 33,
    badge: "Airbag Tech",
    badgeType: "green",
    description: "Premium full-grain D-skin 2.0 leather suit integrated with wireless intelligent D-Air racing airbag system.",
    specs: ["Wireless D-Air Airbag", "D-Skin 2.0 Full-Grain Cowhide", "Titanium Seamless Shoulder Plates", "Bi-axial Elastic Inserts"]
  }
];

// ------------------- Showroom Superbikes & Comparison Data -------------------
const SHOWROOM_BIKES = [
  {
    id: "bike-ktm-1290",
    name: "KTM 1290 SUPER DUKE R EVO",
    tagline: "THE BEAST - APEX PREDATOR",
    image: "image/bike.png",
    priceUSD: 19599,
    powerHP: 180,
    torqueNM: 140,
    weightKG: 180,
    topSpeedKMH: 290,
    zeroToHundred: 2.7,
    specs: {
      engine: "1,301 cc LC8 V-Twin",
      power: "180 HP @ 9,500 rpm",
      torque: "140 Nm @ 8,000 rpm",
      weight: "180 kg (Dry)",
      topSpeed: "290 km/h",
      transmission: "6-Speed with Quickshifter+"
    }
  },
  {
    id: "bike-panigale-v4",
    name: "DUCATI PANIGALE V4 S 2026",
    tagline: "THE ART OF RACING PERFECTION",
    image: "image/bike2.png",
    priceUSD: 31500,
    powerHP: 215.5,
    torqueNM: 123.6,
    weightKG: 174,
    topSpeedKMH: 325,
    zeroToHundred: 2.6,
    specs: {
      engine: "1,103 cc Desmosedici Stradale V4",
      power: "215.5 HP @ 13,000 rpm",
      torque: "123.6 Nm @ 9,500 rpm",
      weight: "174 kg (Dry)",
      topSpeed: "325 km/h",
      transmission: "Ducati Quick Shift (DQS) EVO 2"
    }
  },
  {
    id: "bike-superduke-gt",
    name: "KTM 1290 SUPER DUKE GT",
    tagline: "CONTINENTAL CRUSHING SPEED",
    image: "image/bike3.png",
    priceUSD: 21299,
    powerHP: 175,
    torqueNM: 141,
    weightKG: 209,
    topSpeedKMH: 280,
    zeroToHundred: 2.9,
    specs: {
      engine: "1,301 cc LC8 V-Twin Sport-Tourer",
      power: "175 HP @ 9,750 rpm",
      torque: "141 Nm @ 7,000 rpm",
      weight: "209 kg (Dry)",
      topSpeed: "280 km/h",
      transmission: "Semi-Active WP Suspension"
    }
  }
];

// ------------------- Dealership Hubs Data -------------------
const DEALERSHIP_HUBS = {
  bkk: {
    id: "bkk",
    title: "Bangkok Flagship & Circuit Hub",
    location: "Bangkok & Chang International Circuit, Thailand",
    address: "888 Apex Circuit Way, Bangna-Trad Km.18, Bangkok",
    hours: "09:00 - 19:30 Daily (Dyno Open Weekends)",
    phone: "+66 (02) 888-APEX (2739)",
    fleet: "KTM 1290 Super Duke R, Ducati Panigale V4 S, KTM Super Duke GT",
    facilities: ["Dyno Tuning Lab & Custom Mapping", "Certified Race Pit & Tire Service", "VIP Rider Lounge & Cafe", "Trackday Circuit Support"]
  },
  cal: {
    id: "cal",
    title: "California Speedway Apex Center",
    location: "Laguna Seca Raceway Hub, California, USA",
    address: "1021 Moto Raceway Rd, Monterey, CA 93940",
    hours: "08:30 - 18:30 Mon - Sat",
    phone: "+1 (831) 555-APEX (2739)",
    fleet: "Ducati Panigale V4 S, KTM 1290 Super Duke R",
    facilities: ["Track Test Circuit Sessions", "Öhlins Pro Suspension Center", "Akrapovič Authorized Titanium Lab", "Parts & Racing Gear Warehouse"]
  },
  mil: {
    id: "mil",
    title: "Milan Monza Motorsport Hub",
    location: "Monza Circuit Center, Milan, Italy",
    address: "Via Autodromo 42, 20900 Monza (MB), Italy",
    hours: "09:00 - 19:30 Mon - Sat",
    phone: "+39 (02) 8920-APEX (2739)",
    fleet: "Ducati Panigale V4 S 2026, KTM Super Duke R EVO",
    facilities: ["Dainese D-Air Airbag Service", "Brembo Factory Racing Calipers Lab", "Custom ECU Dyno Benchmark", "VIP Factory Hospitality"]
  },
  tok: {
    id: "tok",
    title: "Tokyo Fuji Speed Hub",
    location: "Fuji Speedway Gate Hub, Shizuoka, Japan",
    address: "77 Speedway Boulevard, Oyama, Shizuoka, Japan",
    hours: "10:00 - 20:00 Tue - Sun",
    phone: "+81 (03) 7777-APEX (2739)",
    fleet: "KTM 1290 Super Duke R, Yamaha YZF-R1M, Panigale V4 S",
    facilities: ["Shoei & Arai Racing Head Scan", "Laser Chassis Alignment", "Titanium Exhaust Fabrication", "Trackday Bike Transport"]
  }
};

// ------------------- App State -------------------
let cart = JSON.parse(localStorage.getItem("apex_cart")) || [
  { productId: "p1", qty: 1 }
];
let wishlist = JSON.parse(localStorage.getItem("apex_wishlist")) || ["p2", "p9"];
let appliedPromo = null;

// ------------------- Utility Formatters -------------------
function formatPrice(amountUSD) {
  const curr = CURRENCIES[currentCurrency];
  const converted = amountUSD * curr.rate;
  
  if (currentCurrency === "THB") {
    return `${curr.symbol}${converted.toLocaleString("th-TH", { maximumFractionDigits: 0 })}`;
  } else if (currentCurrency === "EUR") {
    return `${curr.symbol}${converted.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${curr.symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// ------------------- Real-time Countdown Timer -------------------
function initCountdownTimer() {
  const storedTarget = localStorage.getItem("apex_launch_target");
  let targetTime;
  if (storedTarget && Number(storedTarget) > Date.now()) {
    targetTime = Number(storedTarget);
  } else {
    targetTime = Date.now() + (60 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);
    localStorage.setItem("apex_launch_target", targetTime);
  }

  function update() {
    const diff = Math.max(0, targetTime - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const dEl = document.getElementById("timerDays");
    const hEl = document.getElementById("timerHours");
    const mEl = document.getElementById("timerMins");
    const sEl = document.getElementById("timerSecs");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
    if (sEl) sEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ------------------- Toast Notification Helper -------------------
function showToast(title, message, icon = "fa-check-circle") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon"><i class="fas ${icon}"></i></div>
    <div class="toast-body">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ------------------- 🔊 Web Audio API Engine Sound & Rev Simulator -------------------
let audioCtx = null;
let engineOsc1 = null;
let engineOsc2 = null;
let engineGain = null;
let engineFilter = null;
let isRevving = false;
let currentRPM = 1200;
let rpmInterval = null;
let currentEngineSoundType = "vtwin";

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function startEngineAudio() {
  const ctx = getAudioContext();
  if (engineGain) return; // already started

  engineGain = ctx.createGain();
  engineGain.gain.setValueAtTime(0.12, ctx.currentTime);

  engineFilter = ctx.createBiquadFilter();
  engineFilter.type = "lowpass";
  engineFilter.frequency.setValueAtTime(450, ctx.currentTime);
  engineFilter.Q.setValueAtTime(3.5, ctx.currentTime);

  // Sub oscillator
  engineOsc1 = ctx.createOscillator();
  engineOsc1.type = currentEngineSoundType === "vtwin" ? "sawtooth" : (currentEngineSoundType === "v4" ? "triangle" : "sawtooth");
  engineOsc1.frequency.setValueAtTime(55, ctx.currentTime);

  // Harmonic oscillator
  engineOsc2 = ctx.createOscillator();
  engineOsc2.type = "sawtooth";
  engineOsc2.frequency.setValueAtTime(110, ctx.currentTime);

  engineOsc1.connect(engineFilter);
  engineOsc2.connect(engineFilter);
  engineFilter.connect(engineGain);
  engineGain.connect(ctx.destination);

  engineOsc1.start();
  engineOsc2.start();
}

function stopEngineAudio() {
  if (engineGain && audioCtx) {
    engineGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    setTimeout(() => {
      try {
        if (engineOsc1) engineOsc1.stop();
        if (engineOsc2) engineOsc2.stop();
      } catch (e) {}
      engineOsc1 = null;
      engineOsc2 = null;
      engineGain = null;
      engineFilter = null;
    }, 350);
  }
}

function updateEngineFrequency(rpm) {
  if (!audioCtx || !engineOsc1 || !engineOsc2 || !engineFilter) return;
  const ctx = audioCtx;
  
  // Frequency mapping based on engine sound profile
  let baseFreq = (rpm / 60) * (currentEngineSoundType === "vtwin" ? 1.0 : (currentEngineSoundType === "v4" ? 1.5 : 2.0));
  baseFreq = Math.max(30, Math.min(baseFreq, 650));

  engineOsc1.frequency.setTargetAtTime(baseFreq, ctx.currentTime, 0.05);
  engineOsc2.frequency.setTargetAtTime(baseFreq * 2.0, ctx.currentTime, 0.05);
  
  const filterCutoff = 350 + (rpm / 14000) * 2800;
  engineFilter.frequency.setTargetAtTime(filterCutoff, ctx.currentTime, 0.05);
}

function updateTachometerUI(rpm) {
  const rpmNumEl = document.getElementById("rpmDigitalDisplay");
  const needleEl = document.getElementById("tachoNeedle");
  
  if (rpmNumEl) rpmNumEl.textContent = rpm.toLocaleString();
  
  // Needle rotation: 0 RPM = -80deg, 14,000 RPM = +80deg
  if (needleEl) {
    const angle = -80 + (rpm / 14000) * 160;
    needleEl.style.transform = `rotate(${angle}deg)`;
  }

  // Shift LED indicators
  const leds = document.querySelectorAll(".shift-led");
  leds.forEach(led => {
    const threshold = Number(led.dataset.rpmThreshold || 0);
    if (rpm >= threshold) {
      led.classList.add("on");
    } else {
      led.classList.remove("on");
    }
  });
}

function startThrottleRev() {
  startEngineAudio();
  isRevving = true;
  const throttleBtn = document.getElementById("throttleBtn");
  if (throttleBtn) throttleBtn.classList.add("revving");

  clearInterval(rpmInterval);
  rpmInterval = setInterval(() => {
    if (isRevving) {
      currentRPM = Math.min(13800, currentRPM + 450);
    } else {
      currentRPM = Math.max(1200, currentRPM - 380);
      if (currentRPM <= 1250) {
        clearInterval(rpmInterval);
        stopEngineAudio();
      }
    }
    updateEngineFrequency(currentRPM);
    updateTachometerUI(currentRPM);
  }, 35);
}

function stopThrottleRev() {
  isRevving = false;
  const throttleBtn = document.getElementById("throttleBtn");
  if (throttleBtn) throttleBtn.classList.remove("revving");
}

function initEngineSimulator() {
  const throttleBtn = document.getElementById("throttleBtn");
  if (throttleBtn) {
    throttleBtn.addEventListener("mousedown", startThrottleRev);
    window.addEventListener("mouseup", stopThrottleRev);
    throttleBtn.addEventListener("touchstart", (e) => { e.preventDefault(); startThrottleRev(); });
    window.addEventListener("touchend", stopThrottleRev);
  }

  const engineTypeSelect = document.getElementById("engineSoundProfileSelect");
  if (engineTypeSelect) {
    engineTypeSelect.addEventListener("change", (e) => {
      currentEngineSoundType = e.target.value;
      showToast("Engine Acoustic Profile", `Switched sound to ${e.target.options[e.target.selectedIndex].text}`, "fa-volume-up");
    });
  }
}

// ------------------- 🎨 360° Livery & Color Customizer -------------------
function setHeroLivery(colorName) {
  const bikeImg = document.getElementById("heroMainBike");
  const swatches = document.querySelectorAll(".color-swatch");

  if (!bikeImg) return;

  bikeImg.className = `hero-main-img livery-${colorName}`;

  swatches.forEach(s => {
    if (s.dataset.color === colorName) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });

  const names = {
    orange: "Ready-to-Race Orange",
    lime: "Toxic Acid Lime (Kawasaki Spec)",
    red: "Ducati Corse Red",
    stealth: "Stealth Carbon Black",
    blue: "Yamaha Racing Blue"
  };

  showToast("Livery Customized", `Switched to ${names[colorName] || colorName} scheme.`, "fa-palette");
}

// ------------------- ⚖️ Head-to-Head Comparison Tool -------------------
function renderComparison() {
  const selectA = document.getElementById("compareBikeA");
  const selectB = document.getElementById("compareBikeB");
  if (!selectA || !selectB) return;

  const bikeA = SHOWROOM_BIKES.find(b => b.id === selectA.value) || SHOWROOM_BIKES[0];
  const bikeB = SHOWROOM_BIKES.find(b => b.id === selectB.value) || SHOWROOM_BIKES[1];

  // Cards
  document.getElementById("battleCardA").innerHTML = `
    <img src="${bikeA.image}" alt="${bikeA.name}" class="battle-bike-img" />
    <h4 class="battle-bike-title">${bikeA.name}</h4>
    <div class="battle-bike-price">${formatPrice(bikeA.priceUSD)}</div>
  `;

  document.getElementById("battleCardB").innerHTML = `
    <img src="${bikeB.image}" alt="${bikeB.name}" class="battle-bike-img" />
    <h4 class="battle-bike-title">${bikeB.name}</h4>
    <div class="battle-bike-price" style="color: var(--accent-cyan);">${formatPrice(bikeB.priceUSD)}</div>
  `;

  // Calculate Power-to-weight
  const ptwA = (bikeA.powerHP / bikeA.weightKG).toFixed(2);
  const ptwB = (bikeB.powerHP / bikeB.weightKG).toFixed(2);

  // Update numbers
  document.getElementById("valPowerA").textContent = `${bikeA.powerHP} HP`;
  document.getElementById("valPowerB").textContent = `${bikeB.powerHP} HP`;
  const maxHP = 250;
  document.getElementById("meterPowerA").style.width = `${(bikeA.powerHP / maxHP) * 100}%`;
  document.getElementById("meterPowerB").style.width = `${(bikeB.powerHP / maxHP) * 100}%`;

  document.getElementById("valTorqueA").textContent = `${bikeA.torqueNM} Nm`;
  document.getElementById("valTorqueB").textContent = `${bikeB.torqueNM} Nm`;
  const maxTorque = 160;
  document.getElementById("meterTorqueA").style.width = `${(bikeA.torqueNM / maxTorque) * 100}%`;
  document.getElementById("meterTorqueB").style.width = `${(bikeB.torqueNM / maxTorque) * 100}%`;

  document.getElementById("valPtwA").textContent = `${ptwA} HP/kg`;
  document.getElementById("valPtwB").textContent = `${ptwB} HP/kg`;
  const maxPtw = 1.5;
  document.getElementById("meterPtwA").style.width = `${(ptwA / maxPtw) * 100}%`;
  document.getElementById("meterPtwB").style.width = `${(ptwB / maxPtw) * 100}%`;

  document.getElementById("valSpeedA").textContent = `${bikeA.topSpeedKMH} km/h`;
  document.getElementById("valSpeedB").textContent = `${bikeB.topSpeedKMH} km/h`;
  const maxSpeed = 350;
  document.getElementById("meterSpeedA").style.width = `${(bikeA.topSpeedKMH / maxSpeed) * 100}%`;
  document.getElementById("meterSpeedB").style.width = `${(bikeB.topSpeedKMH / maxSpeed) * 100}%`;

  document.getElementById("valAccelA").textContent = `${bikeA.zeroToHundred}s`;
  document.getElementById("valAccelB").textContent = `${bikeB.zeroToHundred}s`;
  // lower is better
  document.getElementById("meterAccelA").style.width = `${((3.5 - bikeA.zeroToHundred) / 1.5) * 100}%`;
  document.getElementById("meterAccelB").style.width = `${((3.5 - bikeB.zeroToHundred) / 1.5) * 100}%`;
}

function initComparisonSelectors() {
  const selectA = document.getElementById("compareBikeA");
  const selectB = document.getElementById("compareBikeB");
  if (!selectA || !selectB) return;

  SHOWROOM_BIKES.forEach((bike, i) => {
    selectA.innerHTML += `<option value="${bike.id}" ${i === 0 ? "selected" : ""}>${bike.name}</option>`;
    selectB.innerHTML += `<option value="${bike.id}" ${i === 1 ? "selected" : ""}>${bike.name}</option>`;
  });

  selectA.addEventListener("change", renderComparison);
  selectB.addEventListener("change", renderComparison);

  renderComparison();
}

// ------------------- 🪖 Helmet Size Guide Calculator -------------------
function openHelmetGuideModal() {
  const modal = document.getElementById("helmetGuideModal");
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateHelmetSizeCalculation() {
  const slider = document.getElementById("headCircumferenceSlider");
  if (!slider) return;

  const cm = Number(slider.value);
  const cmDisplay = document.getElementById("headCmDisplay");
  const sizeBadge = document.getElementById("calcHelmetSizeBadge");
  const fitTip = document.getElementById("helmetFitTip");

  if (cmDisplay) cmDisplay.textContent = `${cm} cm (${(cm / 2.54).toFixed(1)}")`;

  let size = "M";
  let tip = "Standard intermediate oval shape fits majority of riders.";

  if (cm <= 54) {
    size = "XS (Extra Small)";
    tip = "Compact shell ideal for snug race fit with minimal aerodynamic drag.";
  } else if (cm <= 56) {
    size = "S (Small)";
    tip = "Tight cheek pads recommended for track speeds exceeding 250 km/h.";
  } else if (cm <= 58) {
    size = "M (Medium)";
    tip = "Standard intermediate oval fit, compatible with AGV & Shoei racing pads.";
  } else if (cm <= 60) {
    size = "L (Large)";
    tip = "Comfort fit with optimized crown ventilation channels.";
  } else if (cm <= 62) {
    size = "XL (Extra Large)";
    tip = "Expanded EPS liner with emergency release cheek pads.";
  } else {
    size = "2XL (Double XL)";
    tip = "Maximum shell displacement with dual D-ring titanium fastener.";
  }

  if (sizeBadge) sizeBadge.textContent = size;
  if (fitTip) fitTip.textContent = tip;
}

function filterHelmetsFromGuide() {
  closeModal("helmetGuideModal");
  const catalogEl = document.getElementById("catalog");
  if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    if (btn.dataset.filter === "helmets") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts("helmets");
  showToast("Filtered by Size", "Showing high-performance carbon helmets.", "fa-hard-hat");
}

// ------------------- 📍 Dealership Hubs Locator -------------------
function switchDealershipTab(hubKey) {
  const hub = DEALERSHIP_HUBS[hubKey];
  if (!hub) return;

  const btns = document.querySelectorAll(".dealer-tab-btn");
  btns.forEach(b => {
    if (b.dataset.hub === hubKey) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  const card = document.getElementById("dealerHubCard");
  if (!card) return;

  card.innerHTML = `
    <div class="dealer-hub-info">
      <span class="badge badge-green"><i class="fas fa-flag-checkered"></i> Official Flagship Center</span>
      <h3 style="margin-top: 8px;">${hub.title}</h3>
      <span class="location-tag"><i class="fas fa-map-marker-alt"></i> ${hub.location}</span>
      
      <h5 style="text-transform:uppercase;color:#fff;font-size:0.85rem;margin-top:14px;">Available Showroom Fleet:</h5>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:4px;">${hub.fleet}</p>

      <div class="dealer-facilities-grid">
        ${hub.facilities.map(f => `<div class="facility-item"><i class="fas fa-check-circle"></i> ${f}</div>`).join("")}
      </div>

      <button class="btn btn-primary btn-sm" style="font-size: 0.8rem; padding: 10px 15px; width: max-content; margin: 0 auto; display: block;" onclick="bookAtShowroom('${hub.title}')">
        <i class="fas fa-calendar-check"></i> Book Service / Test Ride Here
      </button>
    </div>

    <div class="dealer-hub-details">
      <div>
        <div class="detail-row">
          <i class="fas fa-location-arrow"></i>
          <div>
            <h5>Showroom Address</h5>
            <p>${hub.address}</p>
          </div>
        </div>
        <div class="detail-row">
          <i class="fas fa-clock"></i>
          <div>
            <h5>Operating Hours</h5>
            <p>${hub.hours}</p>
          </div>
        </div>
        <div class="detail-row">
          <i class="fas fa-phone-alt"></i>
          <div>
            <h5>VIP Direct Line</h5>
            <p>${hub.phone}</p>
          </div>
        </div>
      </div>
      <div style="background: rgba(0, 230, 118, 0.08); border: 1px dashed var(--border-glow); padding: 12px; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--accent-green);">
        <i class="fas fa-info-circle"></i> Dyno bookings include 3 baseline power pulls and wideband AFR diagnostics.
      </div>
    </div>
  `;
}

function bookAtShowroom(showroomName) {
  openTestRideModal();
  const select = document.getElementById("showroomSelect");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(showroomName.split(" ")[0])) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

// ------------------- Render Products Grid -------------------
function renderProducts(categoryFilter = "all", searchTerm = "") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let filtered = PRODUCTS_DATA;
  if (categoryFilter !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }
  if (searchTerm.trim() !== "") {
    const query = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 16px; color: #1e293b; display: block;"></i>
        <h3>No gear found matching "${searchTerm}"</h3>
        <p style="margin-top: 8px;">Try searching for "Helmet", "Boots", "Titanium", or "Carbon".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const starFull = Math.floor(product.rating);
    const hasHalf = product.rating % 1 !== 0;
    
    let starsHtml = "";
    for (let i = 0; i < starFull; i++) starsHtml += '<i class="fas fa-star"></i>';
    if (hasHalf) starsHtml += '<i class="fas fa-star-half-alt"></i>';

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-badges">
          <span class="badge badge-${product.badgeType}">${product.badge}</span>
        </div>
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" title="Add to Wishlist">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="product-image-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="quick-view-overlay">
            <button class="btn btn-secondary btn-sm" onclick="openQuickView('${product.id}')">
              <i class="far fa-eye"></i> Quick View
            </button>
          </div>
        </div>
        <div class="product-details">
          <span class="product-category">${product.category}</span>
          <h4 class="product-title">${product.name}</h4>
          <div class="product-rating">
            <div class="stars">${starsHtml}</div>
            <span class="count">${product.rating} (${product.reviews})</span>
          </div>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="product-price">${formatPrice(product.priceUSD)}</span>
              ${product.oldPriceUSD ? `<span class="product-old-price">${formatPrice(product.oldPriceUSD)}</span>` : ""}
            </div>
            <button class="add-to-cart-btn" onclick="addToCart('${product.id}')" title="Add to Cart">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ------------------- Render Showroom Slider -------------------
function renderShowroom() {
  const wrapper = document.getElementById("showroomSwiperWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = SHOWROOM_BIKES.map(bike => {
    return `
      <div class="swiper-slide">
        <div class="showroom-card">
          <div class="showroom-info">
            <span class="badge badge-green">${bike.tagline}</span>
            <h2 class="showroom-title">${bike.name}</h2>
            <div class="showroom-specs-grid">
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-tachometer-alt"></i> Engine</span>
                <span class="value">${bike.specs.engine}</span>
              </div>
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-bolt"></i> Max Power</span>
                <span class="value">${bike.specs.power}</span>
              </div>
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-fire"></i> Peak Torque</span>
                <span class="value">${bike.specs.torque}</span>
              </div>
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-weight-hanging"></i> Dry Weight</span>
                <span class="value">${bike.specs.weight}</span>
              </div>
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-road"></i> Top Speed</span>
                <span class="value">${bike.specs.topSpeed}</span>
              </div>
              <div class="showroom-spec-item">
                <span class="label"><i class="fas fa-cog"></i> Gearbox</span>
                <span class="value">${bike.specs.transmission}</span>
              </div>
            </div>
            <div class="showroom-price">${formatPrice(bike.priceUSD)} <small style="font-size:0.8rem;color:var(--text-muted);font-weight:normal;">MSRP</small></div>
            <div class="showroom-actions" style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn btn-primary btn-sm" style="font-size: 0.8rem; padding: 10px 15px; width: max-content;" onclick="openTestRideModal('${bike.id}')">
                <i class="fas fa-calendar-check"></i> Book Test Ride
              </button>
              <button class="btn btn-secondary btn-sm" style="font-size: 0.8rem; padding: 10px 15px; width: max-content;" onclick="loadBikeIntoCalculator(${bike.priceUSD})">
                <i class="fas fa-calculator"></i> Calculate Loan
              </button>
            </div>
          </div>
          <div class="showroom-visual">
            <img src="${bike.image}" alt="${bike.name}" />
          </div>
        </div>
      </div>
    `;
  }).join("");

  new Swiper("#showroomSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".showroom-next",
      prevEl: ".showroom-prev",
    },
    pagination: {
      el: ".showroom-pagination",
      clickable: true,
    },
  });
}

// ------------------- Flash Deals Slider -------------------
function renderFlashDeals() {
  const wrapper = document.getElementById("flashDealsWrapper");
  if (!wrapper) return;

  const deals = PRODUCTS_DATA.slice(0, 6);
  wrapper.innerHTML = deals.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    return `
      <div class="swiper-slide">
        <div class="product-card">
          <div class="product-badges">
            <span class="badge badge-${product.badgeType}">${product.badge}</span>
          </div>
          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')">
            <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <div class="product-image-box">
            <img src="${product.image}" alt="${product.name}" />
            <div class="quick-view-overlay">
              <button class="btn btn-secondary btn-sm" onclick="openQuickView('${product.id}')">
                <i class="far fa-eye"></i> Quick View
              </button>
            </div>
          </div>
          <div class="product-details">
            <span class="product-category">${product.category}</span>
            <h4 class="product-title">${product.name}</h4>
            <div class="product-footer">
              <div class="product-price-box">
                <span class="product-price">${formatPrice(product.priceUSD)}</span>
                <span class="product-old-price">${formatPrice(product.oldPriceUSD)}</span>
              </div>
              <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                <i class="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  new Swiper("#flashDealsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".deals-next",
      prevEl: ".deals-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
}

// ------------------- Cart Logic -------------------
function saveCart() {
  localStorage.setItem("apex_cart", JSON.stringify(cart));
  updateCartBadges();
}

function updateCartBadges() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => b.textContent = totalCount);
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ productId, qty: quantity });
  }

  saveCart();
  renderCartDrawer();
  openCartDrawer();
  showToast("Added to Cart", `${product.name} (x${quantity}) has been added.`, "fa-cart-plus");
}

function removeFromCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  renderCartDrawer();
  if (product) {
    showToast("Item Removed", `${product.name} removed from cart.`, "fa-trash-alt");
  }
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    renderCartDrawer();
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountValEl = document.getElementById("cartDiscountVal");
  const totalEl = document.getElementById("cartTotal");

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <h4>Your Cart is Empty</h4>
        <p>Browse our catalog and gear up for your next ride!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (discountRow) discountRow.style.display = "none";
    if (totalEl) totalEl.textContent = formatPrice(0);
    return;
  }

  let subtotalUSD = 0;
  listEl.innerHTML = cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId);
    if (!product) return "";
    const itemTotalUSD = product.priceUSD * item.qty;
    subtotalUSD += itemTotalUSD;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-title">${product.name}</div>
          <div class="cart-item-price">${formatPrice(product.priceUSD)}</div>
        </div>
        <div class="cart-qty-controls">
          <button class="cart-qty-btn" onclick="updateCartQty('${product.id}', -1)">-</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${product.id}')" title="Remove">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
  }).join("");

  let discountUSD = 0;
  if (appliedPromo) {
    discountUSD = subtotalUSD * appliedPromo.percent;
    if (discountRow) {
      discountRow.style.display = "flex";
      discountValEl.textContent = `-${formatPrice(discountUSD)} (${appliedPromo.code})`;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD);
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalUSD);
  if (totalEl) totalEl.textContent = formatPrice(grandTotalUSD);
}

function applyPromoCode() {
  const input = document.getElementById("promoInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "APEX10") {
    appliedPromo = { code: "APEX10", percent: 0.10 };
    renderCartDrawer();
    showToast("Promo Code Applied", "10% Discount applied successfully!", "fa-tag");
    input.value = "";
  } else if (code === "RACE20") {
    appliedPromo = { code: "RACE20", percent: 0.20 };
    renderCartDrawer();
    showToast("Promo Code Applied", "20% Track VIP Discount applied!", "fa-tag");
    input.value = "";
  } else {
    showToast("Invalid Code", "Please enter a valid voucher like 'APEX10'.", "fa-exclamation-triangle");
  }
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "auto";
}

// ------------------- Wishlist Logic -------------------
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index > -1) {
    wishlist.splice(index, 1);
    if (product) showToast("Removed from Wishlist", product.name, "fa-heart-broken");
  } else {
    wishlist.push(productId);
    if (product) showToast("Saved to Wishlist", product.name, "fa-heart");
  }

  localStorage.setItem("apex_wishlist", JSON.stringify(wishlist));
  updateWishlistBadges();
  renderProducts();
  renderFlashDeals();
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll(".wishlist-count-badge");
  badges.forEach(b => b.textContent = wishlist.length);
}

function toggleWishlistModal() {
  if (wishlist.length === 0) {
    showToast("Wishlist is Empty", "Click the heart icon on any gear or helmet to save your favorites.", "fa-heart");
  } else {
    const catalogEl = document.getElementById("catalog");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(b => b.classList.remove("active"));
    
    const grid = document.getElementById("productsGrid");
    if (grid) {
      const wishlistedProducts = PRODUCTS_DATA.filter(p => wishlist.includes(p.id));
      grid.innerHTML = wishlistedProducts.map(product => {
        return `
          <div class="product-card" data-id="${product.id}">
            <div class="product-badges">
              <span class="badge badge-${product.badgeType}">${product.badge}</span>
            </div>
            <button class="product-wishlist-btn active" onclick="toggleWishlist('${product.id}')" title="Remove from Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <div class="product-image-box">
              <img src="${product.image}" alt="${product.name}" loading="lazy" />
              <div class="quick-view-overlay">
                <button class="btn btn-secondary btn-sm" onclick="openQuickView('${product.id}')">
                  <i class="far fa-eye"></i> Quick View
                </button>
              </div>
            </div>
            <div class="product-details">
              <span class="product-category">${product.category}</span>
              <h4 class="product-title">${product.name}</h4>
              <div class="product-rating">
                <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <span class="count">${product.rating} (${product.reviews})</span>
              </div>
              <div class="product-footer">
                <div class="product-price-box">
                  <span class="product-price">${formatPrice(product.priceUSD)}</span>
                  ${product.oldPriceUSD ? `<span class="product-old-price">${formatPrice(product.oldPriceUSD)}</span>` : ""}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')" title="Add to Cart">
                  <i class="fas fa-shopping-bag"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
    showToast("Wishlist View", `Displaying ${wishlist.length} saved item(s).`, "fa-heart");
  }
}

// ------------------- Quick View Modal -------------------
let currentQuickViewProduct = null;
let quickViewQty = 1;

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  quickViewQty = 1;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-image-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="quickview-content">
        <span class="badge badge-${product.badgeType}">${product.badge}</span>
        <h2>${product.name}</h2>
        <div class="product-rating">
          <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          <span class="count">${product.rating} (${product.reviews} Rider Reviews)</span>
        </div>
        <div class="product-price" style="font-size: 1.8rem; color: var(--accent-green);">
          ${formatPrice(product.priceUSD)}
          ${product.oldPriceUSD ? `<span class="product-old-price" style="font-size: 1.1rem; margin-left: 10px;">${formatPrice(product.oldPriceUSD)}</span>` : ""}
        </div>
        <p class="quickview-desc">${product.description}</p>
        
        <div style="margin: 10px 0;">
          <h5 style="color: #fff; margin-bottom: 8px; font-size: 0.85rem; text-transform: uppercase;">Technical Highlights:</h5>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 0.85rem; color: var(--text-secondary);">
            ${product.specs ? product.specs.map(s => `<li><i class="fas fa-check-circle" style="color: var(--accent-green); margin-right: 6px;"></i>${s}</li>`).join("") : ""}
          </ul>
        </div>

        <div style="display: flex; gap: 14px; margin-top: 15px; align-items: center;">
          <div class="cart-qty-controls" style="padding: 6px 14px;">
            <button class="cart-qty-btn" onclick="changeQuickViewQty(-1)">-</button>
            <span class="cart-qty-num" id="qvQtyNum">1</span>
            <button class="cart-qty-btn" onclick="changeQuickViewQty(1)">+</button>
          </div>
          <button class="btn btn-primary" onclick="addQuickViewToCart()" style="flex-grow: 1;">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function changeQuickViewQty(delta) {
  quickViewQty = Math.max(1, quickViewQty + delta);
  const num = document.getElementById("qvQtyNum");
  if (num) num.textContent = quickViewQty;
}

function addQuickViewToCart() {
  if (!currentQuickViewProduct) return;
  addToCart(currentQuickViewProduct.id, quickViewQty);
  closeModal("quickViewModal");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

// ------------------- Test Ride Modal -------------------
function openTestRideModal(bikeId = "bike-ktm-1290") {
  const modal = document.getElementById("testRideModal");
  const select = document.getElementById("testRideBikeSelect");
  if (select) select.value = bikeId;
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function handleTestRideSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.riderName.value;
  const bikeSelect = form.bikeSelect;
  const bikeName = bikeSelect.options[bikeSelect.selectedIndex].text;
  const showroom = form.showroomSelect.value;
  const date = form.testDate.value;

  closeModal("testRideModal");
  form.reset();

  showToast(
    "Test Ride Confirmed! 🏁",
    `Thank you, ${name}! Your slot for ${bikeName} at ${showroom} on ${date} is reserved.`,
    "fa-flag-checkered"
  );
}

// ------------------- Financing / EMI Calculator -------------------
function initLoanCalculator() {
  const priceSlider = document.getElementById("calcBikePrice");
  const downSlider = document.getElementById("calcDownPayment");
  const termSlider = document.getElementById("calcLoanTerm");
  const rateSlider = document.getElementById("calcInterestRate");

  if (!priceSlider) return;

  function calculate() {
    const price = Number(priceSlider.value);
    const downPercent = Number(downSlider.value);
    const termMonths = Number(termSlider.value);
    const annualRate = Number(rateSlider.value);

    document.getElementById("calcPriceVal").textContent = formatPrice(price);
    document.getElementById("calcDownVal").textContent = `${downPercent}% (${formatPrice(price * (downPercent / 100))})`;
    document.getElementById("calcTermVal").textContent = `${termMonths} Months (${(termMonths / 12).toFixed(1)} Yrs)`;
    document.getElementById("calcRateVal").textContent = `${annualRate}% APR`;

    const principal = price * (1 - downPercent / 100);
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    } else {
      monthlyPayment = principal / termMonths;
    }

    const totalRepay = monthlyPayment * termMonths;
    const totalInterest = totalRepay - principal;

    document.getElementById("calcMonthlyPayment").textContent = `${formatPrice(monthlyPayment)}/mo`;
    document.getElementById("calcPrincipalVal").textContent = formatPrice(principal);
    document.getElementById("calcInterestVal").textContent = formatPrice(totalInterest);
    document.getElementById("calcTotalLoanVal").textContent = formatPrice(totalRepay);
  }

  [priceSlider, downSlider, termSlider, rateSlider].forEach(slider => {
    slider.addEventListener("input", calculate);
  });

  calculate();
}

function loadBikeIntoCalculator(priceUSD) {
  const priceSlider = document.getElementById("calcBikePrice");
  if (priceSlider) {
    priceSlider.value = priceUSD;
    priceSlider.dispatchEvent(new Event("input"));
    const calcSection = document.getElementById("financing");
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// ------------------- Checkout & Confetti -------------------
function handleCheckout() {
  if (cart.length === 0) {
    showToast("Empty Cart", "Please add items to your cart before checking out.", "fa-exclamation-circle");
    return;
  }

  closeCartDrawer();
  
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  cart = [];
  appliedPromo = null;
  saveCart();
  renderCartDrawer();

  const successModal = document.getElementById("orderSuccessModal");
  if (successModal) {
    const orderNum = "APX-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("orderNumberDisplay").textContent = orderNum;
    successModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

// ------------------- Newsletter Form -------------------
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input || !input.value) return;

  showToast("Subscribed! ⚡", "You've been added to our VIP Trackday & Early Drop list.", "fa-paper-plane");
  input.value = "";
}

// ------------------- Currency Switching -------------------
function setCurrency(currKey) {
  if (!CURRENCIES[currKey]) return;
  currentCurrency = currKey;
  
  renderProducts();
  renderShowroom();
  renderFlashDeals();
  renderCartDrawer();
  initLoanCalculator();
  renderComparison();
  
  showToast("Currency Updated", `Displaying prices in ${currKey} (${CURRENCIES[currKey].symbol})`, "fa-coins");
}

// ------------------- Navbar Scroll & Mobile Menu -------------------
function initNavigation() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });
  }

  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      setCurrency(e.target.value);
    });
  }
}

// ------------------- Catalog Filter & Search Setup -------------------
function initCatalogControls() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  let activeCat = "all";
  let activeSearch = "";

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCat = btn.dataset.filter;
      renderProducts(activeCat, activeSearch);
    });
  });

  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value;
      renderProducts(activeCat, activeSearch);
    });
  }
}

// ------------------- Initialization on DOM Ready -------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCountdownTimer();
  renderShowroom();
  renderFlashDeals();
  renderProducts();
  updateCartBadges();
  updateWishlistBadges();
  renderCartDrawer();
  initLoanCalculator();
  initCatalogControls();
  initEngineSimulator();
  initComparisonSelectors();
  switchDealershipTab("bkk");

  // Helmet slider listener
  const helmetSlider = document.getElementById("headCircumferenceSlider");
  if (helmetSlider) {
    helmetSlider.addEventListener("input", updateHelmetSizeCalculation);
    updateHelmetSizeCalculation();
  }

  // Test ride form listener
  const testRideForm = document.getElementById("testRideForm");
  if (testRideForm) {
    testRideForm.addEventListener("submit", handleTestRideSubmit);
  }

  // Newsletter form listener
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletter);
  }
});
