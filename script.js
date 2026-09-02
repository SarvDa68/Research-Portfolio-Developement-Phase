const $ = (selector) => document.querySelector(selector);

function text(selector, value) {
  const node = $(selector);
  if (node) node.textContent = value || "";
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function linkify(value) {
  return value.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noreferrer">$1</a>'
  );
}

function formatPlainText(value = "") {
  const blocks = value
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      const isList = lines.every((line) => line.startsWith("- "));

      if (isList) {
        return `<ul>${lines
          .map((line) => `<li>${linkify(escapeHtml(line.slice(2)))}</li>`)
          .join("")}</ul>`;
      }

      return `<p>${linkify(escapeHtml(lines.join(" ")))}</p>`;
    })
    .join("");
}

function makeLinks(links = []) {
  const validLinks = links.filter((link) => link.url);
  if (!validLinks.length) return "";

  return `
    <div class="entry-links">
      ${validLinks
        .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
        .join("")}
    </div>
  `;
}

function entrySearchText(topic, entry) {
  return [topic.title, entry.title, entry.date, entry.kind, entry.text]
    .join(" ")
    .toLowerCase();
}

function makeImages(images = []) {
  const validImages = images.filter((image) => image.url);
  if (!validImages.length) return "";

  return `
    <div class="entry-media">
      ${validImages
        .map(
          (image) => `
            <a href="${escapeHtml(image.url)}" target="_blank" rel="noreferrer">
              <img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.caption || "Project image")}" loading="lazy" />
              ${image.caption ? `<span>${escapeHtml(image.caption)}</span>` : ""}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function makeEntry(topic, entry) {
  return `
    <details class="entry" data-search="${escapeHtml(entrySearchText(topic, entry))}">
      <summary>
        <span>
          ${entry.kind ? `<small>${escapeHtml(entry.kind)}</small>` : ""}
          <strong>${escapeHtml(entry.title)}</strong>
        </span>
        ${entry.date ? `<em>${escapeHtml(entry.date)}</em>` : ""}
      </summary>
      <div class="entry-body">
        ${makeImages(entry.images)}
        ${formatPlainText(entry.text)}
        ${makeLinks(entry.links)}
      </div>
    </details>
  `;
}

function makeTopic(topic) {
  const id = slug(topic.title);
  const entries = topic.entries || [];

  return `
    <section class="topic" id="${id}" data-topic="${id}">
      <div class="topic-head">
        <h3>${escapeHtml(topic.title)}</h3>
        <span>${entries.length}</span>
      </div>
      <div class="entry-list">
        ${entries.map((entry) => makeEntry(topic, entry)).join("")}
      </div>
    </section>
  `;
}

function emptyEntry() {
  return {
    title: "",
    date: "",
    kind: "",
    text: "",
    images: [],
    links: []
  };
}

function parseContent(content = "") {
  const topics = [];
  let topic = null;
  let entry = null;
  let textLines = [];

  function commitEntry() {
    if (!entry) return;
    entry.text = textLines.join("\n").trim();
    if (entry.title || entry.text) topic.entries.push(entry);
    entry = null;
    textLines = [];
  }

  function commitTopic() {
    commitEntry();
    if (topic?.entries.length) topics.push(topic);
    topic = null;
  }

  content.split("\n").forEach((rawLine) => {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith("# ")) {
      commitTopic();
      topic = { title: trimmed.slice(2).trim(), entries: [] };
      return;
    }

    if (trimmed.startsWith("## ")) {
      if (!topic) topic = { title: "Work", entries: [] };
      commitEntry();
      entry = emptyEntry();
      entry.title = trimmed.slice(3).trim();
      return;
    }

    if (!entry && trimmed) {
      if (!topic) topic = { title: "Work", entries: [] };
      entry = emptyEntry();
    }

    if (entry && /^date:/i.test(trimmed)) {
      entry.date = trimmed.replace(/^date:/i, "").trim();
      return;
    }

    if (entry && /^kind:/i.test(trimmed)) {
      entry.kind = trimmed.replace(/^kind:/i, "").trim();
      return;
    }

    if (entry && /^link:/i.test(trimmed)) {
      const [label, url] = trimmed.replace(/^link:/i, "").split("|").map((part) => part?.trim());
      if (label && url) entry.links.push({ label, url });
      return;
    }

    if (entry && /^image:/i.test(trimmed)) {
      const [url, caption] = trimmed.replace(/^image:/i, "").split("|").map((part) => part?.trim());
      if (url) entry.images.push({ url, caption: caption || "" });
      return;
    }

    if (entry) textLines.push(line);
  });

  commitTopic();
  return topics;
}

