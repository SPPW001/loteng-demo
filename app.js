const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const PHONE_DAY = '6282244714706';
const PHONE_NIGHT = '6285804404438';

const menuData = [
  { category: 'Pizza', name: 'Pepperoni (P/G)', price: '43 / 135K', desc: 'Beef pepperoni, mozarella cheese, Italian herb & secret ingredients.' },
  { category: 'Pizza', name: 'Trufle Magic Mushroom (P/G)', price: '45 / 140K', desc: 'Mushroom, mozarella cheese, cream sauce & truffle oil.' },
  { category: 'Pizza', name: 'Triple Cheese (P/G)', price: '45 / 150K', desc: 'Mozarella cheese, parmesan cheese, brie cheese & secret ingredients.' },

  { category: 'Burger', name: 'Classic Cheese Burger', price: '60K', desc: 'Beef patty, bun, cheese cheddar, caramelized onion, fries.' },
  { category: 'Burger', name: 'Volcano Cheese Burger', price: '60K', desc: 'Beef patty, bun, mozarella sauce, caramelized onion, fries.' },
  { category: 'Burger', name: 'Creamy Mushroom Beef Burger', price: '60K', desc: 'Beef patty, bun, cheese cheddar, champignon mushroom, caramelized onion, fries.' },

  { category: 'Hotdog', name: 'Volcano Hotdog', price: '60K', desc: 'Beef sausage, bun, mozarella sauce, minced beef cream sauce, fries.' },
  { category: 'Hotdog', name: 'Mushroom Hotdog', price: '65K', desc: 'Beef sausage, bun, champignon mushroom, minced beef cream sauce, fries.' },
  { category: 'Hotdog', name: 'Onion Ring Hotdog', price: '65K', desc: 'Beef sausage, bun, mozarella sauce, minced beef cream sauce, onion ring, fries.' },

  { category: 'Pasta', name: 'Mad & Cheese', price: '60K', desc: 'Macaroni pasta, cheese sauce, parmesan cheese, bread stick, cheese cheddar.' },
  { category: 'Pasta', name: 'Steak Magic Mushroom', price: '75K', desc: 'Fetucini pasta, cream sauce, grilled steak, parmesan cheese, bread stick, truffle oil.' },
  { category: 'Pasta', name: 'Salmon Aglio Olio', price: '120K', desc: 'Spaghetti, grilled salmon, garlic, olive oil, parmesan.' },

  { category: 'Rice', name: 'Beef Butter Rice', price: '75K', desc: 'Rice, beef, butter.' },
  { category: 'Rice', name: 'Saikoro Mushroom Rice', price: '75K', desc: 'Rice, saikoro, cream sauce, champignon mushroom.' },

  { category: 'Steak', name: 'Classic Sirloin Steak', price: '185K', desc: 'Picanha sirloin steak, potato fries, mushroom sauce.' },
  { category: 'Steak', name: 'Classic Tenderloin Steak', price: '195K', desc: 'Tenderloin wagyu, potato fries, mushroom sauce.' },

  { category: 'Snack & Fries', name: 'Classic Fries', price: '30K', desc: 'Potato fries, parmesan grated.' },
  { category: 'Snack & Fries', name: 'Truffle Parmesan Fries', price: '55K', desc: 'Potato fries, parmesan grated, cream sauce, truffle oil.' },
  { category: 'Snack & Fries', name: 'Loaded Beef & Cheese Fries', price: '70K', desc: 'Potato fries, cheese sauce, parmesan grated, sirloin steak.' },
  { category: 'Snack & Fries', name: 'Creamy Mushroom Loaded Fries', price: '45K', desc: 'Potato fries, cheese sauce, parmesan grated.' },
  { category: 'Snack & Fries', name: 'Chicken Strip', price: '38K', desc: 'Bread fried chicken with choice of sauce (cheese & BBQ sauce).' },
  { category: 'Snack & Fries', name: 'Chicken Wings', price: '40K', desc: 'Deep fried chicken wings with choice of sauce (cheese, cream, butter).' },
  { category: 'Snack & Fries', name: 'Chicken Skin', price: '25K', desc: 'Deep fried chicken skin.' },
  { category: 'Snack & Fries', name: 'Super Plater', price: '95K', desc: 'Bun, chicken wings, french fries, chicken nugget, chili sauce, cheese sauce.' },

  { category: 'Salad', name: 'Caesar Salad', price: '40K', desc: 'Romaine lettuce, crutongs, tomato cheery, chicken, egg & Caesar dressing.' },
  { category: 'Salad', name: 'Fruit Medley Salad', price: '45K', desc: 'Romaine lettuce, orange, apple, strawberry, avocado, granola & maple dressing.' },

  { category: 'Dessert', name: 'Burn Basque Cheese', price: '48K', desc: 'Cream cheese, green tea cake, ice cream & slice fruit.' },
  { category: 'Dessert', name: 'Chocolate Roulade', price: '40K', desc: 'Dark chocolate sponge layered generously with fresh cream.' },

  { category: 'Drink', name: 'Soda', price: '20K', desc: 'Coca Cola, Sprite & Fanta.' },
  { category: 'Drink', name: 'Juice', price: '20K', desc: 'Water melon, melon, strawberry.' },
  { category: 'Drink', name: 'Milkshake', price: '23K', desc: 'Bananna, strawberry, Choco Alaska.' },
  { category: 'Drink', name: 'Cheese Tea', price: '25K', desc: 'Strawberry, Thai tea, black tea, Earl Grey.' },
  { category: 'Drink', name: 'Signature Mocktail', price: '40K', desc: 'Butterfly Lavender, Bufalo Matcha, Coffee Bitter, Dark Hojicha, Chill D Dragon.' },
  { category: 'Drink', name: 'Tea', price: '20K', desc: 'Original (C/H), peach tea, lychee tea, strawberry tea.' },
  { category: 'Drink', name: 'Coffee', price: '25K', desc: 'Es Kopi Susu Loteng, caramel, vanilla.' },
  { category: 'Drink', name: 'Beer (S/L)', price: '40 / 65K', desc: 'Bintang, Bintang Radler.' },
  { category: 'Drink', name: 'Soju', price: '185K', desc: 'Ori, peach, grape.' },
  { category: 'Drink', name: 'Mineral Water', price: '20K', desc: '' },
];

