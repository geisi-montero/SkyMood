
const cityInput      = document.getElementById('cityInput');
const searchBtn      = document.getElementById('searchBtn');
const btnText        = searchBtn ? searchBtn.querySelector('.btn-text') : null;
const btnSpinner     = searchBtn ? searchBtn.querySelector('.btn-spinner') : null;
const errorBanner    = document.getElementById('errorBanner');
const errorText      = document.getElementById('errorText');
const weatherCard    = document.getElementById('weatherCard');
const bgPhoto        = document.getElementById('bgPhoto');
const bgOverlay      = document.getElementById('bgOverlay');

const cityInputHome  = document.getElementById('cityInputHome');
const searchBtnHome  = document.getElementById('searchBtnHome');
const btnTextHome    = searchBtnHome ? searchBtnHome.querySelector('.btn-text') : null;
const btnSpinnerHome = searchBtnHome ? searchBtnHome.querySelector('.btn-spinner') : null;
const errorBannerHome= document.getElementById('errorBannerHome');
const errorTextHome  = document.getElementById('errorTextHome');


const homeHero       = document.getElementById('homeHero');
const resultsShell   = document.getElementById('resultsShell');

const cityNameEl     = document.getElementById('cityName');
const weatherIconEl  = document.getElementById('weatherIcon');
const tempValueEl    = document.getElementById('tempValue');
const weatherDescEl  = document.getElementById('weatherDesc');
const resultMetaEl   = document.getElementById('resultMeta');
const statTempEl     = document.getElementById('statTemp');
const statTempMoodEl = document.getElementById('statTempMood');
const statTempNoteEl = document.getElementById('statTempNote');
const statHumEl      = document.getElementById('statHumidity');
const statHumMoodEl  = document.getElementById('statHumidityMood');
const statHumNoteEl  = document.getElementById('statHumidityNote');
const statWindEl     = document.getElementById('statWind');
const statWindMoodEl = document.getElementById('statWindMood');
const statWindNoteEl = document.getElementById('statWindNote');
const moodBannerIcon = document.getElementById('moodBannerIcon');
const moodBannerTitle= document.getElementById('moodBannerTitle');
const moodBannerSub  = document.getElementById('moodBannerSub');

let isDark = false;
function setTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');

  document.querySelectorAll('[id^="btnLight"]').forEach(b => b.classList.toggle('active', !dark));
  document.querySelectorAll('[id^="btnDark"]').forEach(b => b.classList.toggle('active', dark));
  localStorage.setItem('skymood-theme', dark ? 'dark' : 'light');
}
document.querySelectorAll('[id^="btnLight"]').forEach(b => b.addEventListener('click', () => setTheme(false)));
document.querySelectorAll('[id^="btnDark"]').forEach(b => b.addEventListener('click', () => setTheme(true)));
if (localStorage.getItem('skymood-theme') === 'dark') setTheme(true);


