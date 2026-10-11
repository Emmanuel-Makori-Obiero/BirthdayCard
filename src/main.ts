import './style.css';

type Photo = { src: string; title: string; alt: string };

const photos: Photo[] = [
  { src: '/assets/memory-01.webp', title: 'The little moments', alt: 'A favorite birthday memory' },
  { src: '/assets/memory-02.webp', title: 'The kind of light', alt: 'A warm shared memory' },
  { src: '/assets/memory-03.webp', title: 'Always worth celebrating', alt: 'A joyful memory together' },
  { src: '/assets/memory-04.webp', title: 'A sunny-day smile', alt: 'A smiling portrait outdoors in the sunshine' },
  { src: '/assets/memory-05.webp', title: 'A moment in the trees', alt: 'A portrait on a leafy, tree-lined path' },
  { src: '/assets/memory-06.webp', title: 'A little campus glow', alt: 'A candid smile during the day' },
  { src: '/assets/memory-07.webp', title: 'Golden-hour energy', alt: 'A bright portrait outside' },
  { src: '/assets/memory-08.webp', title: 'Soft light, big smile', alt: 'A relaxed portrait in warm light' },
  { src: '/assets/memory-09.webp', title: 'The main-character frame', alt: 'A joyful portrait in a sunlit setting' },
  { src: '/assets/memory-10.webp', title: 'A little garden magic', alt: 'A peaceful garden-side moment' },
  { src: '/assets/memory-11.webp', title: 'Just being you', alt: 'A smiling portrait in a patterned outfit' },
  { src: '/assets/memory-12.webp', title: 'One for the memories', alt: 'A candid, everyday portrait' },
  { src: '/assets/memory-13.webp', title: 'A favorite kind of day', alt: 'A playful candid moment' },
  { src: '/assets/memory-14.webp', title: 'Out and about', alt: 'A full-length outdoor portrait' },
  { src: '/assets/memory-15.webp', title: 'The camera loves you', alt: 'A warm indoor portrait' },
  { src: '/assets/memory-16.webp', title: 'A little throwback', alt: 'A joyful childhood portrait' },
  { src: '/assets/memory-17.webp', title: 'Always unmistakably you', alt: 'A relaxed portrait outdoors' },
  { src: '/assets/memory-18.webp', title: 'A smile to keep', alt: 'A cheerful close-up portrait' },
  { src: '/assets/memory-19.webp', title: 'One more lovely moment', alt: 'A sunny outdoor portrait' },
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root missing');

app.innerHTML = `
  <div class="site-shell">
    <div class="stars" aria-hidden="true"></div>
    <div class="intro-overlay" id="intro-overlay">
      <div class="intro-curtain" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
      <div class="intro-copy">
        <div class="eyebrow">a private note · press play when she is ready</div>
        <h1>Hey birthday girl, this one’s <em>for you.</em></h1>
        <p>No long speech. Just a few favourite faces, some camera-roll evidence, and a tiny bit of chaos.</p>
        <button class="cta" id="start-button">Press play <span class="arrow">↗</span></button>
      </div>
    </div>

    <header class="topbar">
      <div class="brand">a film by <i>someone who loves you</i></div>
      <div class="mini-label">chapter 01 / 05</div>
    </header>
    <audio id="birthday-song" src="/audio/chikwere.mp3" loop preload="none"></audio>
    <button class="ambient" id="ambient-button" aria-label="Play Chikwere" title="Play Chikwere" aria-pressed="false"><span aria-hidden="true">♫</span><span class="music-label">Chikwere</span></button>
    <div class="progress" id="progress" style="width: 0%"></div>

    <main>
      <section class="chapter kicker" id="chapter-one">
        <div class="timeline-line" aria-hidden="true"></div>
        <div class="chapter-inner kicker-grid">
          <div>
            <div class="chapter-label">01 / okay, listen</div>
            <h2>You make ordinary days feel like <em>something.</em></h2>
            <div class="scroll-hint"><i></i> keep going, we have receipts</div>
          </div>
          <div class="kicker-side">
            <p class="chapter-dek">So here are a few little reminders of why people keep choosing your laugh, your energy, and your face in every group photo.</p>
            <div class="memory-sprinkle" aria-label="A few favorite photos">
              <img src="/assets/memory-04.webp" alt="A sunny-day smile" loading="lazy" decoding="async" />
              <img src="/assets/memory-08.webp" alt="A soft-light portrait" loading="lazy" decoding="async" />
              <img src="/assets/memory-14.webp" alt="A favorite outdoor moment" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section class="chapter photo-chapter" id="chapter-two">
        <div class="chapter-inner photo-layout">
          <div class="photo-copy">
            <div class="chapter-label">02 / camera roll evidence</div>
            <h3>Proof that you are very easy to <em>love.</em></h3>
            <p>Exhibit A: the smile. Exhibit B: the way a normal day becomes a story when you are in it.</p>
            <div class="photo-index" id="photo-index">FRAME 01 / 03</div>
          </div>
          <div>
            <div class="film-frame">
              <img id="photo-image" src="${photos[0].src}" alt="${photos[0].alt}" loading="lazy" decoding="async" fetchpriority="low" />
              <div class="image-wash"></div>
              <div class="film-caption" id="photo-caption">${photos[0].title}</div>
            </div>
            <div class="photo-controls" aria-label="Photo controls">
              <button class="icon-btn" id="photo-prev" aria-label="Previous photo">←</button>
              <button class="icon-btn" id="photo-next" aria-label="Next photo">→</button>
              <span class="mini-label">tap the arrows · keep the evidence moving</span>
              <button class="note-btn" id="note-button">one more thing</button>
            </div>
          </div>
        </div>
      </section>

      <section class="cinema-chapter" id="chapter-cinema" aria-labelledby="cinema-title">
        <div class="cinema-heading">
          <div class="chapter-label">little moments / on repeat</div>
          <h3 id="cinema-title">Your own tiny <em>birthday film.</em></h3>
          <p>The smile, the glow, the whole main-character thing.</p>
        </div>
        <div class="cinema-collage" aria-label="A moving collage of birthday memories">
          ${[2, 5, 8, 11, 14, 17].map((photoIndex, tile) => `
            <figure class="cinema-tile tile-${tile + 1}">
              <img src="${photos[photoIndex % photos.length].src}" alt="${photos[photoIndex % photos.length].alt}" loading="lazy" decoding="async" data-cinema-tile="${tile}" />
            </figure>
          `).join('')}
          <div class="cinema-stamp" aria-hidden="true">MEL<br/><span>ON FILM</span></div>
        </div>
        <button class="collage-toggle" id="collage-toggle" type="button" aria-pressed="true">Pause the memories <span aria-hidden="true">Ⅱ</span></button>
      </section>

      <section class="chapter avatar-chapter" id="chapter-three">
        <div class="chapter-inner">
          <div class="avatar-intro">
            <div>
              <div class="chapter-label">03 / your tiny hype crew</div>
              <h3>We hired a tiny dance crew to <em>celebrate you.</em></h3>
            </div>
            <p>A little birthday dance, just for you. Drag the stage around and tap for a little mischief.</p>
          </div>
          <div class="avatar-stage">
            <canvas id="avatar-canvas" aria-label="Interactive 3D birthday avatars"></canvas>
            <div class="avatar-badge">made of stardust<span>and good wishes</span></div>
            <div class="avatar-hint">watch the little dance · drag to explore</div>
          </div>
          <div class="memory-ribbon" aria-label="More little moments">
            <img src="/assets/memory-06.webp" alt="A candid daytime smile" loading="lazy" decoding="async" />
            <img src="/assets/memory-10.webp" alt="A peaceful garden-side moment" loading="lazy" decoding="async" />
            <img src="/assets/memory-15.webp" alt="A warm indoor portrait" loading="lazy" decoding="async" />
            <span>little moments, big love</span>
          </div>
        </div>
      </section>

      <section class="chapter reveal-chapter" id="chapter-four">
        <div class="reveal-card" id="reveal-card">
          <div class="chapter-label">04 / the moment</div>
          <div class="reveal-memories" id="reveal-memories" aria-label="A few more birthday memories" hidden>
            <img src="/assets/memory-09.webp" alt="A sunlit portrait" loading="lazy" decoding="async" />
            <img src="/assets/memory-12.webp" alt="A candid everyday moment" loading="lazy" decoding="async" />
            <img src="/assets/memory-18.webp" alt="A cheerful close-up portrait" loading="lazy" decoding="async" />
          </div>
          <h3>Okay. Now for the bit you were trying to <em>scroll past.</em></h3>
          <p>Your birthday assignment: accept the love, make a ridiculous wish, and let everyone spoil you a little.</p>
          <button class="cta" id="reveal-button" aria-expanded="false" aria-controls="surprise-note">Show me the big one <span class="arrow">✦</span></button>
          <div class="surprise-note" id="surprise-note" hidden aria-live="polite">
            <img src="/assets/memory-13.webp" alt="A little birthday memory, saved just for you" loading="lazy" decoding="async" />
            <div class="surprise-copy">
              <div class="eyebrow">the actual surprise</div>
              <h4>Surprise, <em>my siz.</em></h4>
              <p>You are the best—not just today, but in all the little moments that make life brighter. I hope you feel every bit as loved as you make the people around you feel.</p>
              <span>Make a wish. This whole celebration is for you.</span>
            </div>
          </div>
        </div>
        <div class="confetti" id="confetti" aria-hidden="true"></div>
      </section>

      <section class="chapter final-chapter" id="chapter-five">
        <div class="chapter-inner">
          <div class="chapter-label">05 / end credits</div>
          <h3>Happy birthday. <em>Seriously.</em></h3>
          <p>I hope this year gives you more reasons to laugh until your stomach hurts, more soft places to land, and at least one excellent plot twist.</p>
          <button class="cta secondary" id="replay-button">Replay the story <span class="arrow">↻</span></button>
          <img class="final-memory" src="/assets/memory-19.webp" alt="One more lovely outdoor portrait" loading="lazy" decoding="async" />
          <div class="siz-note">You are the best, <em>my siz.</em></div>
          <div class="signature">from your favourite people</div>
        </div>
      </section>
    </main>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>
`;

const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const intro = $('#intro-overlay') as HTMLDivElement;
const startButton = $('#start-button') as HTMLButtonElement;
const revealButton = $('#reveal-button') as HTMLButtonElement;
const replayButton = $('#replay-button') as HTMLButtonElement;
const surpriseNote = $('#surprise-note') as HTMLDivElement;
const revealMemories = $('#reveal-memories') as HTMLDivElement;
const revealCard = $('#reveal-card') as HTMLDivElement;
const progress = $('#progress') as HTMLDivElement;
const toast = $('#toast') as HTMLDivElement;
const photoImage = $('#photo-image') as HTMLImageElement;
const photoCaption = $('#photo-caption') as HTMLDivElement;
const photoIndex = $('#photo-index') as HTMLDivElement;
const noteButton = $('#note-button') as HTMLButtonElement;
let currentPhoto = 0;
const birthdaySong = $('#birthday-song') as HTMLAudioElement;
const musicButton = $('#ambient-button') as HTMLButtonElement;
birthdaySong.volume = 0.28;

function showToast(message: string) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

const tinyNotes = [
  'Official verdict: still iconic.',
  'Someone thinks you are very pretty. It is me. And probably everyone.',
  'You make the group chat better by existing.',
  'This is your sign to order the dessert.',
];
let noteIndex = 0;
noteButton?.addEventListener('click', () => {
  showToast(tinyNotes[noteIndex % tinyNotes.length]);
  noteIndex += 1;
});

function updatePhoto(index: number) {
  currentPhoto = (index + photos.length) % photos.length;
  photoImage.style.opacity = '0';
  window.setTimeout(() => {
    const photo = photos[currentPhoto];
    photoImage.alt = photo.alt;
    photoCaption.textContent = photo.title;
    photoIndex.textContent = `FRAME ${String(currentPhoto + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    photoImage.onload = () => { photoImage.style.opacity = '1'; };
    photoImage.onerror = () => { photoImage.style.opacity = '1'; };
    photoImage.src = photo.src;
    // Fetch just the next frame in the background after the current image is requested.
    const next = new Image();
    next.src = photos[(currentPhoto + 1) % photos.length].src;
  }, 220);
}

async function toggleMusic() {
  if (birthdaySong.paused) {
    try {
      await birthdaySong.play();
      musicButton.setAttribute('aria-pressed', 'true');
      musicButton.setAttribute('aria-label', 'Pause Chikwere');
      musicButton.title = 'Pause Chikwere';
      musicButton.classList.add('is-playing');
    } catch {
      showToast('Tap the music button to play Chikwere.');
    }
  } else {
    birthdaySong.pause();
    musicButton.setAttribute('aria-pressed', 'false');
    musicButton.setAttribute('aria-label', 'Play Chikwere');
    musicButton.title = 'Play Chikwere';
    musicButton.classList.remove('is-playing');
  }
}

startButton.addEventListener('click', () => {
  intro.classList.add('is-hidden');
  void toggleMusic();
  window.setTimeout(() => $('#chapter-one')?.scrollIntoView({ behavior: 'smooth' }), 320);
});
musicButton.addEventListener('click', () => { void toggleMusic(); });
$('#photo-prev')?.addEventListener('click', () => updatePhoto(currentPhoto - 1));
$('#photo-next')?.addEventListener('click', () => updatePhoto(currentPhoto + 1));

revealButton.addEventListener('click', () => {
  revealCard.classList.add('is-open');
  revealMemories.hidden = false;
  surpriseNote.hidden = false;
  surpriseNote.classList.add('is-revealed');
  revealButton.setAttribute('aria-expanded', 'true');
  revealButton.innerHTML = 'A little love, just for you <span class="arrow">✦</span>';
  revealButton.disabled = true;
  createConfetti();
  showToast('Surprise, my siz. You are so loved.');
  window.setTimeout(() => surpriseNote.scrollIntoView({ behavior: 'smooth', block: 'center' }), 180);
});

replayButton.addEventListener('click', () => {
  revealCard.classList.remove('is-open');
  revealMemories.hidden = true;
  surpriseNote.hidden = true;
  surpriseNote.classList.remove('is-revealed');
  revealButton.disabled = false;
  revealButton.setAttribute('aria-expanded', 'false');
  revealButton.innerHTML = 'Show me the big one <span class="arrow">✦</span>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.setTimeout(() => intro.classList.remove('is-hidden'), 520);
});

function createConfetti() {
  const confetti = $('#confetti') as HTMLDivElement;
  confetti.innerHTML = '';
  for (let i = 0; i < 36; i += 1) {
    const piece = document.createElement('i');
    piece.style.left = `${45 + (Math.random() * 10)}%`;
    piece.style.top = `${36 + (Math.random() * 9)}%`;
    piece.style.background = [ '#f4cb7b', '#ee806f', '#b49ddd', '#fff4df' ][i % 4];
    piece.style.setProperty('--x', `${(Math.random() - .5) * 100}vw`);
    piece.style.setProperty('--y', `${(Math.random() * .95 + .35) * -100}vh`);
    piece.style.setProperty('--r', `${(Math.random() - .5) * 800}deg`);
    piece.style.animationDelay = `${Math.random() * .45}s`;
    confetti.appendChild(piece);
  }
}

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
});

// Keep the cinematic collage dormant until it is close to view; rotate one frame at a time.
const collage = $('#chapter-cinema');
const collageToggle = $('#collage-toggle') as HTMLButtonElement | null;
const collageTiles = Array.from(document.querySelectorAll<HTMLImageElement>('[data-cinema-tile]'));
let collageVisible = false;
let collageRunning = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let nextCinemaPhoto = 0;
let nextCinemaTile = 0;
let collageTimer: number | undefined;
let collageLoading = false;
function updateCollageControl() {
  if (!collageToggle) return;
  collageToggle.setAttribute('aria-pressed', String(collageRunning));
  collageToggle.innerHTML = collageRunning
    ? 'Pause the memories <span aria-hidden="true">Ⅱ</span>'
    : 'Play the memories <span aria-hidden="true">▶</span>';
}
function startCollage() {
  if (collageTimer || !collageVisible || !collageRunning) return;
  collageTimer = window.setInterval(() => {
    if (document.hidden || collageTiles.length === 0 || collageLoading) return;
    const tile = collageTiles[nextCinemaTile % collageTiles.length];
    const candidate = photos[nextCinemaPhoto % photos.length];
    nextCinemaTile += 1;
    nextCinemaPhoto += 1;
    if (tile.src.endsWith(candidate.src)) return;
    collageLoading = true;
    const incoming = new Image();
    incoming.decoding = 'async';
    incoming.onload = () => {
      tile.classList.add('is-changing');
      window.setTimeout(() => {
        tile.src = candidate.src;
        tile.alt = candidate.alt;
        tile.classList.remove('is-changing');
        collageLoading = false;
      }, 260);
    };
    incoming.onerror = () => { collageLoading = false; };
    incoming.src = candidate.src;
  }, 1250);
}
function stopCollage() {
  if (collageTimer) window.clearInterval(collageTimer);
  collageTimer = undefined;
}
collageToggle?.addEventListener('click', () => {
  collageRunning = !collageRunning;
  updateCollageControl();
  if (collageRunning) startCollage(); else stopCollage();
});
updateCollageControl();
if ('IntersectionObserver' in window && collage) {
  const collageObserver = new IntersectionObserver((entries) => {
    collageVisible = entries.some((entry) => entry.isIntersecting);
    if (collageVisible) startCollage(); else stopCollage();
  }, { rootMargin: '120px 0px' });
  collageObserver.observe(collage);
} else {
  collageVisible = true;
  startCollage();
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopCollage(); else startCollage();
});

// Load the 3D engine only when the visitor approaches this chapter.
async function initAvatarExperience() {
const THREE = await import('three');
  const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader.js');
const canvas = $('#avatar-canvas') as HTMLCanvasElement;
const lowPowerDevice = window.matchMedia('(max-width: 760px)').matches || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4);
let renderer: import('three').WebGLRenderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !lowPowerDevice, powerPreference: 'low-power' });
} catch {
  canvas.hidden = true;
  showToast('This device cannot play the 3D dance, but enjoy the birthday memories.');
  return;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPowerDevice ? 1 : 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(28, 1, .1, 100);
camera.position.set(0, 1.25, 7.2);
const stage = new THREE.Group();
scene.add(stage);
scene.add(new THREE.HemisphereLight(0xffe9d1, 0x26153a, 2.3));
const keyLight = new THREE.DirectionalLight(0xffcf93, 4.4); keyLight.position.set(3, 5, 4); scene.add(keyLight);
const rimLight = new THREE.PointLight(0xb995ff, 11, 9); rimLight.position.set(-3, 2, 2); scene.add(rimLight);
const floor = new THREE.Mesh(new THREE.CircleGeometry(2.8, 64), new THREE.MeshBasicMaterial({ color: 0x2b1b40, transparent: true, opacity: .4 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -.77; floor.scale.set(1.6, 1, .6); stage.add(floor);

function makeFallbackAvatar(color: number, accent: number, x: number) {
  const avatar = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(.68, 32, 24), new THREE.MeshStandardMaterial({ color, roughness: .52, metalness: .05 }));
  body.scale.set(.8, 1.05, .64); body.position.y = -.18; avatar.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(.51, 32, 24), new THREE.MeshStandardMaterial({ color: 0xffd0b1, roughness: .62 })); head.position.y = .78; avatar.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(.54, 32, 16, 0, Math.PI * 2, 0, Math.PI * .62), new THREE.MeshStandardMaterial({ color: accent, roughness: .82 })); hair.position.y = .96; avatar.add(hair);
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x22152b });
  [-.16, .16].forEach((eyeX) => { const eye = new THREE.Mesh(new THREE.SphereGeometry(.045, 12, 12), eyeMaterial); eye.position.set(eyeX, .82, .48); avatar.add(eye); });
  const cheek = new THREE.Mesh(new THREE.SphereGeometry(.065, 12, 12), new THREE.MeshBasicMaterial({ color: 0xed8e84, transparent: true, opacity: .65 })); cheek.position.set(-.29, .68, .42); avatar.add(cheek); const cheek2 = cheek.clone(); cheek2.position.x = .29; avatar.add(cheek2);
  const star = new THREE.Mesh(new THREE.OctahedronGeometry(.18), new THREE.MeshStandardMaterial({ color: 0xf4cb7b, emissive: 0x7b4c22, emissiveIntensity: .7, metalness: .6 })); star.position.set(.45, 1.28, .08); avatar.add(star);
  avatar.position.x = x; avatar.userData = { spin: Math.random() > .5 ? 1 : -1 };
  return avatar;
}

const leftAvatar = makeFallbackAvatar(0x253764, 0x15172f, -.92);
const rightAvatar = makeFallbackAvatar(0x5f2c5b, 0x2d1b39, .92);
stage.add(leftAvatar, rightAvatar);
const fbxLoader = new FBXLoader();
let danceMixer: import('three').AnimationMixer | undefined;
function loadDanceAvatar() {
  fbxLoader.load('/models/HipHopDancing.fbx', (model) => {
    const danceClip = model.animations.find((clip) => clip.tracks.length > 0);
    if (!danceClip) return; // Keep the built-in dancers visible if the FBX has no usable take.
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const scale = size.y > 0 ? 2.65 / size.y : 1;
    model.scale.setScalar(scale);
    model.position.set(
      -((bounds.min.x + bounds.max.x) / 2) * scale,
      -.77 - bounds.min.y * scale,
      -((bounds.min.z + bounds.max.z) / 2) * scale,
    );
    stage.add(model);
    leftAvatar.visible = false;
    rightAvatar.visible = false;
    danceMixer = new THREE.AnimationMixer(model);
    danceMixer.clipAction(danceClip).setLoop(THREE.LoopRepeat, Infinity).play();
  }, undefined, () => { /* Built-in characters remain as the lightweight fallback. */ });
}
const avatarChapter = $('#chapter-three');
let danceRequested = false;
let avatarVisible = false;
if ('IntersectionObserver' in window && avatarChapter) {
  const avatarObserver = new IntersectionObserver((entries) => {
    avatarVisible = entries.some((entry) => entry.isIntersecting);
    if (avatarVisible && !document.hidden) {
      if (!danceRequested) {
        danceRequested = true;
        loadDanceAvatar();
      }
      clock.start();
      scheduleAvatarFrame();
    } else {
      clock.stop();
      if (frameHandle) cancelAnimationFrame(frameHandle);
      frameHandle = 0;
    }
  }, { rootMargin: '480px 0px' });
  avatarObserver.observe(avatarChapter);
} else {
  avatarVisible = true;
  window.setTimeout(() => { loadDanceAvatar(); scheduleAvatarFrame(); }, 1200);
}

let targetRotation = 0;
let currentRotation = 0;
let pointerDown = false;
let lastX = 0;
canvas.addEventListener('pointerdown', (event) => { pointerDown = true; lastX = event.clientX; canvas.setPointerCapture(event.pointerId); });
canvas.addEventListener('pointermove', (event) => { if (!pointerDown) return; targetRotation += (event.clientX - lastX) * .009; lastX = event.clientX; });
canvas.addEventListener('pointerup', () => { pointerDown = false; });
canvas.addEventListener('click', () => { if (!pointerDown) { rimLight.intensity = 18; window.setTimeout(() => rimLight.intensity = 11, 300); showToast('A little stardust, just for you.'); } });
function resizeStage() {
  const rect = canvas.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / Math.max(rect.height, 1);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeStage);
resizeStage();
const clock = new THREE.Clock();
let lastRenderTime = 0;
let frameHandle = 0;
function scheduleAvatarFrame() {
  if (frameHandle) return;
  frameHandle = requestAnimationFrame(() => {
    frameHandle = 0;
    animate();
  });
}
function animate() {
  if (!avatarVisible || document.hidden) return;
  const frameTime = performance.now();
  if (lowPowerDevice && frameTime - lastRenderTime < 1000 / 30) {
    scheduleAvatarFrame();
    return;
  }
  lastRenderTime = frameTime;
  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;
  danceMixer?.update(delta);
  currentRotation += (targetRotation - currentRotation) * .07;
  stage.rotation.y = currentRotation + Math.sin(elapsed * .22) * .08;
  leftAvatar.position.y = Math.sin(elapsed * 1.2) * .045;
  rightAvatar.position.y = Math.sin(elapsed * 1.2 + 1.2) * .045;
  leftAvatar.rotation.y = Math.sin(elapsed * .5) * .12;
  rightAvatar.rotation.y = -Math.sin(elapsed * .55) * .12;
  renderer.render(scene, camera);
  scheduleAvatarFrame();
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clock.stop();
    if (frameHandle) cancelAnimationFrame(frameHandle);
    frameHandle = 0;
  } else if (avatarVisible) {
    clock.start();
    scheduleAvatarFrame();
  }
});

}

const avatarBoot = $('#chapter-three');
if ('IntersectionObserver' in window && avatarBoot) {
  const bootObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      bootObserver.disconnect();
      void initAvatarExperience();
    }
  }, { rootMargin: '300px 0px' });
  bootObserver.observe(avatarBoot);
} else {
  const start3D = () => { void initAvatarExperience(); };
  if ('requestIdleCallback' in window) window.requestIdleCallback(start3D, { timeout: 2500 });
  else globalThis.setTimeout(start3D, 1500);
}