const categories = ['All', ...new Set(menuData.map(item => item.category))];
let activeCategory = 'All';
let selectedTable = null;
let availabilityChecked = false;
let toastTimer;

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setMode(mode, shouldScroll = false) {
  const isNight = mode === 'night';
  document.body.dataset.mode = mode;
  $('#modeSwitch').setAttribute('aria-pressed', String(isNight));
  $('#modeLabel').textContent = isNight ? 'NIGHT' : 'DAY';
  $('#heroTagline').textContent = isNight ? 'DANCE FLOOR BY NIGHT.' : 'BRUNCH BY DAY.';
  $('#heroCopy').textContent = isNight
    ? 'The plates slow down, the lights drop, and the dance floor takes over. LOTENG after 10 PM is a different animal.'
    : 'Pizza, burger, comfort food, and a bright corner to spend the afternoon. Then the room changes.';
  $('#statusKicker').textContent = isNight ? 'DANCE FLOOR · 21+' : 'BRUNCH & DINNER';
  $('#statusTime').textContent = isNight ? '10 PM — TILL LATE' : '12 PM — 10 PM';
  localStorage.setItem('loteng-mode', mode);
  if ($('#resExperience')) {
    $('#resExperience').value = mode;
    updateReservationTimes();
  }
  if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('#modeSwitch').addEventListener('click', () => {
  setMode(document.body.dataset.mode === 'day' ? 'night' : 'day');
});

$$('[data-set-mode]').forEach(el => {
  const activate = () => setMode(el.dataset.setMode, el.closest('.night-shift') !== null);
  el.addEventListener('click', activate);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
  });
});

const preferredMode = localStorage.getItem('loteng-mode');
if (preferredMode === 'night' || preferredMode === 'day') setMode(preferredMode);

window.addEventListener('scroll', () => {
  $('.site-header').classList.toggle('scrolled', window.scrollY > 35);
});

$('#menuToggle').addEventListener('click', () => {
  const open = $('#mobileMenu').classList.toggle('open');
  $('#menuToggle').setAttribute('aria-expanded', String(open));
  $('#mobileMenu').setAttribute('aria-hidden', String(!open));
});
$$('#mobileMenu a').forEach(a => a.addEventListener('click', () => {
  $('#mobileMenu').classList.remove('open');
  $('#menuToggle').setAttribute('aria-expanded', 'false');
  $('#mobileMenu').setAttribute('aria-hidden', 'true');
}));

function renderTabs() {
  $('#menuTabs').innerHTML = categories.map(category => `
    <button class="menu-tab ${category === activeCategory ? 'active' : ''}" type="button" data-category="${category}">${category}</button>
  `).join('');
  $$('.menu-tab').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.category;
    renderTabs();
    renderMenu();
  }));
}

