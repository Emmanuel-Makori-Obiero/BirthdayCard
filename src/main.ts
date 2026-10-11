import type { Group } from 'three';
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
          <p class="chapter-dek">So here are three little reminders of why people keep choosing your laugh, your energy, and your face in every group photo.</p>
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

      <section class="chapter avatar-chapter" id="chapter-three">
        <div class="chapter-inner">
          <div class="avatar-intro">
            <div>
              <div class="chapter-label">03 / your tiny hype crew</div>
              <h3>We hired two small weirdos to <em>celebrate you.</em></h3>
            </div>
            <p>They are not very good at speeches, but they are excellent at standing around looking festive. Drag them around. Tap for a little mischief.</p>
          </div>
          <div class="avatar-stage">
            <canvas id="avatar-canvas" aria-label="Interactive 3D birthday avatars"></canvas>
            <div class="avatar-badge">made of stardust<span>and good wishes</span></div>
            <div class="avatar-hint">drag them around · tap for a surprise</div>
          </div>
        </div>
      </section>

      <section class="chapter reveal-chapter" id="chapter-four">
        <div class="reveal-card" id="reveal-card">
          <div class="chapter-label">04 / the moment</div>
          <h3>Okay. Now for the bit you were trying to <em>scroll past.</em></h3>
          <p>Your birthday assignment: accept the love, make a ridiculous wish, and let everyone spoil you a little.</p>
          <button class="cta" id="reveal-button">Show me the big one <span class="arrow">✦</span></button>
        </div>
        <div class="confetti" id="confetti" aria-hidden="true"></div>
      </section>

      <section class="chapter final-chapter" id="chapter-five">
        <div class="chapter-inner">
          <div class="chapter-label">05 / end credits</div>
          <h3>Happy birthday. <em>Seriously.</em></h3>
          <p>I hope this year gives you more reasons to laugh until your stomach hurts, more soft places to land, and at least one excellent plot twist.</p>
          <button class="cta secondary" id="replay-button">Replay the story <span class="arrow">↻</span></button>
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
  revealButton.textContent = 'The surprise is open ✦';
  revealButton.disabled = true;
  createConfetti();
  showToast('The stars have entered the chat.');
  window.setTimeout(() => $('#chapter-five')?.scrollIntoView({ behavior: 'smooth' }), 1100);
});

replayButton.addEventListener('click', () => {
  revealCard.classList.remove('is-open');
  revealButton.disabled = false;
  revealButton.innerHTML = 'Open the surprise <span class="arrow">✦</span>';
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

// Load the 3D engine only when the visitor approaches this chapter.
async function initAvatarExperience() {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
const canvas = $('#avatar-canvas') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
const loader = new GLTFLoader();
function loadAvatar(path: string, target: Group, fallback: Group) {
  loader.load(path, (gltf) => {
    const model = gltf.scene;
    model.scale.setScalar(1.05);
    model.position.y = -.72;
    target.add(model);
    fallback.visible = false;
  }, undefined, () => { /* fallback remains visible */ });
}
// The generated GLBs are intentionally lazy-loaded so the opening scene and page scroller
// stay responsive on mobile and slower connections. Lightweight Three.js fallbacks show first.
const avatarChapter = $('#chapter-three');
let avatarsRequested = false;
const loadGeneratedAvatars = () => {
  if (avatarsRequested) return;
  avatarsRequested = true;
  loadAvatar('/models/star-avatar.glb', leftAvatar, leftAvatar);
  loadAvatar('/models/moon-avatar.glb', rightAvatar, rightAvatar);
};
if ('IntersectionObserver' in window && avatarChapter) {
  const avatarObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      loadGeneratedAvatars();
      avatarObserver.disconnect();
    }
  }, { rootMargin: '480px 0px' });
  avatarObserver.observe(avatarChapter);
} else {
  window.setTimeout(loadGeneratedAvatars, 1200);
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
function animate() {
  const elapsed = clock.getElapsedTime();
  currentRotation += (targetRotation - currentRotation) * .07;
  stage.rotation.y = currentRotation + Math.sin(elapsed * .22) * .08;
  leftAvatar.position.y = Math.sin(elapsed * 1.2) * .045;
  rightAvatar.position.y = Math.sin(elapsed * 1.2 + 1.2) * .045;
  leftAvatar.rotation.y = Math.sin(elapsed * .5) * .12;
  rightAvatar.rotation.y = -Math.sin(elapsed * .55) * .12;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

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
