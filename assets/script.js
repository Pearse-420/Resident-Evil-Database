const ARCHIVE_SOURCE = "assets/characters.json";
const FALLBACK_ARCHIVE = [
  {
    "id": 1,
    "name": "Chris Redfield",
    "slug": "chris-redfield",
    "image": "generated:chris-redfield",
    "game": "Resident Evil",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Active",
    "summary": "Veteran anti-bioterror soldier whose relentless field history makes him one of the series' defining protagonists.",
    "bio": "Chris Redfield began as a S.T.A.R.S. point man during the mansion incident and evolved into one of the world's most hardened anti-bioterror operatives. His story runs through Umbrella's collapse, the rise of global bio-weapons trafficking, and the brutal campaigns that followed.",
    "abilities": ["Advanced firearms training", "Close-quarters combat", "Field leadership", "Bioterror response"],
    "affiliations": ["S.T.A.R.S.", "B.S.A.A."],
    "firstAppearance": "Resident Evil (1996)",
    "notableGames": ["Resident Evil", "Resident Evil Code: Veronica", "Resident Evil 5", "Resident Evil 6", "Resident Evil Village"],
    "featured": true
  },
  {
    "id": 2,
    "name": "Jill Valentine",
    "slug": "jill-valentine",
    "image": "generated:jill-valentine",
    "game": "Resident Evil",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Active",
    "summary": "A razor-sharp survivor whose calm under pressure helped define the earliest Resident Evil outbreaks.",
    "bio": "Jill Valentine served with S.T.A.R.S. Alpha Team and survived the Spencer Mansion incident through resourcefulness, tactical focus, and refusal to break under pressure. Her later missions placed her at the center of Umbrella's collapse and some of the franchise's most important anti-bioterror operations.",
    "abilities": ["Lockpicking", "Explosives handling", "Tactical deduction", "Survival expertise"],
    "affiliations": ["S.T.A.R.S.", "B.S.A.A."],
    "firstAppearance": "Resident Evil (1996)",
    "notableGames": ["Resident Evil", "Resident Evil 3: Nemesis", "Resident Evil 5", "Resident Evil Revelations"],
    "featured": true
  },
  {
    "id": 3,
    "name": "Leon S. Kennedy",
    "slug": "leon-s-kennedy",
    "image": "generated:leon-s-kennedy",
    "game": "Resident Evil 2",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Active",
    "summary": "From rookie cop to elite government agent, Leon bridges the series' grounded horror and global action eras.",
    "bio": "Leon S. Kennedy arrived in Raccoon City on the worst first day imaginable and emerged as one of the franchise's most iconic survivors. Over time he became a government field operative deployed against cults, bio-weapons dealers, and outbreaks with geopolitical fallout.",
    "abilities": ["Precision shooting", "Counter-bioweapon operations", "Protective detail work", "Adaptive combat"],
    "affiliations": ["Raccoon Police Department", "U.S. Government"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil 4", "Resident Evil 6", "Resident Evil 4 Remake"],
    "featured": true
  },
  {
    "id": 4,
    "name": "Claire Redfield",
    "slug": "claire-redfield",
    "image": "generated:claire-redfield",
    "game": "Resident Evil 2",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Active",
    "summary": "Persistent, compassionate, and fearless, Claire anchors some of the franchise's most human survival stories.",
    "bio": "Claire Redfield entered the series searching for her brother and quickly became a survivor in her own right during the fall of Raccoon City. Her path carried her through prison islands, research conspiracies, and relief work connected to recurring biohazard incidents.",
    "abilities": ["Improvised survival", "Motorcycle expertise", "Protective instincts", "Civilian resilience"],
    "affiliations": ["TerraSave"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil Code: Veronica", "Resident Evil Revelations 2", "Resident Evil 2 Remake"],
    "featured": true
  },
  {
    "id": 5,
    "name": "Ada Wong",
    "slug": "ada-wong",
    "image": "generated:ada-wong",
    "game": "Resident Evil 2",
    "category": "Operative",
    "alignment": "Ambiguous",
    "status": "At Large",
    "summary": "A legendary covert operative whose motives stay hidden behind immaculate timing and careful half-truths.",
    "bio": "Ada Wong moves through the Resident Evil timeline as a spy, broker, saboteur, and occasional savior. She often intersects with Leon and the wider bio-weapons market, working with professionalism so exact that her true loyalty is never fully settled.",
    "abilities": ["Espionage", "Acrobatics", "Target extraction", "Undercover tradecraft"],
    "affiliations": ["Independent operative"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil 4", "Resident Evil 6", "Resident Evil 4 Remake"],
    "featured": true
  },
  {
    "id": 6,
    "name": "Albert Wesker",
    "slug": "albert-wesker",
    "image": "generated:albert-wesker",
    "game": "Resident Evil",
    "category": "Villain",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "The series' signature mastermind, blending corporate betrayal, superhuman ambition, and cold strategic cruelty.",
    "bio": "Albert Wesker began as a S.T.A.R.S. captain and Umbrella insider, then revealed himself as one of the franchise's defining architects of betrayal. Enhanced by viral experimentation and driven by god-complex ideology, he pushed bio-terror to apocalyptic scale.",
    "abilities": ["Enhanced speed", "Strategic manipulation", "Corporate espionage", "Combat proficiency"],
    "affiliations": ["Umbrella Corporation", "Wesker's organization", "S.T.A.R.S."],
    "firstAppearance": "Resident Evil (1996)",
    "notableGames": ["Resident Evil", "Resident Evil Code: Veronica", "Resident Evil 4", "Resident Evil 5"],
    "featured": true
  },
  {
    "id": 7,
    "name": "Rebecca Chambers",
    "slug": "rebecca-chambers",
    "image": "generated:rebecca-chambers",
    "game": "Resident Evil Zero",
    "category": "Support",
    "alignment": "Ally",
    "status": "Active",
    "summary": "A gifted medic and researcher whose intelligence offsets the chaos around her.",
    "bio": "Rebecca Chambers entered the series as the youngest S.T.A.R.S. member and survived catastrophes that would have broken more seasoned operatives. Her medical expertise and scientific awareness make her one of the franchise's most grounded and dependable support figures.",
    "abilities": ["Field medicine", "Chemical synthesis", "Research analysis", "Survival support"],
    "affiliations": ["S.T.A.R.S."],
    "firstAppearance": "Resident Evil (1996)",
    "notableGames": ["Resident Evil", "Resident Evil Zero"],
    "featured": false
  },
  {
    "id": 8,
    "name": "Barry Burton",
    "slug": "barry-burton",
    "image": "generated:barry-burton",
    "game": "Resident Evil",
    "category": "Support",
    "alignment": "Ally",
    "status": "Active",
    "summary": "Dependable veteran whose loyalty and sheer force of personality made him one of the series' most enduring allies.",
    "bio": "Barry Burton served as a S.T.A.R.S. weapons specialist and a key survivor of the original mansion incident. Though manipulated early by Wesker, Barry remains one of the most dependable allies in the archive and a steady presence across later events.",
    "abilities": ["Heavy weapons handling", "Mechanical aptitude", "Protective teamwork", "Combat support"],
    "affiliations": ["S.T.A.R.S."],
    "firstAppearance": "Resident Evil (1996)",
    "notableGames": ["Resident Evil", "Resident Evil Gaiden", "Resident Evil Revelations 2"],
    "featured": false
  },
  {
    "id": 9,
    "name": "Carlos Oliveira",
    "slug": "carlos-oliveira",
    "image": "generated:carlos-oliveira",
    "game": "Resident Evil 3: Nemesis",
    "category": "Operative",
    "alignment": "Ally",
    "status": "Unknown",
    "summary": "Umbrella's hired soldier with enough conscience to defy the machine he worked for.",
    "bio": "Carlos Oliveira entered the Raccoon City collapse as a U.B.C.S. mercenary deployed into a doomed containment effort. His growing disillusionment with Umbrella and his partnership with Jill turned him into one of the outbreak's most memorable survivors.",
    "abilities": ["Mercenary training", "Assault tactics", "Improvised rescue work", "Urban survival"],
    "affiliations": ["U.B.C.S."],
    "firstAppearance": "Resident Evil 3: Nemesis (1999)",
    "notableGames": ["Resident Evil 3: Nemesis", "Resident Evil 3 Remake"],
    "featured": false
  },
  {
    "id": 10,
    "name": "Sheva Alomar",
    "slug": "sheva-alomar",
    "image": "generated:sheva-alomar",
    "game": "Resident Evil 5",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Active",
    "summary": "Fast, precise, and mission-focused, Sheva is central to Resident Evil 5's co-op identity and anti-bioterror story.",
    "bio": "Sheva Alomar of the B.S.A.A. West Africa branch became Chris Redfield's partner during the Kijuju operation. Her local knowledge, composure, and frontline skill make her one of the franchise's strongest field operatives.",
    "abilities": ["Marksman accuracy", "Joint operations", "Reconnaissance", "Bioterror response"],
    "affiliations": ["B.S.A.A."],
    "firstAppearance": "Resident Evil 5 (2009)",
    "notableGames": ["Resident Evil 5"],
    "featured": false
  },
  {
    "id": 11,
    "name": "Ethan Winters",
    "slug": "ethan-winters",
    "image": "generated:ethan-winters",
    "game": "Resident Evil 7: Biohazard",
    "category": "Hero",
    "alignment": "Ally",
    "status": "Deceased",
    "summary": "An ordinary man pushed through impossible horror who became the emotional center of the modern first-person era.",
    "bio": "Ethan Winters entered the archive as a civilian searching for his missing wife and endured the Baker estate's nightmare through stubborn resilience. His later confrontation with the Winters family legacy and the Village crisis gave the series a more intimate, tragic core.",
    "abilities": ["Extreme endurance", "Improvised problem solving", "Civilian survival instinct", "Protective resolve"],
    "affiliations": ["Winters family"],
    "firstAppearance": "Resident Evil 7: Biohazard (2017)",
    "notableGames": ["Resident Evil 7: Biohazard", "Resident Evil Village"],
    "featured": true
  },
  {
    "id": 12,
    "name": "Rosemary Winters",
    "slug": "rosemary-winters",
    "image": "generated:rosemary-winters",
    "game": "Resident Evil Village",
    "category": "Support",
    "alignment": "Ally",
    "status": "Active",
    "summary": "The next-generation figure of the modern timeline, carrying both legacy trauma and unusual power.",
    "bio": "Rosemary Winters stands at the far edge of the current storyline, shaped by the consequences of the Mold and her family's survival. She represents a future-facing branch of the archive where inherited biohazard consequences become deeply personal.",
    "abilities": ["Mold-derived abilities", "Heightened survivability", "Psychological resilience"],
    "affiliations": ["Winters family"],
    "firstAppearance": "Resident Evil Village (2021)",
    "notableGames": ["Resident Evil Village", "Shadows of Rose"],
    "featured": false
  },
  {
    "id": 13,
    "name": "Sherry Birkin",
    "slug": "sherry-birkin",
    "image": "generated:sherry-birkin",
    "game": "Resident Evil 2",
    "category": "Support",
    "alignment": "Ally",
    "status": "Active",
    "summary": "A child survivor of Raccoon City who later returns as a government agent marked by the series' darkest experiments.",
    "bio": "Sherry Birkin survived the fall of Raccoon City as the daughter of scientists tied to the G-virus catastrophe. Years later she returned as a trained operative, carrying a life permanently shaped by the experiments that destroyed her family.",
    "abilities": ["Regenerative traits", "Field support", "Government training", "High-risk containment support"],
    "affiliations": ["U.S. Government"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil 6", "Resident Evil 2 Remake"],
    "featured": false
  },
  {
    "id": 14,
    "name": "HUNK",
    "slug": "hunk",
    "image": "generated:hunk",
    "game": "Resident Evil 2",
    "category": "Operative",
    "alignment": "Ambiguous",
    "status": "Active",
    "summary": "Umbrella's most efficient ghost operative, defined by anonymity, discipline, and survival at any cost.",
    "bio": "HUNK operates as a near-mythic field agent whose assignments intersect with Umbrella's most sensitive recoveries. His reputation comes from mission completion, emotional detachment, and the chilling sense that he is built to outlast everyone else on the ground.",
    "abilities": ["Special operations", "Extraction under pressure", "Stealth movement", "Tactical ruthlessness"],
    "affiliations": ["Umbrella Corporation"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil Outbreak", "Resident Evil 2 Remake"],
    "featured": false
  },
  {
    "id": 15,
    "name": "Jack Krauser",
    "slug": "jack-krauser",
    "image": "generated:jack-krauser",
    "game": "Resident Evil 4",
    "category": "Villain",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "A fallen soldier whose obsession with strength turns him into one of Leon's most personal and dangerous enemies.",
    "bio": "Major Jack Krauser re-enters the archive as a trained fighter shaped by military disillusionment and a hunger for power. His clash with Leon gives Resident Evil 4 one of its sharpest rivalries, blending ideological collapse with brutal close combat.",
    "abilities": ["Knife combat", "Military tactics", "Mutated arm weaponry", "Elite endurance"],
    "affiliations": ["Los Iluminados", "Former U.S. military"],
    "firstAppearance": "Resident Evil 4 (2005)",
    "notableGames": ["Resident Evil 4", "Resident Evil 4 Remake"],
    "featured": false
  },
  {
    "id": 16,
    "name": "William Birkin",
    "slug": "william-birkin",
    "image": "generated:william-birkin",
    "game": "Resident Evil 2",
    "category": "Villain",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "Brilliant, arrogant, and catastrophic, Birkin embodies the nightmare consequences of unchecked bioengineering.",
    "bio": "Dr. William Birkin helped shape Umbrella's most dangerous research and became the architect of his own destruction through the G-virus. His transformation into a mutating abomination remains one of the franchise's most iconic scientific downfalls.",
    "abilities": ["Virology expertise", "G-virus mutation", "Escalating physical strength", "Regeneration"],
    "affiliations": ["Umbrella Corporation"],
    "firstAppearance": "Resident Evil 2 (1998)",
    "notableGames": ["Resident Evil 2", "Resident Evil 2 Remake"],
    "featured": false
  },
  {
    "id": 17,
    "name": "Nemesis",
    "slug": "nemesis",
    "image": "generated:nemesis",
    "game": "Resident Evil 3: Nemesis",
    "category": "Bioweapon",
    "alignment": "Hostile",
    "status": "Neutralized",
    "summary": "The most iconic pursuit monster in the series, engineered to hunt with terrifying persistence.",
    "bio": "Nemesis was deployed by Umbrella as a Tyrant variant tasked with eliminating surviving S.T.A.R.S. members during the Raccoon City outbreak. Its intelligence, weapon use, and relentless pursuit transformed it into one of the series' defining bioweapons.",
    "abilities": ["Pursuit intelligence", "Heavy weapon use", "Extreme durability", "Mutation under damage"],
    "affiliations": ["Umbrella Corporation"],
    "firstAppearance": "Resident Evil 3: Nemesis (1999)",
    "notableGames": ["Resident Evil 3: Nemesis", "Resident Evil 3 Remake"],
    "featured": true
  },
  {
    "id": 18,
    "name": "Jack Baker",
    "slug": "jack-baker",
    "image": "generated:jack-baker",
    "game": "Resident Evil 7: Biohazard",
    "category": "Bioweapon",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "The face of the Baker estate nightmare, mixing grotesque menace with traces of a ruined family man.",
    "bio": "Jack Baker was once the head of a Louisiana family before Mold infection twisted him into a brutal enforcer within the estate's nightmare ecosystem. His presence gives Resident Evil 7 its oppressive domestic horror and one of the series' most unforgettable antagonists.",
    "abilities": ["Mold-driven regeneration", "Crushing strength", "Persistent pursuit", "Improvised brutality"],
    "affiliations": ["Baker family"],
    "firstAppearance": "Resident Evil 7: Biohazard (2017)",
    "notableGames": ["Resident Evil 7: Biohazard"],
    "featured": false
  },
  {
    "id": 19,
    "name": "Lady Dimitrescu",
    "slug": "lady-dimitrescu",
    "image": "generated:lady-dimitrescu",
    "game": "Resident Evil Village",
    "category": "Villain",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "A towering aristocratic predator whose elegance and violence made her an instant modern icon.",
    "bio": "Alcina Dimitrescu rules Castle Dimitrescu with theatrical cruelty, old-world glamour, and a taste for blood. Her design, presence, and ferocity helped define the visual identity of Resident Evil Village's opening act.",
    "abilities": ["Regeneration", "Claw attacks", "Command of castle domain", "Predatory intimidation"],
    "affiliations": ["Four Lords"],
    "firstAppearance": "Resident Evil Village (2021)",
    "notableGames": ["Resident Evil Village"],
    "featured": true
  },
  {
    "id": 20,
    "name": "Mother Miranda",
    "slug": "mother-miranda",
    "image": "generated:mother-miranda",
    "game": "Resident Evil Village",
    "category": "Villain",
    "alignment": "Hostile",
    "status": "Deceased",
    "summary": "Ancient cult leader and experimenter whose influence sits behind Village's entire nightmare hierarchy.",
    "bio": "Mother Miranda serves as the hidden architect of Village's horrors, blending grief, obsession, faith, and experimentation into a cult-like regime. Her long shadow connects rural folklore aesthetics with the franchise's familiar themes of mutation and exploitation.",
    "abilities": ["Mimicry", "Mold mastery", "Cult control", "Mutation engineering"],
    "affiliations": ["Four Lords", "Village cult"],
    "firstAppearance": "Resident Evil Village (2021)",
    "notableGames": ["Resident Evil Village"],
    "featured": false
  }
];

document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();

  try {
    const characters = await loadCharacters();
    const page = document.body.dataset.page;

    if (page === "home") {
      renderHomePage(characters);
    }

    if (page === "archive") {
      renderArchivePage(characters);
    }

    if (page === "detail") {
      renderDetailPage(characters);
    }
  } catch (error) {
    renderLoadError(error);
  }
});

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (!header || !toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

async function loadCharacters() {
  try {
    const response = await fetch(ARCHIVE_SOURCE);

    if (!response.ok) {
      throw new Error("Archive data could not be loaded.");
    }

    const data = await response.json();
    return Array.isArray(data) ? data : FALLBACK_ARCHIVE;
  } catch (error) {
    if (Array.isArray(FALLBACK_ARCHIVE) && FALLBACK_ARCHIVE.length > 0) {
      return FALLBACK_ARCHIVE;
    }

    throw error;
  }
}

function renderHomePage(characters) {
  updateHeroStats(characters);
  renderHomeSpotlight(characters);

  const featuredGrid = document.querySelector("[data-featured-grid]");
  if (!featuredGrid) {
    return;
  }

  const featuredCharacters = characters.filter((character) => character.featured).slice(0, 4);
  featuredGrid.innerHTML = featuredCharacters.map((character) => createCharacterCard(character)).join("");
}

function renderHomeSpotlight(characters) {
  const spotlight = document.querySelector("[data-home-spotlight]");
  if (!spotlight) {
    return;
  }

  const leadCharacter = characters.find((character) => character.featured && character.alignment === "Hostile") || characters[0];
  if (!leadCharacter) {
    spotlight.innerHTML = "<p class=\"loading-state\">Archive spotlight unavailable.</p>";
    return;
  }

  spotlight.innerHTML = `
    <article class="spotlight-card">
      <div class="spotlight-portrait">
        <img src="${getCharacterImage(leadCharacter)}" alt="Portrait of ${escapeHtml(leadCharacter.name)}">
      </div>
      <div class="spotlight-copy">
        <div>
          <p class="panel-label">Archive Spotlight</p>
          <h3>${escapeHtml(leadCharacter.name)}</h3>
          <div class="detail-meta">
            <span class="pill pill-accent">${escapeHtml(leadCharacter.category)}</span>
            <span class="pill">${escapeHtml(leadCharacter.alignment)}</span>
          </div>
          <p>${escapeHtml(leadCharacter.summary)}</p>
        </div>
        <a class="card-link" href="character.html?slug=${encodeURIComponent(leadCharacter.slug)}">Open spotlight profile</a>
      </div>
    </article>
  `;
}

function updateHeroStats(characters) {
  setStat("total", characters.length);
  setStat("heroes", characters.filter((character) => character.alignment === "Ally").length);
  setStat("threats", characters.filter((character) => character.alignment !== "Ally").length);
}

function setStat(name, value) {
  const element = document.querySelector(`[data-stat="${name}"]`);
  if (element) {
    element.textContent = String(value);
  }
}

function renderArchivePage(characters) {
  const grid = document.getElementById("archive-grid");
  const searchInput = document.getElementById("search-input");
  const gameFilter = document.getElementById("game-filter");
  const categoryFilter = document.getElementById("category-filter");
  const alignmentFilter = document.getElementById("alignment-filter");
  const resultsCount = document.getElementById("results-count");

  if (!grid || !searchInput || !gameFilter || !categoryFilter || !alignmentFilter || !resultsCount) {
    return;
  }

  populateSelect(gameFilter, extractUniqueValues(characters, "game"), "All games");
  populateSelect(categoryFilter, extractUniqueValues(characters, "category"), "All categories");
  populateSelect(alignmentFilter, extractUniqueValues(characters, "alignment"), "All alignments");

  const applyFilters = () => {
    const query = searchInput.value.trim().toLowerCase();
    const game = gameFilter.value;
    const category = categoryFilter.value;
    const alignment = alignmentFilter.value;

    const filtered = characters.filter((character) => {
      const searchableText = [
        character.name,
        character.summary,
        character.bio,
        character.game,
        ...(character.affiliations || []),
        ...(character.notableGames || [])
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !query || searchableText.includes(query);
      const matchesGame = game === "all" || character.game === game;
      const matchesCategory = category === "all" || character.category === category;
      const matchesAlignment = alignment === "all" || character.alignment === alignment;

      return matchesQuery && matchesGame && matchesCategory && matchesAlignment;
    });

    resultsCount.textContent = `${filtered.length} character${filtered.length === 1 ? "" : "s"} found`;
    renderArchiveGrid(grid, filtered);
  };

  [searchInput, gameFilter, categoryFilter, alignmentFilter].forEach((element) => {
    element.addEventListener("input", applyFilters);
    element.addEventListener("change", applyFilters);
  });

  applyFilters();
}

function populateSelect(select, values, label) {
  const options = [`<option value="all">${label}</option>`]
    .concat(values.map((value) => `<option value="${escapeAttribute(value)}">${escapeHtml(value)}</option>`));

  select.innerHTML = options.join("");
}

function extractUniqueValues(characters, key) {
  return [...new Set(characters.map((character) => character[key]).filter(Boolean))].sort();
}

function renderArchiveGrid(grid, characters) {
  if (characters.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>No records matched the current filters.</h2>
        <p>Try broadening the search or clearing one of the filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = characters.map((character) => createCharacterCard(character)).join("");
}

function renderDetailPage(characters) {
  const container = document.getElementById("character-detail");
  if (!container) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const id = params.get("id");
  const character = characters.find((entry) => entry.slug === slug || String(entry.id) === id);

  if (!character) {
    document.title = "Character Not Found | Umbrella Archive";
    container.innerHTML = `
      <div class="detail-empty empty-state">
        <p class="eyebrow">Record Missing</p>
        <h2>That character profile could not be found.</h2>
        <p>The link may be outdated, or the archive entry has not been indexed yet.</p>
        <div class="detail-actions">
          <a class="button button-primary" href="characters.html">Return to archive</a>
          <a class="button button-secondary" href="index.html">Go to homepage</a>
        </div>
      </div>
    `;
    return;
  }

  document.title = `${character.name} | Umbrella Archive`;
  container.innerHTML = createDetailLayout(character);
}

function createCharacterCard(character) {
  return `
    <article class="character-card reveal-card">
      <a class="card-surface" href="character.html?slug=${encodeURIComponent(character.slug)}" aria-label="Open ${escapeAttribute(character.name)} profile">
        <div class="card-portrait">
          <img src="${getCharacterImage(character)}" alt="Portrait of ${escapeHtml(character.name)}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-topline">
            <span class="pill pill-accent">${escapeHtml(character.category)}</span>
            <span class="pill">${escapeHtml(character.alignment)}</span>
          </div>
          <div>
            <h3>${escapeHtml(character.name)}</h3>
            <p class="character-summary">${escapeHtml(character.summary)}</p>
          </div>
          <div class="meta-row">
            <span class="meta-chip">${escapeHtml(character.game)}</span>
            <span class="meta-chip">${escapeHtml(character.status)}</span>
          </div>
          <div></div>
          <div class="card-footer">
            <span class="footer-note">${escapeHtml(character.firstAppearance)}</span>
            <span class="card-link">Open profile</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function createDetailLayout(character) {
  const abilities = (character.abilities || []).map((item) => `<li class="pill">${escapeHtml(item)}</li>`).join("");
  const affiliations = (character.affiliations || []).map((item) => `<li class="pill">${escapeHtml(item)}</li>`).join("");
  const notableGames = (character.notableGames || []).map((game) => `<li>${escapeHtml(game)}</li>`).join("");

  return `
    <div class="detail-grid">
      <article class="detail-main">
        <div class="detail-hero">
          <div class="detail-portrait">
            <img src="${getCharacterImage(character)}" alt="Portrait of ${escapeHtml(character.name)}">
          </div>
          <div class="detail-heading">
            <div class="breadcrumb">
              <a href="index.html">Home</a>
              <span>/</span>
              <a href="characters.html">Characters</a>
              <span>/</span>
              <span>${escapeHtml(character.name)}</span>
            </div>
            <div>
              <p class="eyebrow">Archive Profile</p>
              <h1>${escapeHtml(character.name)}</h1>
            </div>
            <div class="detail-meta">
              <span class="pill pill-accent">${escapeHtml(character.category)}</span>
              <span class="pill">${escapeHtml(character.alignment)}</span>
              <span class="pill">${escapeHtml(character.status)}</span>
            </div>
            <p class="detail-summary">${escapeHtml(character.summary)}</p>
          </div>
        </div>

        <section class="detail-section">
          <h2>Biography</h2>
          <p class="detail-text">${escapeHtml(character.bio)}</p>
        </section>

        <section class="detail-section">
          <h2>Abilities</h2>
          <ul class="chip-list">${abilities}</ul>
        </section>

        <section class="detail-section">
          <h2>Notable Appearances</h2>
          <ul class="game-list">${notableGames}</ul>
        </section>
      </article>

      <aside class="detail-sidebar">
        <section>
          <p class="panel-label">Key Facts</p>
          <dl class="stat-list">
            <div>
              <dt>Primary Game</dt>
              <dd>${escapeHtml(character.game)}</dd>
            </div>
            <div>
              <dt>First Appearance</dt>
              <dd>${escapeHtml(character.firstAppearance)}</dd>
            </div>
            <div>
              <dt>Alignment</dt>
              <dd>${escapeHtml(character.alignment)}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>${escapeHtml(character.status)}</dd>
            </div>
          </dl>
        </section>

        <section class="detail-section">
          <h2>Affiliations</h2>
          <ul class="chip-list">${affiliations}</ul>
        </section>

        <section class="detail-section">
          <h2>Archive Navigation</h2>
          <div class="detail-actions">
            <a class="button button-primary" href="characters.html">Back to archive</a>
            <a class="button button-secondary" href="index.html">Homepage</a>
          </div>
        </section>
      </aside>
    </div>
  `;
}

function getCharacterImage(character) {
  if (character.image && character.image.startsWith("data:")) {
    return character.image;
  }

  return createPortraitDataUri(character);
}

function createPortraitDataUri(character) {
  const palette = getCategoryPalette(character.category);
  const initials = getInitials(character.name);
  const safeTitle = escapeForSvg(character.name.replace(/&/g, "and"));
  const safeSubtitle = escapeForSvg(`${character.category} | ${character.alignment}`);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${palette.start}" />
          <stop offset="100%" stop-color="${palette.end}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="24%" r="62%">
          <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.98" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#bg)" />
      <rect width="800" height="1000" fill="rgba(255,255,255,0.015)" />
      <rect x="42" y="42" width="716" height="916" rx="28" fill="none" stroke="rgba(255,255,255,0.14)" />
      <circle cx="612" cy="164" r="240" fill="url(#glow)" />
      <rect x="70" y="74" width="250" height="26" rx="13" fill="rgba(255,255,255,0.06)" />
      <path d="M152 822C224 640 312 566 400 566C488 566 576 640 648 822" fill="rgba(0,0,0,0.42)" />
      <circle cx="400" cy="382" r="150" fill="rgba(0,0,0,0.5)" />
      <path d="M270 344C314 264 362 226 400 226C438 226 486 264 530 344" fill="rgba(255,255,255,0.06)" />
      <text x="80" y="148" fill="rgba(255,255,255,0.16)" font-size="22" font-family="Segoe UI, Arial, sans-serif" letter-spacing="8">UMBRELLA ARCHIVE</text>
      <text x="78" y="758" fill="rgba(255,255,255,0.08)" font-size="228" font-family="Georgia, serif" font-weight="700">${initials}</text>
      <text x="82" y="852" fill="#f7f1f1" font-size="42" font-family="Georgia, serif">${safeTitle}</text>
      <text x="82" y="894" fill="rgba(255,255,255,0.7)" font-size="24" font-family="Segoe UI, Arial, sans-serif" letter-spacing="2">${safeSubtitle}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCategoryPalette(category) {
  const palettes = {
    Hero: { start: "#171a22", end: "#4b0b10", glow: "#ef4149" },
    Villain: { start: "#120d12", end: "#610d14", glow: "#ff5b60" },
    Bioweapon: { start: "#101215", end: "#420609", glow: "#ff805f" },
    Operative: { start: "#17181d", end: "#33090d", glow: "#f14a52" },
    Support: { start: "#1a1b20", end: "#2d1015", glow: "#d66b74" }
  };

  return palettes[category] || { start: "#17181d", end: "#33090d", glow: "#f14a52" };
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function escapeForSvg(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderLoadError(error) {
  const targets = [
    document.querySelector("[data-featured-grid]"),
    document.getElementById("archive-grid"),
    document.getElementById("character-detail"),
    document.querySelector("[data-home-spotlight]")
  ].filter(Boolean);

  const message = error instanceof Error ? error.message : "Archive data could not be loaded.";
  targets.forEach((element) => {
    element.innerHTML = `
      <div class="empty-state">
        <h2>Archive unavailable</h2>
        <p>${escapeHtml(message)}</p>
      </div>
    `;
  });
}