function renderMenu() {
  const search = $('#menuSearch').value.trim().toLowerCase();
  const filtered = menuData.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const searchMatch = !search || `${item.name} ${item.desc} ${item.category}`.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  $('#menuCount').textContent = `${filtered.length} ITEM${filtered.length === 1 ? '' : 'S'}`;
  if (!filtered.length) {
    $('#menuList').innerHTML = '<div class="menu-empty">Nothing found. The pizza has not vanished, your search just got ambitious.</div>';
    return;
  }

  const groups = filtered.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  $('#menuList').innerHTML = Object.entries(groups).map(([category, items]) => `
    <section class="menu-category">
      <div class="menu-category-title">${category}</div>
      ${items.map(item => `
        <article class="menu-item">
          <div>
            <h3 class="menu-item__name">${item.name}</h3>
            ${item.desc ? `<p class="menu-item__desc">${item.desc}</p>` : ''}
          </div>
          <div class="menu-item__price">${item.price}</div>
        </article>
      `).join('')}
    </section>
  `).join('');
  $('#menuList').scrollTop = 0;
}

$('#menuSearch').addEventListener('input', renderMenu);
renderTabs();
renderMenu();

const eventMessage = encodeURIComponent('Halo LOTENG, saya mau tanya RSVP untuk event 7 Anniversary — Out of Bounds, Friday 25 September.');
const eventWhatsapp = `https://wa.me/${PHONE_NIGHT}?text=${eventMessage}`;
$('#eventRsvp').href = eventWhatsapp;
$('#modalRsvp').href = eventWhatsapp;

function openEventModal() {
  const modal = $('#eventModal');
  modal.hidden = false;
  document.body.classList.add('modal-open');
  setTimeout(() => $('.event-modal__panel .modal__close').focus(), 50);
}
function closeEventModal() {
  $('#eventModal').hidden = true;
  document.body.classList.remove('modal-open');
}
$('#openEvent').addEventListener('click', openEventModal);
$('#eventPosterButton').addEventListener('click', openEventModal);
$$('[data-close-modal]').forEach(el => el.addEventListener('click', closeEventModal));

$$('[data-lightbox]').forEach(item => item.addEventListener('click', () => {
  $('#lightboxImage').src = item.dataset.lightbox;
  $('#lightbox').hidden = false;
  document.body.classList.add('modal-open');
}));
$$('[data-close-lightbox]').forEach(el => el.addEventListener('click', () => {
  $('#lightbox').hidden = true;
  $('#lightboxImage').src = '';
  document.body.classList.remove('modal-open');
}));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!$('#eventModal').hidden) closeEventModal();
    if (!$('#lightbox').hidden) {
      $('#lightbox').hidden = true;
      document.body.classList.remove('modal-open');
    }
  }
});

function setMinDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  $('#resDate').min = `${yyyy}-${mm}-${dd}`;
  $('#resDate').value = `${yyyy}-${mm}-${dd}`;
}
setMinDate();

function updateReservationTimes() {
  const experience = $('#resExperience').value;
  const isNight = experience === 'night';
  const times = isNight
    ? ['22:00', '22:30', '23:00', '23:30', '00:00', '00:30', '01:00']
    : ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  $('#resTime').innerHTML = times.map(t => `<option value="${t}">${t}</option>`).join('');
  $('#ageCheck').hidden = !isNight;
  if (!isNight) $('#ageConfirm').checked = false;
  resetAvailability();
}

function resetAvailability() {
  selectedTable = null;
  availabilityChecked = false;
  $('#selectedTable').textContent = 'No table selected.';
  $('#availabilityMessage').textContent = 'Choose your details first, then check the demo floor.';
  $('#availabilityMessage').className = 'availability-message';
  $('#sendReservation').disabled = true;
  $$('.table-seat').forEach(btn => {
    btn.classList.remove('busy', 'selected', 'incompatible');
    btn.disabled = true;
  });
}

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h >>> 0);
}