const BG_POOL = {
  sunny: [
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/235322/pexels-photo-235322.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3590/nature-sky-sunny-clouds.jpg?auto=compress&cs=tinysrgb&w=1920',
  ],
  partlyCloudy: [
    'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1089441/pexels-photo-1089441.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  cloudy: [
    'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  rainy: [
    'https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/빗소리/pexels-photo-빗소리.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  stormy: [
    'https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  snowy: [
    'https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  misty: [
    'https://images.pexels.com/photos/靄/pexels-photo-靄-167699.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/안개/pexels-photo-안개-355465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/霧/pexels-photo-霧-355465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/靄/pexels-photo-靄-355465.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  night: [
    'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
  default: [
  
    'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ],
};

const BG_STYLE = {
  sunny:        { filter: 'brightness(1.05) saturate(1.2)',                 overlay: 'rgba(255,210,60,0.05)'  },
  partlyCloudy: { filter: 'brightness(1.0)  saturate(1.05)',                overlay: 'rgba(150,180,220,0.08)' },
  cloudy:       { filter: 'brightness(0.85) saturate(0.80)',                overlay: 'rgba(80,100,140,0.20)'  },
  rainy:        { filter: 'brightness(0.72) saturate(0.65)',                overlay: 'rgba(30,60,110,0.32)'   },
  stormy:       { filter: 'brightness(0.58) saturate(0.50) contrast(1.1)', overlay: 'rgba(10,10,40,0.45)'    },
  snowy:        { filter: 'brightness(1.10) saturate(0.40)',                overlay: 'rgba(200,220,255,0.22)' },
  misty:        { filter: 'brightness(0.80) saturate(0.45) blur(1.5px)',   overlay: 'rgba(150,165,185,0.38)' },
  night:        { filter: 'brightness(0.55) saturate(0.60)',                overlay: 'rgba(5,5,30,0.35)'      },
  default:      { filter: 'brightness(0.82) saturate(0.90)',                overlay: 'rgba(10,20,50,0.22)'    },
};


const BG_FALLBACK = {
  sunny:        'linear-gradient(135deg,#f9d976 0%,#f39f86 100%)',
  partlyCloudy: 'linear-gradient(135deg,#89afd7 0%,#c9d6e3 100%)',
  cloudy:       'linear-gradient(135deg,#8e9eab 0%,#bdc3c7 100%)',
  rainy:        'linear-gradient(135deg,#2c3e50 0%,#3498db 100%)',
  stormy:       'linear-gradient(135deg,#0f0c29 0%,#302b63 60%,#24243e 100%)',
  snowy:        'linear-gradient(135deg,#e0eafc 0%,#cfdef3 100%)',
  misty:        'linear-gradient(135deg,#bdc3c7 0%,#485563 100%)',
  night:        'linear-gradient(135deg,#0f0c29 0%,#1a1a4e 60%,#0a0a20 100%)',
  default:      'linear-gradient(135deg,#89c4e1 0%,#6a9fb5 100%)',
};

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function setBg(moodKey) {
  const style    = BG_STYLE[moodKey]    || BG_STYLE.default;
  const fallback = BG_FALLBACK[moodKey] || BG_FALLBACK.default;
  const pool     = BG_POOL[moodKey]     || BG_POOL.default;

  tryLoadImages([...pool], style, fallback);
}

function tryLoadImages(urls, style, fallback) {
  if (urls.length === 0) {
    applyFallback(fallback);
    return;
  }

  const url   = urls.shift();
  const probe = new Image();

  probe.onload = () => {
    // Fade out
    bgPhoto.style.transition = 'opacity 0.5s ease';
    bgPhoto.style.opacity = '0';
    bgOverlay.style.transition = 'background 1s ease, opacity 0.5s ease';

    setTimeout(() => {
      bgPhoto.style.cssText = ''; 
      bgPhoto.style.position = 'fixed';
      bgPhoto.style.inset = '0';
      bgPhoto.style.zIndex = '0';
      bgPhoto.style.backgroundSize = 'cover';
      bgPhoto.style.backgroundPosition = 'center';
      bgPhoto.style.backgroundRepeat = 'no-repeat';
      bgPhoto.style.backgroundImage = `url('${url}')`;
      bgPhoto.style.filter = style.filter;
      bgOverlay.style.background = style.overlay;

      // Fade in
      bgPhoto.style.transition = 'opacity 0.9s ease, filter 1.2s ease';
      bgPhoto.style.opacity = '1';
    }, 500);
  };

  probe.onerror = () => {
  
    tryLoadImages(urls, style, fallback);
  };

  probe.src = url;
}

function applyFallback(gradient) {
  bgPhoto.style.transition = 'opacity 0.5s ease';
  bgPhoto.style.opacity = '0';
  setTimeout(() => {
    bgPhoto.style.backgroundImage = 'none';
    bgPhoto.style.background = gradient;
    bgPhoto.style.filter = 'none';
    bgOverlay.style.background = 'rgba(0,0,0,0.08)';
    bgPhoto.style.transition = 'opacity 0.9s ease';
    bgPhoto.style.opacity = '1';
  }, 500);
}

const THEMES = {
  sunny: {
    icon: '☀️', moodKey: 'sunny',
    moods: [
      { title: "It's a great time to be outside.", sub: "Perfect weather for your plans today." },
      { title: "Sun's out — make the most of it.", sub: "A bright day for bold moves." },
      { title: "Vitamin D weather.", sub: "Enjoy the warmth while it lasts." },
    ],
  },
  cloudy: {
    icon: '☁️', moodKey: 'cloudy',
    moods: [
      { title: "A calm, focused kind of day.", sub: "Soft light, perfect for deep work." },
      { title: "Overcast skies are underrated.", sub: "Great energy for creative thinking." },
    ],
  },
  partlyCloudy: {
    icon: '⛅', moodKey: 'partlyCloudy',
    moods: [
      { title: "Mix of sun and clouds today.", sub: "A pleasant balance — enjoy the breaks of light." },
      { title: "Partly cloudy, fully productive.", sub: "Nice conditions all around." },
    ],
  },
  rainy: {
    icon: '🌧️', moodKey: 'rainy',
    moods: [
      { title: "Rain is nature's white noise.", sub: "Perfect time for focused work indoors." },
      { title: "A cozy, introspective day.", sub: "Grab a coffee and get things done." },
    ],
  },
  stormy: {
    icon: '⛈️', moodKey: 'stormy',
    moods: [
      { title: "The storm can't touch your focus.", sub: "Channel the energy and get moving." },
      { title: "Chaos outside, control inside.", sub: "Best ideas come in the storm." },
    ],
  },
  snowy: {
    icon: '❄️', moodKey: 'snowy',
    moods: [
      { title: "The world is quiet today.", sub: "Use that silence to build something great." },
      { title: "A snow day is a gift.", sub: "Warm inside, sharp mind." },
    ],
  },
  misty: {
    icon: '🌫️', moodKey: 'misty',
    moods: [
      { title: "Mystery in the air.", sub: "A day full of quiet possibilities." },
      { title: "Soft light, soft mood.", sub: "Let ideas come slowly — and they will." },
    ],
  },
  night: {
    icon: '🌙', moodKey: 'night',
    moods: [
      { title: "Night owls move the world.", sub: "Your best thinking happens now." },
      { title: "Stars above, ideas blooming.", sub: "Night energy. Pure focus." },
    ],
  },
  default: {
    icon: '🌤', moodKey: 'default',
    moods: [{ title: "Every day brings its own atmosphere.", sub: "Make it count." }],
  },
};

function wmoToCondition(code, isDay) {
  if (code === 0)  return isDay ? 'Clear sky' : 'Clear night';
  if (code === 1)  return isDay ? 'Mostly clear' : 'Mostly clear night';
  if (code === 2)  return 'Partly cloudy';
  if (code === 3)  return 'Overcast';
  if (code <= 49)  return 'Foggy';
  if (code <= 57)  return 'Light drizzle';
  if (code <= 67)  return 'Rainy';
  if (code <= 77)  return 'Snowy';
  if (code <= 82)  return 'Rain showers';
  if (code <= 86)  return 'Snow showers';
  if (code >= 95)  return 'Thunderstorm';
  return 'Cloudy';
}

function getThemeKey(condition, isNight) {
  if (isNight) return 'night';
  const c = condition.toLowerCase();
  if (c.includes('thunder') || c.includes('storm')) return 'stormy';
  if (c.includes('snow'))                            return 'snowy';
  if (c.includes('rain') || c.includes('drizzle') || c.includes('shower')) return 'rainy';
  if (c.includes('fog') || c.includes('mist'))       return 'misty';
  if (c.includes('partly'))                          return 'partlyCloudy';
  if (c.includes('clear') || c.includes('mostly clear') || c.includes('sunny')) return 'sunny';
  if (c.includes('cloud') || c.includes('overcast')) return 'cloudy';
  return 'sunny';
}

function interpretTemp(t) {
  if (t <= 0)  return { mood: 'Freezing',   note: "Bundle up, it's very cold." };
  if (t <= 10) return { mood: 'Cold',        note: 'Wear a heavy coat.' };
  if (t <= 18) return { mood: 'Cool',        note: 'A light jacket will help.' };
  if (t <= 24) return { mood: 'Comfortable', note: 'Enjoy the pleasant weather.' };
  if (t <= 30) return { mood: 'Warm',        note: 'Great outdoor conditions.' };
  if (t <= 36) return { mood: 'Hot',         note: 'Stay hydrated and cool.' };
  return              { mood: 'Very hot',    note: 'Avoid direct sun if possible.' };
}
function interpretHumidity(h) {
  if (h < 30)  return { mood: 'Very dry',   note: 'Use moisturizer and stay hydrated.' };
  if (h < 45)  return { mood: 'Dry',        note: 'Comfortable but slightly dry.' };
  if (h < 60)  return { mood: 'Moderate',   note: 'Air feels just right.' };
  if (h < 75)  return { mood: 'Humid',      note: 'Slightly sticky outside.' };
  return              { mood: 'Very humid', note: 'Heavy air — stay cool.' };
}
function interpretWind(w) {
  const dirs = ['N','NE','E','SE','S','SW','W','NW'];
  const dir  = dirs[Math.floor(Math.random() * dirs.length)];
  if (w < 5)   return { mood: 'Calm',          note: 'Virtually no wind.' };
  if (w < 15)  return { mood: 'Light breeze',  note: 'Barely noticeable.' };
  if (w < 30)  return { mood: 'Gentle breeze', note: `From the ${dir}.` };
  if (w < 50)  return { mood: 'Moderate wind', note: "You'll feel it outside." };
  if (w < 75)  return { mood: 'Strong wind',   note: 'Hold onto your hat.' };
  return              { mood: 'Stormy wind',   note: 'Dangerous gusts possible.' };
}

function setLoading(v) {
  if (btnText)     btnText.hidden = v;
  if (btnSpinner)  btnSpinner.hidden = !v;
  if (searchBtn)   searchBtn.disabled = v;
  if (cityInput)   cityInput.disabled = v;
  if (btnTextHome)    btnTextHome.hidden = v;
  if (btnSpinnerHome) btnSpinnerHome.hidden = !v;
  if (searchBtnHome)  searchBtnHome.disabled = v;
  if (cityInputHome)  cityInputHome.disabled = v;
}
function showError(msg) {

  if (homeHero && !homeHero.hidden) {
    if (errorTextHome) errorTextHome.textContent = msg;
    if (errorBannerHome) errorBannerHome.hidden = false;
  } else {
    if (errorText) errorText.textContent = msg;
    if (errorBanner) errorBanner.hidden = false;
  }
}
function hideError() {
  if (errorBanner) errorBanner.hidden = true;
  if (errorBannerHome) errorBannerHome.hidden = true;
}

function animateCounter(el, target) {
  const start = parseInt(el.textContent) || 0;
  const diff  = target - start;
  const steps = 22;
  let step    = 0;
  const tick  = () => {
    step++;
    const ease = 1 - Math.pow(1 - step / steps, 3);
    el.textContent = Math.round(start + diff * ease);
    if (step < steps) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

async function fetchWeather(city) {
  if (!city.trim()) return;
  setLoading(true); hideError();
  try {
    const geoRes  = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    if (!geoRes.ok) throw new Error('Could not contact the geocoding service.');
    const geoData = await geoRes.json();
    if (!geoData?.length) throw new Error('City not found. Try another name.');

    const { lat, lon, display_name } = geoData[0];
    const parts        = display_name.split(',').map(s => s.trim());
    const cleanCity    = parts[0];
    const cleanCountry = parts[parts.length - 1];

    const wxRes  = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day` +
      `&daily=temperature_2m_max,temperature_2m_min&wind_speed_unit=kmh&timezone=auto&forecast_days=1`
    );
    if (!wxRes.ok) throw new Error('Could not get weather data. Please try again.');
    const wxData = await wxRes.json();
    const cur    = wxData.current;
    const daily  = wxData.daily;

    const isDay     = cur.is_day === 1;
    const condition = wmoToCondition(cur.weather_code, isDay);

    renderWeather({
      city: cleanCity, country: cleanCountry,
      temp:      Math.round(cur.temperature_2m),
      feelsLike: Math.round(cur.apparent_temperature),
      humidity:  cur.relative_humidity_2m,
      wind:      Math.round(cur.wind_speed_10m),
      condition, isNight: !isDay,
      tempMax: daily ? Math.round(daily.temperature_2m_max[0]) : null,
      tempMin: daily ? Math.round(daily.temperature_2m_min[0]) : null,
    });
  } catch (err) {
    showError(err.message || 'Could not get weather. Check your connection.');
  } finally {
    setLoading(false);
  }
}

function renderWeather(data) {
  const themeKey = getThemeKey(data.condition, data.isNight);
  const theme    = THEMES[themeKey] || THEMES.default;
  const mood     = pickRandom(theme.moods);
  const tInterp  = interpretTemp(data.temp);
  const hInterp  = interpretHumidity(data.humidity);
  const wInterp  = interpretWind(data.wind);

  setBg(theme.moodKey);

  cityNameEl.textContent    = `${data.city}, ${data.country}`;
  weatherIconEl.textContent = theme.icon;
  weatherDescEl.textContent = data.condition;

  let meta = `Feels like ${data.feelsLike}°C`;
  if (data.tempMax !== null) meta += ` • H: ${data.tempMax}°C  L: ${data.tempMin}°C`;
  resultMetaEl.textContent = meta;

  animateCounter(tempValueEl, data.temp);

  statTempEl.textContent     = `${data.temp}°C`;
  statTempMoodEl.textContent = tInterp.mood;
  statTempNoteEl.textContent = tInterp.note;

  statHumEl.textContent      = `${data.humidity}%`;
  statHumMoodEl.textContent  = hInterp.mood;
  statHumNoteEl.textContent  = hInterp.note;

  statWindEl.textContent     = `${data.wind} km/h`;
  statWindMoodEl.textContent = wInterp.mood;
  statWindNoteEl.textContent = wInterp.note;

  moodBannerIcon.textContent  = theme.icon;
  moodBannerTitle.textContent = mood.title;
  moodBannerSub.textContent   = mood.sub;

  hideError();
  if (homeHero)    homeHero.hidden = true;
  if (resultsShell) resultsShell.hidden = false;
  
  if (cityInput && cityInputHome) cityInput.value = cityInputHome.value;
}


if (searchBtnHome) searchBtnHome.addEventListener('click', () => fetchWeather(cityInputHome.value));
if (cityInputHome) {
  cityInputHome.addEventListener('keydown', e => { if (e.key === 'Enter') fetchWeather(cityInputHome.value); });
  cityInputHome.addEventListener('input',   () => { if (errorBannerHome && !errorBannerHome.hidden) hideError(); });
}


if (searchBtn) searchBtn.addEventListener('click', () => fetchWeather(cityInput.value));
if (cityInput) {
  cityInput.addEventListener('keydown', e => { if (e.key === 'Enter') fetchWeather(cityInput.value); });
  cityInput.addEventListener('input',   () => { if (errorBanner && !errorBanner.hidden) hideError(); });
}


function syncTheme(theme) {
  const toggles = document.querySelectorAll('[id^="btnLight"], [id^="btnDark"]');

}


if (homeHero)    homeHero.hidden = false;
if (resultsShell) resultsShell.hidden = true;
if (cityInputHome) cityInputHome.focus();
setBg('default');