function renderTopicButtons(topics) {
  const buttons = topics
    .filter((topic) => topic.entries?.length)
    .map(
      (topic) =>
        `<button class="topic-filter" type="button" data-topic-filter="${slug(topic.title)}">${escapeHtml(topic.title)}</button>`
    )
    .join("");

  $("#topic-filters").innerHTML = `
    <button class="topic-filter is-active" type="button" data-topic-filter="all">All</button>
    ${buttons}
  `;
}

function renderContent(targetSelector, content, hiddenSelector, navSelector) {
  const topics = parseContent(content);
  const target = $(targetSelector);

  target.innerHTML = topics.map(makeTopic).join("");

  if (!topics.length) {
    $(hiddenSelector).hidden = true;
    if (navSelector) $(navSelector).hidden = true;
  }

  return topics;
}

function applyFilters() {
  const query = $("#work-search").value.trim().toLowerCase();
  const activeTopic = $(".topic-filter.is-active")?.dataset.topicFilter || "all";
  let visibleEntries = 0;

  document.querySelectorAll("#project-list .topic").forEach((topic) => {
    const topicMatches = activeTopic === "all" || topic.dataset.topic === activeTopic;
    let topicHasVisibleEntry = false;

    topic.querySelectorAll(".entry").forEach((entry) => {
      const entryMatches = !query || entry.dataset.search.includes(query);
      const isVisible = topicMatches && entryMatches;
      entry.hidden = !isVisible;
      topicHasVisibleEntry = topicHasVisibleEntry || isVisible;
      if (isVisible) visibleEntries += 1;
    });

    topic.hidden = !topicHasVisibleEntry;
  });

  $("#empty-state").hidden = visibleEntries !== 0;
}

function bindInteractions() {
  $("#work-search").addEventListener("input", applyFilters);

  $("#topic-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic-filter]");
    if (!button) return;

    document.querySelectorAll(".topic-filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilters();
  });

  document.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    $("#scroll-progress").style.transform = `scaleX(${progress})`;
  });
}

function render() {
  const projectTopics = parseContent(profile.projects);
  const academicTopics = parseContent(profile.academicRecord);
  const emailHref = `mailto:${profile.email}`;

  text("#profile-title", profile.title);
  text("#profile-name", profile.name);
  text("#profile-summary", profile.summary);

  $("#email-link").href = emailHref;
  $("#email-link-secondary").href = emailHref;
  $("#cv-link").href = profile.cv;
  $("#cv-link-secondary").href = profile.cv;

  if (profile.github) {
    $("#github-link").href = profile.github;
  } else {
    $("#github-link").hidden = true;
  }

  if (profile.portrait) {
    $("#portrait").style.backgroundImage = `url("${profile.portrait}")`;
    $("#portrait").classList.add("has-image");
  }

  $("#project-list").innerHTML = projectTopics.map(makeTopic).join("");
  $("#academic-list").innerHTML = academicTopics.map(makeTopic).join("");
  renderTopicButtons(projectTopics);

  if (!projectTopics.length) {
    $("#projects").hidden = true;
    $("#projects-nav-link").hidden = true;
  }

  if (!academicTopics.length) {
    $("#academic-record").hidden = true;
    $("#academic-nav-link").hidden = true;
  }

  $("#cv-notes").innerHTML = formatPlainText(profile.cvNotes);
  bindInteractions();
  applyFilters();
}

window.addEventListener("DOMContentLoaded", render);