function checkAvailability() {
  const experience = $('#resExperience').value;
  const guests = Number($('#resGuests').value);
  const date = $('#resDate').value;
  const time = $('#resTime').value;

  if (!date) return showToast('Pick a reservation date first.');
  if (experience === 'night' && !$('#ageConfirm').checked) return showToast('Night mode is 21+. Please confirm the age note first.');

  const seed = hashString(`${experience}-${guests}-${date}-${time}`);
  let freeCount = 0;

  $$('.table-seat').forEach((btn, index) => {
    const capacity = Number(btn.dataset.capacity);
    const tooSmall = capacity < guests;
    const busy = ((seed >> (index % 14)) & 1) === 1 && index % 3 !== 0;

    btn.classList.remove('busy', 'selected', 'incompatible');
    if (tooSmall) {
      btn.classList.add('incompatible');
      btn.disabled = true;
    } else if (busy) {
      btn.classList.add('busy');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      freeCount++;
    }
  });

  // Always leave at least one valid table so the demo can actually be demonstrated.
  if (!freeCount) {
    const firstCompatible = $$('.table-seat').find(btn => Number(btn.dataset.capacity) >= guests);
    if (firstCompatible) {
      firstCompatible.classList.remove('busy', 'incompatible');
      firstCompatible.disabled = false;
      freeCount = 1;
    }
  }

  availabilityChecked = true;
  selectedTable = null;
  $('#selectedTable').textContent = 'No table selected.';
  $('#sendReservation').disabled = true;
  $('#availabilityMessage').textContent = `${freeCount} demo table${freeCount === 1 ? '' : 's'} available. Pick one on the floor map.`;
  $('#availabilityMessage').className = 'availability-message success';
}

$('#resExperience').addEventListener('change', () => {
  updateReservationTimes();
  setMode($('#resExperience').value);
});
$('#resGuests').addEventListener('change', resetAvailability);
$('#resDate').addEventListener('change', resetAvailability);
$('#resTime').addEventListener('change', resetAvailability);
$('#checkAvailability').addEventListener('click', checkAvailability);
updateReservationTimes();

$$('.table-seat').forEach(btn => btn.addEventListener('click', () => {
  if (!availabilityChecked || btn.disabled) return;
  $$('.table-seat').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedTable = btn.dataset.table;
  $('#selectedTable').textContent = `Selected: Table ${selectedTable} · up to ${btn.dataset.capacity} guests.`;
  $('#sendReservation').disabled = false;
}));

$('#sendReservation').addEventListener('click', () => {
  const name = $('#resName').value.trim();
  const phone = $('#resPhone').value.trim();
  const experience = $('#resExperience').value;
  const guests = $('#resGuests').value;
  const date = $('#resDate').value;
  const time = $('#resTime').value;
  const notes = $('#resNotes').value.trim();

  if (!selectedTable) return showToast('Pick an available demo table first.');
  if (!name || !phone) return showToast('Name and phone are required before WhatsApp can do its ancient ritual.');

  const number = experience === 'night' ? PHONE_NIGHT : PHONE_DAY;
  const experienceLabel = experience === 'night' ? 'Dance Floor / Night (21+)' : 'Brunch & Dinner';
  const message = [
    'Halo LOTENG, saya ingin mengajukan reservasi:',
    '',
    `Nama: ${name}`,
    `No. HP: ${phone}`,
    `Tanggal: ${date}`,
    `Jam: ${time}`,
    `Experience: ${experienceLabel}`,
    `Jumlah tamu: ${guests} orang`,
    `Pilihan meja demo: ${selectedTable}`,
    notes ? `Catatan: ${notes}` : '',
    '',
    'Catatan: pilihan meja/availability berasal dari demo website dan mohon dikonfirmasi kembali oleh pihak LOTENG.'
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

// Loader + automatic event popup
(function runLoader() {
  const loader = $('#loader');
  const bar = $('#loaderBar');
  const count = $('#loaderCount');
  let progress = 0;
  const interval = setInterval(() => {
    progress = Math.min(progress + Math.floor(Math.random() * 12) + 5, 92);
    bar.style.width = `${progress}%`;
    count.textContent = String(progress).padStart(2, '0');
  }, 90);

  window.addEventListener('load', () => {
    clearInterval(interval);
    bar.style.width = '100%';
    count.textContent = '100';
    setTimeout(() => {
      loader.classList.add('is-done');
      if (!new URLSearchParams(location.search).has('nopopup')) setTimeout(openEventModal, 650);
    }, 380);
  });
})();

// Mobile CTA: keep it out of the hero and reservation itself so it helps instead of covering content.
(function setupMobileReserveCTA() {
  const cta = document.querySelector('.mobile-reserve');
  const hero = document.querySelector('.hero');
  const reserve = document.querySelector('#reserve');
  if (!cta || !hero || !reserve) return;

  const update = () => {
    if (window.innerWidth > 820) {
      cta.classList.remove('is-visible');
      return;
    }
    const heroBottom = hero.getBoundingClientRect().bottom;
    const reserveRect = reserve.getBoundingClientRect();
    const insideReserve = reserveRect.top < window.innerHeight * .78 && reserveRect.bottom > 90;
    cta.classList.toggle('is-visible', heroBottom < 100 && !insideReserve);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();
