/* Mobile navigation */
function setupMobileNavigation() {
  const mobileNavQuery = window.matchMedia("(max-width: 700px)");

  document.querySelectorAll(".main-nav").forEach((nav) => {
    if (nav.querySelector(".mobile-menu-toggle")) return;

    const toggle = document.createElement("button");
    toggle.className = "mobile-menu-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    toggle.textContent = "(M)";
    nav.prepend(toggle);

    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("mobile-nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      toggle.textContent = isOpen ? "(MENU)" : "(M)";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("mobile-nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        toggle.textContent = "(M)";
      });
    });
  });

  function closeDesktopNav() {
    if (mobileNavQuery.matches) return;
    document.body.classList.remove("mobile-nav-open");
    document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      toggle.textContent = "(M)";
    });
  }

  mobileNavQuery.addEventListener?.("change", closeDesktopNav);
  closeDesktopNav();
}

setupMobileNavigation();
const projectData = {
  "exhibition-of-forgotten-objects": {
    year: "2026",
    title: "Exhibition of Forgotten Objects",
    description:
      "The project <em>Exhibition of Forgotten Objects</em> is a graphic tool that allows users to upload objects and arrange them together with others. Users can design a virtual exhibition space with these objects and digitally preserve them in this way. In order to convey the character of forgetting, the project aesthetically refers to old computer games and translates all images into pixel graphics.",
    images: [
      {
        src: "assets/exhibition-of-forgotten-objects/exhibition-of-forgotten-objects-01.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/exhibition-of-forgotten-objects/exhibition-of-forgotten-objects-02.jpg",
        orientation: "landscape"
      }
    ]
  },

  "the-market-hallucination": {
    year: "2026",
    title: "The Market Hallucination",
    description:
      "At the centre of <em>The Market Hallucination</em> is Satelite Core, a fictional fashion trend presented through the visual identity of the imaginary forecasting studio Gleam Studio. The project uses this fictional forecast to question how trend forecasting creates authority. A forecast does more than describe the future. It can also influence what brands, designers and consumers begin to see, desire and produce.",
    images: [
      {
        src: "assets/the-market-hallucination/gleam-studio-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/gleam-studio-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/gleam-studio-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/gleam-studio-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-7.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-9.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-10.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-11.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-12.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-13.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-14.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-15.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-16.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/the-market-hallucination/the-market-hallucination-17.jpg",
        orientation: "landscape"
      }
    ]
  },

  "vorhang-auf-dunkel": {
    year: "2026",
    title: "Vorhang auf, Dunkel!",
    description:
      "<em>Vorhang auf, Dunkel!</em> tells the story of Ari’s darkness. It has always been there. Quiet, familiar, easy to overlook. Then, one day, it grows too big to ignore, showing up everywhere and bringing fear with it. The more Ari tries to push it away, the more it expands.<br><br>But one night her room turns into a shimmering theatre, and the darkness waits at centre stage. When Ari finally faces it, they begin to rediscover each other, and Ari finds her way back to her place on her inner stage.",
    images: [
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-7.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-9.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-10.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/vorhang-auf-dunkel/vorhang-auf-dunkel-11.jpg",
        orientation: "landscape"
      }
    ]
  },

  "reparierenstattwegwerfen": {
    year: "2026",
    title: "#reparierenstattwegwerfen",
    description:
      "In Germany, each person produces around half a ton of household waste per year, in addition to electronic and textile waste. This throwaway culture has severe consequences for the environment and, in the long term, for society itself. Even though many discarded objects could still be repaired, saving resources and encouraging responsibility. The poster campaign <em>#reparierenstattwegwerfen</em> aims to motivate people to repair instead of discard, supporting a more conscious approach to consumption and promoting the circular economy.",
    images: [
      {
        src: "assets/reparieren-statt-wegwerfen/reparieren-statt-wegwerfen-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/reparieren-statt-wegwerfen/reparieren-statt-wegwerfen-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/reparieren-statt-wegwerfen/reparieren-statt-wegwerfen-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/reparieren-statt-wegwerfen/reparieren-statt-wegwerfen-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/reparieren-statt-wegwerfen/reparieren-statt-wegwerfen-5.jpg",
        orientation: "portrait"
      }
    ]
  },

  "werkschau": {
    year: "2025",
    title: "Werkschau",
    description:
      "For the <em>Werkschau</em> exhibition, a poster and a floor plan were developed. The design is inspired by a ball-balance game.<br><br>The university becomes a playful space in which new ideas emerge, encounters take place, and exchange unfolds. During the exhibition, visitors become active elements whose movements make the game concept spatially and performatively tangible.<br><br>The work explores participation, spatial structuring, and playful user guidance within the context of the exhibition.",
    images: [
      {
        src: "assets/werkschau/werkschau-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkschau/werkschau-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkschau/werkschau-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkschau/werkschau-4.jpg",
        orientation: "landscape"
      }
    ]
  },

  "alles-unter-einem-dach": {
    year: "2025",
    title: "Alles unter einem Dach",
    description:
      "<em>Alles unter einem Dach</em> is a redesign for the cultural center Treffpunkt Freizeit, focusing on orientation and user guidance. The context-sensitive wayfinding system creates recognizability while reflecting the diversity of the multigenerational house. Based on a modular design principle, its forms visualize the wide range of activities, services, and users brought together under one roof.",
    images: [
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-7.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/alles-unter-einem-dach/alles-unter-einem-dach-9.jpg",
        orientation: "landscape"
      }
    ]
  },

  "hundert-loecher": {
    year: "2025",
    title: "Hundert Löcher",
    description:
      "The picture book project <em>Hundert Löcher</em> opens up a playful way of exploring the world and reflects on perspective and perception in a child-friendly manner. The illustrations were created with gouache and then further developed digitally.",
    images: [
      {
        src: "assets/hundert-löcher/hundert-löcher-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-7.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-9.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-10.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-11.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-12.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-13.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-14.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-15.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/hundert-löcher/hundert-löcher-16.jpg",
        orientation: "landscape"
      }
    ]
  },

  "werkbuch-ii": {
    year: "2025",
    title: "Werkbuch II",
    description:
      "<em>Werkbuch II</em> documents projects from the Communication Design programme. It serves as a collection of ideas, a visualisation of processes, and a reflection on creative development.",
    images: [
      {
        src: "assets/werkbuch-zwei/werkbuch-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-7.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-9.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-10.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-11.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-12.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-13.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-14.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-15.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-16.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-zwei/werkbuch-17.jpg",
        orientation: "landscape"
      }
    ]
  },

  "ei-butter-und-salz": {
    year: "2024",
    title: "Ei, Butter und Salz",
    description:
      "The zine <em>Ei, Butter und Salz</em> stages the process of making a fried egg. A familiar recipe is deconstructed and transformed into an alternative narrative. The project aims to reflect on cultural memory and initiate processes of relearning.",
    images: [
      {
        src: "assets/ei-butter-und-salz/ei-butter-und-salz-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/ei-butter-und-salz/ei-butter-und-salz-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/ei-butter-und-salz/ei-butter-und-salz-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/ei-butter-und-salz/ei-butter-und-salz-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/ei-butter-und-salz/ei-butter-und-salz-5.jpg",
        orientation: "landscape"
      }
    ]
  },

  "die-cyborg-kakerlake": {
    year: "2024",
    title: "Die Cyborg Kakerlake",
    description:
      "<em>Die Cyborg Kakerlake</em> is a collaborative project with a focus on exhibition design. An interactive framework allows visitors to flip or rearrange double-sided information panels, creating a variety of spatial configurations.",
    images: [
      {
        src: "assets/die-cyborg-kakerlake/die-cyborg-kakerlake-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/die-cyborg-kakerlake/die-cyborg-kakerlake-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/die-cyborg-kakerlake/die-cyborg-kakerlake-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/die-cyborg-kakerlake/die-cyborg-kakerlake-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/die-cyborg-kakerlake/die-cyborg-kakerlake-5.jpg",
        orientation: "landscape"
      }
    ]
  },

  "marguerite": {
    year: "2024",
    title: "Marguerite",
    description:
      "Jeanne Lanvin was one of the most influential fashion designers of the early 20th century, known for her innovative and visionary creations. The project <em>Marguerite</em> pays homage to the intimate bond between Lanvin and her daughter and muse, Marguerite. Within the design, the daisy becomes the central motif, symbolizing their deep connection and Marguerite’s role as Lanvin’s greatest source of inspiration.",
    images: [
      {
        src: "assets/marguerite/marguerite-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/marguerite/marguerite-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/marguerite/marguerite-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/marguerite/marguerite-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/marguerite/marguerite-5.jpg",
        orientation: "landscape"
      }
    ]
  },

  "nachtfallen": {
    year: "2024",
    title: "Nachtfallen",
    description:
      "The project <em>Nachtfallen</em> explores the visual representation of dream experiences. Memories of surreal, emotional, and often blurred dream images form the photographic basis of the project. It investigates how unreal spaces can be reconstructed and how photography can act as a medium between memory, reality, and the perception of time.",
    images: [
      {
        src: "assets/nachtfallen/nachtfallen-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/nachtfallen/nachtfallen-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/nachtfallen/nachtfallen-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/nachtfallen/nachtfallen-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/nachtfallen/nachtfallen-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/nachtfallen/nachtfallen-6.jpg",
        orientation: "portrait"
      }
    ]
  },

  "fluesterchen": {
    year: "2024",
    title: "Flüsterchen",
    description:
      "<em>Flüsterchen</em> is a performative vessel with two spouts and a hollow body into which thoughts can be whispered. The words pass through the form and escape again on the other side.<br><br>How do we come into contact with ourselves? Which thoughts do we want to release, and which do we want to manifest? <em>Flüsterchen</em> becomes an interactive mouthpiece, opening up a new form of self-communication.",
    images: [
      {
        src: "assets/flüsterchen/flüsterchen-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/flüsterchen/flüsterchen-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/flüsterchen/flüsterchen-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/flüsterchen/flüsterchen-4.jpg",
        orientation: "landscape"
      }
    ]
  },

  "symbiosis": {
    year: "2023",
    title: "Symbiosis",
    description:
      "The video project <em>Symbiosis – Wo wir zusammen endlos sind</em> is inspired by the behaviours and dynamics of fungal communities. Organic textiles become a medium between body and nature. For the production of the textiles, self-grown fungal leather was used. It was developed through a fermentation process and highlights the potential of bio-based resources for sustainable and future-oriented design.",
    images: [
      {
        src: "assets/symbiosis/symbiosis-1.mp4",
        poster: "assets/projektvorschau/symbiosis-pv.jpg",
        orientation: "landscape",
        type: "video"
      },
      {
        src: "assets/symbiosis/symbiosis-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-4.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-5.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-6.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-7.mp4",
        orientation: "landscape",
        type: "silent-video"
      },
      {
        src: "assets/symbiosis/symbiosis-8.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-9.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-10.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/symbiosis/symbiosis-11.jpg",
        orientation: "landscape"
      }
    ]
  },

  "werkbuch-i": {
    year: "2023",
    title: "Werkbuch I",
    description:
      "<em>Werkbuch I</em> documents projects from a three-year fashion design programme at Lette Verein Berlin. The analogue project volume serves as a medium for archiving design ideas and drafts.",
    images: [
      {
        src: "assets/werkbuch-eins/werkbuch-eins-1.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-eins/werkbuch-eins-2.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-eins/werkbuch-eins-3.jpg",
        orientation: "landscape"
      },
      {
        src: "assets/werkbuch-eins/werkbuch-eins-4.jpg",
        orientation: "landscape"
      }
    ]
  },

  "ich-heisse-hannah": {
    year: "2026",
    title: "Large Doll Mouth Closed",
    description:
      "<em>Large Doll Mouth Closed</em> explores the question of when an object becomes legible as human. In the context of contemporary AI systems that simulate language, emotion, and memory, humanity increasingly appears as a configuration of recognizable patterns that can be reproduced. Rather than an inherent quality, humanity is understood here as a form of attribution that emerges in the relationship between object and viewer, where the boundary between subject and object is continuously renegotiated.",
    images: [
      {
        src: "assets/large-doll-mouth-closed/large-doll-mouth-closed.mp4",
        poster: "assets/projektvorschau/large-doll-mouth-closed-pv.jpg",
        orientation: "landscape",
        type: "video"
      }
    ]
  }
};

/* Projektübersicht als Rolodex aus Projektdaten */

function createOverviewMedia(project) {
  const firstMedia = project.images?.[0];
  const img = document.createElement("img");

  img.alt = "";
  img.src = encodeURI(firstMedia?.type === "video"
    ? firstMedia?.poster || ""
    : firstMedia?.src || "");

  img.addEventListener("error", () => {
    img.closest(".home-project")?.classList.add("image-missing");
  });

  return img;
}

const overviewImageOverrides = {
  "exhibition-of-forgotten-objects": "assets/projektvorschau/exhibition-of-forgotten-objects-pv.jpg",
  "the-market-hallucination": "assets/projektvorschau/the-market-hallucination-pv.jpg",
  "ich-heisse-hannah": "assets/projektvorschau/large-doll-mouth-closed-pv.jpg",
  "vorhang-auf-dunkel": "assets/projektvorschau/vorhang-auf-dunkel-pv.jpg",
  "reparierenstattwegwerfen": "assets/projektvorschau/reparieren-statt-wegwerfen-pv.jpg",
  "werkschau": "assets/projektvorschau/werkschau-pv.jpg",
  "alles-unter-einem-dach": "assets/projektvorschau/alles-unter-einem-dach-pv.jpg",
  "hundert-loecher": "assets/projektvorschau/hundert-löcher-pv.jpg",
  "werkbuch-ii": "assets/projektvorschau/werkbuch-zwei-pv.jpg",
  "ei-butter-und-salz": "assets/projektvorschau/ei-butter-und-salz-pv.jpg",
  "die-cyborg-kakerlake": "assets/projektvorschau/die-cyborg-kakerlake-pv.jpg",
  "marguerite": "assets/projektvorschau/marguerite-pv.jpg",
  "nachtfallen": "assets/projektvorschau/nachtfallen-pv.jpg",
  "fluesterchen": "assets/projektvorschau/flüsterchen-pv.jpg",
  "symbiosis": "assets/projektvorschau/symbiosis-pv.jpg",
  "werkbuch-i": "assets/projektvorschau/werkbuch-eins-pv.jpg"
};

const availableOverviewImages = new Set([
  ...Object.values(overviewImageOverrides)
]);

const overviewFallbackImages = Array.from(availableOverviewImages);

const horizontalDetailProjectSlugs = new Set([
  "alles-unter-einem-dach",
  "die-cyborg-kakerlake",
  "ei-butter-und-salz",
  "exhibition-of-forgotten-objects",
  "fluesterchen",
  "hundert-loecher",
  "ich-heisse-hannah",
  "nachtfallen",
  "reparierenstattwegwerfen",
  "symbiosis",
  "the-market-hallucination",
  "vorhang-auf-dunkel",
  "werkbuch-i",
  "werkbuch-ii",
  "werkschau",
  "marguerite"
]);


const projectCategoryLabels = {
  "exhibition-of-forgotten-objects": "Interface",
  "the-market-hallucination": "Development, Interface",
  "large-doll-mouth-closed": "Development, Moving Image",
  "ich-heisse-hannah": "Development, Moving Image",
  "vorhang-auf-dunkel": "Illustration, Writing",
  "reparieren-statt-wegwerfen": "Development, Design",
  "reparierenstattwegwerfen": "Development, Design",
  "werkschau": "Identity",
  "alles-unter-einem-dach": "Identity",
  "hundert-loecher": "Illustration, Writing",
  "hundert-löcher": "Illustration, Writing",
  "werkbuch-ii": "Editorial Design",
  "werkbuch-zwei": "Editorial Design",
  "ei-butter-und-salz": "Development, Design",
  "die-cyborg-kakerlake": "Development, Design",
  "marguerite": "Collection Design, Development",
  "nachtfallen": "Development",
  "flüsterchen": "Development, Design",
  "fluesterchen": "Development, Design",
  "symbiosis": "Collection Design, Development, Moving Image",
  "werkbuch-i": "Editorial Design",
  "werkbuch-eins": "Editorial Design"
};

function getProjectCategoryLabel(slug, project) {
  return project.category || projectCategoryLabels[slug] || "Development, Design";
}



const projectListCategoryLabels = {
  "exhibition-of-forgotten-objects": "Interface",
  "the-market-hallucination": "Development",
  "large-doll-mouth-closed": "Development",
  "ich-heisse-hannah": "Development",
  "vorhang-auf-dunkel": "Illustration",
  "reparieren-statt-wegwerfen": "Development",
  "reparierenstattwegwerfen": "Development",
  "werkschau": "Identity",
  "alles-unter-einem-dach": "Identity",
  "hundert-loecher": "Illustration",
  "hundert-löcher": "Illustration",
  "werkbuch-ii": "Editorial Design",
  "werkbuch-zwei": "Editorial Design",
  "ei-butter-und-salz": "Development",
  "die-cyborg-kakerlake": "Development",
  "marguerite": "Collection Design",
  "nachtfallen": "Development",
  "flüsterchen": "Development",
  "fluesterchen": "Development",
  "symbiosis": "Collection Design",
  "werkbuch-i": "Editorial Design",
  "werkbuch-eins": "Editorial Design"
};function getProjectListCategoryLabel(slug, project) {
  return project.listCategory || projectListCategoryLabels[slug] || getProjectCategoryLabel(slug, project).split(",")[0].trim();
}
function getFallbackOverviewImage(project) {
  const key = project.slug || project.title || "";
  const hash = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return overviewFallbackImages[hash % overviewFallbackImages.length];
}

const overviewProjectOrder = [
  "exhibition-of-forgotten-objects",
  "the-market-hallucination",
  "ich-heisse-hannah",
  "vorhang-auf-dunkel",
  "reparierenstattwegwerfen",
  "werkschau",
  "alles-unter-einem-dach",
  "hundert-loecher",
  "werkbuch-ii",
  "ei-butter-und-salz",
  "die-cyborg-kakerlake",
  "marguerite",
  "nachtfallen",
  "fluesterchen",
  "symbiosis",
  "werkbuch-i"
];
const overviewProjectSlugs = new Set([
  "exhibition-of-forgotten-objects",
  "the-market-hallucination",
  "ich-heisse-hannah",
  "alles-unter-einem-dach",
  "werkbuch-ii",
  "ei-butter-und-salz",
  "marguerite",
  "symbiosis"
]);

function getOverviewImageSrc(project) {
  if (overviewImageOverrides[project.slug]) return overviewImageOverrides[project.slug];

  const firstMedia = project.images?.find((media) => media?.src && media.type !== "video");
  const imageSrc = firstMedia?.src || "";

  if (!imageSrc || !availableOverviewImages.has(imageSrc)) {
    return getFallbackOverviewImage(project);
  }

  return imageSrc;
}

function setupHomeMouseImages() {
  const traceImages = [
    document.querySelector(".home-trace-image-fluesterchen"),
    document.querySelector(".home-trace-image-marguerite")
  ].filter(Boolean);

  if (!traceImages.length) return;

  window.addEventListener("pointermove", (event) => {
    const homeIsReady =
      document.body.classList.contains("home-landing-active") &&
      document.body.classList.contains("intro-complete") &&
      !document.body.classList.contains("project-overview-active");

    traceImages.forEach((element) => {
      if (!homeIsReady) {
        element.classList.remove("is-visible");
        return;
      }

      const rect = element.getBoundingClientRect();
      const pointerIsInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      element.classList.toggle("is-visible", pointerIsInside);
    });
  });
}
setupHomeMouseImages();
async function setupThreeProjectWheel(projects, overview) {
  const stage = overview.querySelector(".three-wheel-stage");
  const canvasHost = overview.querySelector(".three-wheel-canvas");
  const preview = overview.querySelector(".wheel-project-preview");
  const previewImage = overview.querySelector(".wheel-project-preview-image");
  const previewTitle = overview.querySelector(".wheel-project-preview-title");

  if (!stage || !canvasHost || !projects.length) return;

  previewImage.addEventListener("load", () => {
    previewImage.classList.remove("image-missing");
  });

  let THREE;
  try {
    THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
  } catch (error) {
    setupDomProjectWheel(projects, overview);
    return;
  }

  const wheelProjects = projects;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 100);
  const baseCameraY = 1.92;
  const baseCameraZ = 6.18;
  camera.position.set(0, baseCameraY, baseCameraZ);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasHost.appendChild(renderer.domElement);

  const group = new THREE.Group();
  group.position.set(0, -0.48, 0);
  group.scale.setScalar(1.18);
  scene.add(group);

  const radiusX = 1.85;
  const radiusZ = 1.08;
  const angleStep = (Math.PI * 2) / wheelProjects.length;
  const cardGeometry = new THREE.BoxGeometry(0.94, 0.529, 0.002);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const meshes = [];
  let activeIndex = 0;
  const startProgress = 0.5;
  let scrollProgress = startProgress;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;
  let wheelOffset = startProgress;
  let targetZoom = 1;
  let currentZoom = 1;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragMoved = false;
  let isDragging = false;
  const maxProgress = Math.max(1, wheelProjects.length);

  wheelProjects.forEach((project, index) => {
    const faceMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true
    });
    const edgeMaterial = new THREE.MeshBasicMaterial({
      color: 0x111111,
      transparent: true
    });
    const mesh = new THREE.Mesh(cardGeometry, [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      faceMaterial,
      faceMaterial
    ]);

    mesh.userData.project = project;
    mesh.userData.baseAngle = index * angleStep;
    group.add(mesh);
    meshes.push(mesh);

    makeWheelCardTexture(project, THREE).then((texture) => {
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      faceMaterial.map = texture;
      faceMaterial.color.set(0xffffff);
      faceMaterial.needsUpdate = true;
    });
  });

  function setActiveProject(index) {
    if (index === activeIndex && preview.dataset.slug === wheelProjects[index]?.slug) return;

    activeIndex = index;
    const project = wheelProjects[index];
    const overviewImageSrc = getOverviewImageSrc(project);

    preview.href = `project.html?project=${project.slug}`;
    preview.dataset.slug = project.slug;
    previewTitle.innerHTML = "";

    const yearLabel = document.createElement("span");
    yearLabel.className = "wheel-project-preview-year";
    yearLabel.textContent = project.year || "";

    const titleLabel = document.createElement("span");
    titleLabel.className = "wheel-project-preview-name";
    titleLabel.textContent = project.title || "";

    previewTitle.append(yearLabel, titleLabel);

    previewImage.classList.remove("image-missing");
    previewImage.onerror = () => {
      previewImage.onerror = null;
      previewImage.classList.remove("image-missing");
      previewImage.src = encodeURI(getFallbackOverviewImage(project));
    };
    previewImage.src = encodeURI(overviewImageSrc);
    previewImage.alt = project.title;
    preview.classList.toggle("is-video-preview", !overviewImageSrc);
  }

  function updateScrollProgress() {
    scrollProgress = wheelOffset;
    scrollProgress = ((scrollProgress % maxProgress) + maxProgress) % maxProgress;
  }

  function resizeWheel() {
    const rect = stage.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animateWheel() {
    updateScrollProgress();
    currentTiltX += (targetTiltX - currentTiltX) * 0.08;
    currentTiltY += (targetTiltY - currentTiltY) * 0.08;
    currentZoom += (targetZoom - currentZoom) * 0.08;
    group.rotation.x = currentTiltX;
    group.rotation.y = currentTiltY;
    camera.position.set(0, baseCameraY - (currentZoom - 1) * 0.46, baseCameraZ - (currentZoom - 1) * 1.55);
    camera.lookAt(0, -0.12, 0);

    let closestIndex = 0;
    let closestDepth = -Infinity;
    const rotation = scrollProgress * angleStep;

    meshes.forEach((mesh, index) => {
      const angle = mesh.userData.baseAngle + rotation;
      const x = Math.sin(angle) * radiusX;
      const z = Math.cos(angle) * radiusZ;
      const frontness = (z + radiusZ) / (radiusZ * 2);
      const frontBoost = Math.pow(frontness, 1.35);
      const centerLift = Math.pow(Math.max(0, Math.cos(angle)), 10) * 0.38;
      const y = Math.cos(angle) * 0.2 + centerLift;

      mesh.position.set(x, y, z);
      mesh.scale.setScalar(0.58 + frontBoost * 0.52);
      mesh.rotation.set(-0.2, angle + Math.PI / 2, Math.sin(angle) * -0.018);
      mesh.material.forEach((material) => {
        material.opacity = 0.46 + frontness * 0.54;
      });
      mesh.renderOrder = Math.round(frontness * 100);

      if (z > closestDepth) {
        closestDepth = z;
        closestIndex = index;
      }
    });

    setActiveProject(closestIndex);
    renderer.render(scene, camera);
    requestAnimationFrame(animateWheel);
  }

  window.addEventListener("resize", resizeWheel);
  stage.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        event.preventDefault();
        targetZoom = clamp(targetZoom - event.deltaY * 0.0015, 1, 1.42);
        return;
      }

      event.preventDefault();
      wheelOffset += event.deltaY * 0.0022;
    },
    { passive: false }
  );

  stage.addEventListener("dblclick", () => {
    targetZoom = 1;
  });

  function updatePointerFromEvent(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  stage.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".wheel-project-preview")) return;

    isDragging = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    stage.classList.add("is-dragging");
    stage.setPointerCapture?.(event.pointerId);
  });

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    targetTiltY = clamp(normalizedX * 0.26, -0.26, 0.26);
    targetTiltX = clamp(-normalizedY * 0.24, -0.24, 0.24);

    if (!isDragging) return;

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;
    const dragDistance = Math.hypot(deltaX, deltaY);

    if (dragDistance > 4) dragMoved = true;

    wheelOffset += deltaX * 0.0026;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
  });

  function stopDragging(event) {
    if (!isDragging) return;

    isDragging = false;
    stage.classList.remove("is-dragging");
    stage.releasePointerCapture?.(event.pointerId);
  }

  stage.addEventListener("pointerup", stopDragging);
  stage.addEventListener("pointercancel", stopDragging);
  stage.addEventListener("pointerleave", () => {
    targetTiltX = 0;
    targetTiltY = 0;
  });

  stage.addEventListener("click", (event) => {
    if (event.target.closest(".wheel-project-preview")) return;
    if (dragMoved) return;

    updatePointerFromEvent(event);
    raycaster.setFromCamera(pointer, camera);

    const hit = raycaster.intersectObjects(meshes, false)[0];
    const project = hit?.object.userData.project || wheelProjects[activeIndex];

    if (project) window.location.href = `project.html?project=${project.slug}`;
  });

  setActiveProject(1 % wheelProjects.length);
  resizeWheel();
  animateWheel();
}

function setupDomProjectWheel(projects, overview) {
  const stage = overview.querySelector(".three-wheel-stage");
  const canvasHost = overview.querySelector(".three-wheel-canvas");
  const preview = overview.querySelector(".wheel-project-preview");
  const previewImage = overview.querySelector(".wheel-project-preview-image");
  const previewTitle = overview.querySelector(".wheel-project-preview-title");

  if (!stage || !canvasHost || !projects.length) return;

  previewImage.addEventListener("load", () => {
    previewImage.classList.remove("image-missing");
  });

  canvasHost.innerHTML = "";
  canvasHost.classList.add("dom-wheel-canvas");

  const cards = projects.map((project) => {
    const card = document.createElement("a");
    card.className = "dom-wheel-card";
    card.href = `project.html?project=${project.slug}`;
    card.innerHTML = `
      <span class="dom-wheel-card-header"><b>${project.year}</b><em>${project.title}</em></span>
      <img src="${encodeURI(getOverviewImageSrc(project))}" alt="">
    `;
    canvasHost.appendChild(card);
    return card;
  });

  let progress = 0;
  let wheelOffset = 0;
  const maxProgress = Math.max(1, projects.length);
  const angleStep = (Math.PI * 2) / projects.length;

  function setActiveProject(index) {
    const project = projects[index];
    if (!project) return;

    preview.href = `project.html?project=${project.slug}`;
    previewImage.classList.remove("image-missing");
    previewImage.onerror = () => {
      previewImage.onerror = null;
      previewImage.classList.remove("image-missing");
      previewImage.src = encodeURI(getFallbackOverviewImage(project));
    };
    previewImage.src = encodeURI(getOverviewImageSrc(project));
    previewImage.alt = project.title;
    previewTitle.innerHTML = "";

    const yearLabel = document.createElement("span");
    yearLabel.className = "wheel-project-preview-year";
    yearLabel.textContent = project.year || "";

    const titleLabel = document.createElement("span");
    titleLabel.className = "wheel-project-preview-name";
    titleLabel.textContent = project.title || "";

    previewTitle.append(yearLabel, titleLabel);
  }

  function updateDomWheel() {
    const scrollLength = Math.max(1, overview.offsetHeight - window.innerHeight);
    const pageProgress = clamp((-overview.getBoundingClientRect().top / scrollLength) * maxProgress, 0, maxProgress);

    progress = pageProgress + wheelOffset;
    progress = ((progress % maxProgress) + maxProgress) % maxProgress;

    let activeIndex = 0;
    let closestFront = -Infinity;

    cards.forEach((card, index) => {
      const angle = index * angleStep + progress * angleStep;
      const x = Math.sin(angle) * 37;
      const z = Math.cos(angle);
      const y = Math.cos(angle) * -3;
      const frontness = (z + 1) / 2;
      const scale = 0.48 + frontness * 0.54;
      const rotateY = Math.sin(angle) * -68;
      const opacity = 0.28 + frontness * 0.72;

      card.style.transform = `translate(-50%, -50%) translate3d(${x}vw, ${y}vh, ${z * 80}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.zIndex = String(Math.round(frontness * 100));
      card.style.opacity = String(opacity);

      if (z > closestFront) {
        closestFront = z;
        activeIndex = index;
      }
    });

    setActiveProject(activeIndex);
    requestAnimationFrame(updateDomWheel);
  }

  function rotateFromWheel(event) {
    wheelOffset += event.deltaY * 0.0022;
  }

  stage.addEventListener("wheel", rotateFromWheel, { passive: true });

  updateDomWheel();
}

function makeWheelCardTexture(project, THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1152;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  const overviewImageSrc = getOverviewImageSrc(project);

  function drawCard(img) {
    const border = 2;
    const headerHeight = 86;

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = border;
    ctx.strokeRect(border / 2, border / 2, canvas.width - border, canvas.height - border);

    ctx.fillStyle = "#fff";
    ctx.fillRect(border, border, canvas.width - border * 2, headerHeight);
    ctx.beginPath();
    ctx.moveTo(border / 2, headerHeight + border);
    ctx.lineTo(canvas.width - border / 2, headerHeight + border);
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.font = "400 36px Inter Display, Arial, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText(project.year || "", 18, headerHeight / 2 + border);

    ctx.fillStyle = "#000";
    ctx.font = "400 36px Inter Display, Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(project.title || "", 368, headerHeight / 2 + border);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    if (img) {
      const imageTop = headerHeight + border;
      const targetW = canvas.width - border * 2;
      const targetH = canvas.height - imageTop - border;
      const scale = Math.max(targetW / img.naturalWidth, targetH / img.naturalHeight);
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      ctx.save();
      ctx.beginPath();
      ctx.rect(border, imageTop, targetW, targetH);
      ctx.clip();
      ctx.drawImage(img, border + (targetW - drawW) / 2, imageTop + (targetH - drawH) / 2, drawW, drawH);
      ctx.restore();
    } else {
      ctx.fillStyle = "#fff";
      ctx.fillRect(border, headerHeight + border, canvas.width - border * 2, canvas.height - headerHeight - border * 2);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(66, 154, canvas.width - 132, canvas.height - 220);
      ctx.fillStyle = "#000";
      ctx.font = "400 38px Inter Display, Arial, sans-serif";
      ctx.fillText(project.title || "", 86, 204);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  return new Promise((resolve) => {
    if (!overviewImageSrc) {
      resolve(drawCard(null));
      return;
    }

    image.onload = () => resolve(drawCard(image));
    image.onerror = () => resolve(drawCard(null));
    image.src = encodeURI(overviewImageSrc);
  });
}

function updatePreviewLabel(container, project) {
  container.innerHTML = "";

  const yearLabel = document.createElement("span");
  yearLabel.className = "wheel-project-preview-year";
  yearLabel.textContent = project.year || "";

  const titleLabel = document.createElement("span");
  titleLabel.className = "wheel-project-preview-name";
  titleLabel.textContent = project.title || "";

  container.append(yearLabel, titleLabel);
}

function setupProjectListView(projects, overview) {
  const rows = overview.querySelector(".project-list-rows");
  const preview = overview.querySelector(".project-list-preview");
  const previewImage = overview.querySelector(".project-list-preview-image");
  let activePreviewRow = null;

  if (!rows || !preview || !previewImage) return;

  function positionListPreview(row) {
    if (!row) return;

    const rect = row.getBoundingClientRect();
    preview.style.setProperty("--project-list-preview-y", `${rect.bottom}px`);
  }

  function setListPreview(project, row) {
    const imageSrc = getOverviewImageSrc(project);

    activePreviewRow = row;
    positionListPreview(row);
    preview.classList.add("is-visible");
    preview.href = `project.html?project=${project.slug}`;
    previewImage.classList.remove("image-missing");
    previewImage.onerror = () => {
      previewImage.onerror = null;
      previewImage.classList.remove("image-missing");
      previewImage.src = encodeURI(getFallbackOverviewImage(project));
    };
    previewImage.src = encodeURI(imageSrc);
    previewImage.alt = project.title || "";
  }

  rows.innerHTML = "";

  projects.forEach((project, index) => {
    const link = document.createElement("a");
    link.className = "project-list-row";
    link.href = `project.html?project=${project.slug}`;
    link.innerHTML = `
      <span class="project-list-category">${getProjectListCategoryLabel(project.slug, project)}</span>
      <span class="project-list-title">${project.title || ""}</span>
      <span class="project-list-year">${project.year || ""}</span>
    `;

    link.addEventListener("mouseenter", () => setListPreview(project, link));
    link.addEventListener("focus", () => setListPreview(project, link));

    rows.appendChild(link);
  });

  window.addEventListener("scroll", () => positionListPreview(activePreviewRow));
  window.addEventListener("resize", () => positionListPreview(activePreviewRow));
}

function setupOverviewViewToggle(overview) {
  const buttons = Array.from(overview.querySelectorAll(".overview-view-button"));
  const body = document.body;
  const mobileProjectsQuery = window.matchMedia("(max-width: 700px)");

  function setView(view) {
    const listView = view === "list";
    const listPreview = overview.querySelector(".project-list-preview");

    body.classList.toggle("list-view-active", listView);
    body.classList.toggle("img-view-active", !listView);
    window.scrollTo({ top: 0, behavior: "auto" });

    if (listView) {
      listPreview?.classList.remove("is-visible");
    } else {
      ensureOverviewWheel();
    }

    buttons.forEach((button) => {
      const isActive = button.dataset.view === view;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    runOverviewToggleTypewriter();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  function syncProjectViewForViewport() {
    setView(mobileProjectsQuery.matches ? "list" : "img");
  }

  mobileProjectsQuery.addEventListener?.("change", syncProjectViewForViewport);
  syncProjectViewForViewport();
}
function renderOverviewRolodex() {
  const overview = document.querySelector(".overview-page .home-projects");
  if (!overview) return;

  const projects = Object.entries(projectData)
    .map(([slug, project]) => ({
      slug,
      ...project
    }))
    .filter((project) => getOverviewImageSrc(project))
    .sort((a, b) => {
      const indexA = overviewProjectOrder.indexOf(a.slug);
      const indexB = overviewProjectOrder.indexOf(b.slug);
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });

  overview.innerHTML = "";
  overview.classList.add("three-wheel-stack");
  overview.style.setProperty("--three-wheel-scroll-length", `${Math.max(1, projects.length) * 72}vh`);

  overview.innerHTML = `
    <div class="overview-view-toggle" aria-label="Project view">
      <button class="overview-view-button is-active" type="button" data-view="img">IMG VIEW <span>↘</span></button>
      <button class="overview-view-button" type="button" data-view="list">LIST VIEW <span>↘</span></button>
    </div>
    <section class="three-wheel-stage" aria-label="Projects wheel">
      <a class="wheel-project-preview" href="#" aria-label="Open current project">
        <img class="wheel-project-preview-image" src="" alt="">
        <span class="wheel-project-preview-title"></span>
      </a>
      <div class="three-wheel-canvas" aria-hidden="true"></div>
    </section>
    <section class="project-list-view" aria-label="Project list">
      <div class="project-list-header" aria-hidden="true"><span>Type</span><span>Title</span><span>Year</span></div>
      <div class="project-list-rows"></div>
      <a class="project-list-preview" href="#" aria-label="Open hovered project">
        <img class="project-list-preview-image" src="" alt="">
      </a>
    </section>
  `;

  overview._projectData = projects;
  setupProjectListView(projects, overview);
  setupOverviewViewToggle(overview);
  runOverviewToggleTypewriter();

  if (window.location.hash === "#projects") {
    ensureOverviewWheel();
  }
}

function ensureOverviewWheel() {
  const overview = document.querySelector(".overview-page .home-projects");
  if (!overview || overview.dataset.wheelReady === "true" || !overview._projectData) return;
  overview.dataset.wheelReady = "true";
  setupThreeProjectWheel(overview._projectData, overview);
}

renderOverviewRolodex();

function triggerNavReveal() {
  document.body.classList.remove("nav-reveal-active");
  void document.body.offsetWidth;
  document.body.classList.add("nav-reveal-active");

  window.setTimeout(() => {
    document.body.classList.remove("nav-reveal-active");
  }, 2700);
}

function setActiveNavLink(activeLink) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("is-nav-active", link === activeLink);
  });
}

function restoreActiveNavLink() {
  const activeNavClass = sessionStorage.getItem("activeNavClass");
  const activeLink = activeNavClass
    ? document.querySelector(`.main-nav a.${activeNavClass}`)
    : null;

  if (activeLink) {
    setActiveNavLink(activeLink);
  }
}

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navClass = Array.from(link.classList).find((className) => className.startsWith("nav-"));
    if (navClass) {
      sessionStorage.setItem("activeNavClass", navClass);
    }

    setActiveNavLink(link);
    sessionStorage.setItem("navRevealPending", "true");
    triggerNavReveal();
  });
});

restoreActiveNavLink();

if (sessionStorage.getItem("navRevealPending") === "true") {
  sessionStorage.removeItem("navRevealPending");
  requestAnimationFrame(triggerNavReveal);
}

/* Fehlende Bilder ausblenden */

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.classList.add("image-missing");
    img.closest(".large-project-image, .home-project")?.classList.add("image-missing");
  });
});

/* Hover-Bilder auf der Projektübersicht */

const projectLinks = document.querySelectorAll(".project-link");
const previews = document.querySelectorAll(".preview");

function hideAllPreviews() {
  previews.forEach((preview) => {
    preview.classList.remove("is-visible");
  });
}

projectLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    hideAllPreviews();

    const previewId = link.dataset.preview;
    const activePreview = document.getElementById(previewId);

    if (activePreview) {
      activePreview.classList.add("is-visible");
    }
  });

  link.addEventListener("mouseleave", () => {
    const previewId = link.dataset.preview;
    const activePreview = document.getElementById(previewId);

    if (activePreview) {
      activePreview.classList.remove("is-visible");
    }
  });
});

/* Projektseiten automatisch befüllen */

const projectTitle = document.getElementById("project-title");
const projectYear = document.getElementById("project-year");
const projectDescription = document.getElementById("project-description");
const projectImages = document.getElementById("project-images");
const revealImage = document.getElementById("reveal-image");
const revealImageFrame = document.getElementById("reveal-image-frame");

function createProjectMedia(mediaData) {
  if (mediaData.type === "silent-video") {
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.controls = false;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    if (mediaData.poster) {
      video.poster = encodeURI(mediaData.poster);
    }

    const sources = mediaData.sources || [mediaData.src];
    sources.forEach((sourcePath) => {
      const source = document.createElement("source");
      source.src = encodeURI(sourcePath);
      source.type = "video/mp4";
      video.appendChild(source);
    });

    video.addEventListener("error", () => {
      video.closest(".large-project-image")?.classList.add("image-missing");
    });

    video.addEventListener("canplay", () => {
      video.play().catch(() => {});
    }, { once: true });

    return video;
  }

  if (mediaData.type === "video") {
    const videoShell = document.createElement("div");
    videoShell.className = "project-video-shell";

    const video = document.createElement("video");
    video.autoplay = false;
    video.loop = true;
    video.controls = false;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("loop", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    let posterOverlay = null;
    if (mediaData.poster) {
      video.poster = encodeURI(mediaData.poster);
      videoShell.classList.add("has-poster");
      videoShell.style.backgroundImage = `url("${encodeURI(mediaData.poster)}")`;
      posterOverlay = document.createElement("img");
      posterOverlay.className = "project-video-poster";
      posterOverlay.alt = "";
      posterOverlay.src = encodeURI(mediaData.poster);
    }

    const sources = mediaData.sources || [mediaData.src];
    sources.forEach((sourcePath) => {
      const source = document.createElement("source");
      source.src = encodeURI(sourcePath);
      source.type = "video/mp4";
      video.appendChild(source);
    });

    video.addEventListener("error", () => {
      video.closest(".large-project-image")?.classList.add("image-missing");
    });

    video.addEventListener("loadedmetadata", () => {
      if (video.videoWidth && video.videoHeight) {
        videoShell.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
      }
    });

    const playButton = document.createElement("button");
    playButton.className = "project-video-play";
    playButton.type = "button";
    playButton.setAttribute("aria-label", "Play video");

    function setVideoPlaying(isPlaying) {
      playButton.classList.toggle("is-playing", isPlaying);
      playButton.textContent = isPlaying ? "II" : "▶";
      playButton.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
    }

    function revealVideo() {
      videoShell.classList.add("has-started");
      videoShell.style.backgroundImage = "";
      posterOverlay?.remove();
      posterOverlay = null;
    }

    function toggleVideoPlayback() {
      if (video.paused) {
        revealVideo();
        video.play().then(() => setVideoPlaying(true)).catch(() => {});
      } else {
        video.pause();
        setVideoPlaying(false);
      }
    }

    playButton.addEventListener("click", toggleVideoPlayback);
    setVideoPlaying(false);
    video.addEventListener("play", () => {
      revealVideo();
      setVideoPlaying(true);
    });
    video.addEventListener("playing", () => {
      revealVideo();
      setVideoPlaying(true);
    });
    video.addEventListener("pause", () => setVideoPlaying(false));
    video.addEventListener("ended", () => setVideoPlaying(false));

    const scrubber = document.createElement("input");
    scrubber.className = "project-video-scrubber";
    scrubber.type = "range";
    scrubber.min = "0";
    scrubber.max = "1000";
    scrubber.value = "0";
    scrubber.step = "1";
    scrubber.setAttribute("aria-label", "Video position");

    function setVideoMuted(isMuted) {
      video.muted = isMuted;
      muteButton.textContent = video.muted ? "SOUND" : "MUTE";
      video.toggleAttribute("muted", video.muted);
    }

    video.addEventListener("timeupdate", () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0 || scrubber.matches(":active")) return;
      scrubber.value = String((video.currentTime / video.duration) * 1000);
    });

    scrubber.addEventListener("pointerdown", () => {
      setVideoMuted(false);
      revealVideo();
      video.play().then(() => setVideoPlaying(true)).catch(() => {});
    });

    scrubber.addEventListener("input", () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      video.currentTime = (Number(scrubber.value) / 1000) * video.duration;
      setVideoMuted(false);
      revealVideo();
      video.play().then(() => setVideoPlaying(true)).catch(() => {});
    });

    const muteButton = document.createElement("button");
    muteButton.className = "project-video-mute";
    muteButton.type = "button";
    muteButton.textContent = "SOUND";
    muteButton.setAttribute("aria-label", "Toggle video sound");
    muteButton.addEventListener("click", () => {
      setVideoMuted(!video.muted);
    });

    if (posterOverlay) {
      videoShell.append(video, posterOverlay, playButton, scrubber, muteButton);
    } else {
      videoShell.append(video, playButton, scrubber, muteButton);
    }
    return videoShell;
  }

  const img = document.createElement("img");
  img.alt = "";
  img.src = encodeURI(mediaData.src);

  img.addEventListener("error", () => {
    img.closest(".large-project-image, .home-project")?.classList.add("image-missing");
  });

  return img;
}

window.addEventListener("keydown", (event) => {
  const isSpaceKey = event.code === "Space" || event.key === " " || event.key === "Spacebar";
  if (!isSpaceKey || event.repeat || !document.body.classList.contains("horizontal-detail-page")) return;
  const target = event.target;
  if (target?.closest?.("input, textarea")) return;

  const video = document.querySelector(".project-video-shell video");
  const playButton = video?.closest(".project-video-shell")?.querySelector(".project-video-play");
  if (!video || !playButton) return;

  event.preventDefault();
  if (video.paused) {
    const videoShell = video.closest(".project-video-shell");
    videoShell?.classList.add("has-started");
    if (videoShell) {
      videoShell.style.backgroundImage = "";
      videoShell.querySelector(".project-video-poster")?.remove();
    }
    video.play().catch(() => {});
  } else {
    video.pause();
  }
});

if (
  projectTitle &&
  projectYear &&
  projectDescription &&
  projectImages &&
  revealImage &&
  revealImageFrame
) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");

  const project = projectData[slug] || projectData["exhibition-of-forgotten-objects"];
  const isHorizontalDetailProject = horizontalDetailProjectSlugs.has(slug);

  document.body.classList.add(`project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`);
  document.body.classList.toggle("horizontal-detail-page", isHorizontalDetailProject);
  document.title = project.title;
  projectTitle.textContent = project.title;
  projectYear.textContent = project.year;
  projectDescription.innerHTML = project.description;

  const firstImage = project.images[0];

  if (firstImage) {
    revealImageFrame.className = `large-project-image reveal-image-frame ${firstImage.orientation}`;
    revealImageFrame.innerHTML = "";
    revealImageFrame.appendChild(createProjectMedia(firstImage));
  }

  projectImages.innerHTML = "";

  const imagesToRender = isHorizontalDetailProject ? project.images : project.images.slice(1);

  if (isHorizontalDetailProject) {
    const introPanel = document.createElement("section");
    introPanel.className = "horizontal-project-intro-panel";
    introPanel.innerHTML = `
      <div class="horizontal-project-intro-meta">
        <span class="horizontal-project-year">${project.year || ""}</span>
        <div class="horizontal-project-title-block">
          <h1>${project.title || ""}</h1>
          <p class="horizontal-project-category">${getProjectCategoryLabel(slug, project)}</p>
        </div>
      </div>
      <button class="horizontal-project-info-toggle" type="button" aria-expanded="false" aria-controls="horizontal-project-info-text">+Info</button>
      <div class="horizontal-project-info-text" id="horizontal-project-info-text" hidden>
        <p>${project.description || ""}</p>
      </div>
    `;
    const infoToggle = introPanel.querySelector(".horizontal-project-info-toggle");
    const infoText = introPanel.querySelector(".horizontal-project-info-text");
    infoToggle?.addEventListener("click", () => {
      const isOpen = infoToggle.getAttribute("aria-expanded") === "true";
      infoToggle.setAttribute("aria-expanded", String(!isOpen));
      infoToggle.textContent = isOpen ? "+Info" : "-Info";
      if (infoText) infoText.hidden = isOpen;
      introPanel.classList.toggle("is-info-open", !isOpen);
    });
    projectImages.appendChild(introPanel);
  }

  imagesToRender.forEach((imageData) => {
    const figure = document.createElement("figure");
    figure.className = `large-project-image ${imageData.orientation}`;
    figure.appendChild(createProjectMedia(imageData));
    projectImages.appendChild(figure);
  });

  if (isHorizontalDetailProject) {
    projectImages.classList.add("horizontal-project-image-track");
    setupHorizontalDetailProject(projectImages);
  }
}

function setupHorizontalDetailProject(track) {
  if (!track) return;

  track.scrollLeft = 0;

  window.addEventListener(
    "wheel",
    (event) => {
      if (!document.body.classList.contains("horizontal-detail-page")) return;

      event.preventDefault();
      track.scrollLeft += event.deltaY + event.deltaX;
    },
    { passive: false }
  );
}
/* Scroll-Effekte */

const projectReveal = document.getElementById("project-reveal");
const projectHero = document.getElementById("project-hero");
const siteFooter = document.getElementById("site-footer");
const sayHello = document.getElementById("say-hello");
let revealProgress = 0;
let helloProgress = 0;
let footerWasFull = false;
let footerReadyAt = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateBlueReveal() {
  if (document.body.classList.contains("horizontal-detail-page")) return 1;
  if (!projectReveal || !projectHero) return 1;

  const rect = projectReveal.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const revealIsActive = rect.top <= 1 && rect.bottom >= viewportHeight - 1;
  const shift = -revealProgress * viewportHeight;

  document.body.classList.toggle("reveal-active", revealIsActive);
  projectHero.style.setProperty("--hero-shift", `${shift}px`);
  document.body.style.setProperty("--hero-shift", `${shift}px`);

  return revealProgress;
}

function updateBlueRevealFromWheel(event) {
  if (document.body.classList.contains("horizontal-detail-page")) return;
  if (!projectReveal || !projectHero) return;

  const rect = projectReveal.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const firstScreenIsCurrent = rect.top <= 1 && rect.bottom >= viewportHeight - 1;

  if (!firstScreenIsCurrent) return;

  const delta = event.deltaY + event.deltaX;

  if (delta > 0 && revealProgress < 1) {
    revealProgress = clamp(revealProgress + delta / 1200, 0, 1);
    event.preventDefault();
    updateNavColor();
    return;
  }

  if (delta < 0 && revealProgress > 0 && window.scrollY <= 1) {
    revealProgress = clamp(revealProgress + delta / 1200, 0, 1);
    event.preventDefault();
    updateNavColor();
  }
}

function updateFooter() {
  if (!siteFooter) return false;

  const rect = siteFooter.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const footerMode = rect.top <= 18 && rect.bottom > 18;
  const footerIsFull = rect.top <= 1 && rect.bottom >= viewportHeight - 1;

  if (footerIsFull && !footerWasFull) {
    footerReadyAt = performance.now() + 180;
  }

  footerWasFull = footerIsFull;
  document.body.classList.toggle("footer-mode", footerMode);

  if (sayHello) {
    const startOffset = sayHello.offsetLeft;
    const maxShift = -Math.max(0, sayHello.scrollWidth - window.innerWidth + startOffset * 2);
    const shift = helloProgress * maxShift;

    sayHello.style.setProperty("--hello-shift", `${shift}px`);
  }

  return footerMode;
}

function footerFillsViewport() {
  if (!siteFooter) return false;

  const rect = siteFooter.getBoundingClientRect();
  return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
}

function updateSayHelloFromWheel(event) {
  if (!sayHello || !footerFillsViewport()) return;

  const previousProgress = helloProgress;
  const delta = event.deltaY + event.deltaX;

  if (delta > 0 && performance.now() < footerReadyAt) {
    event.preventDefault();
    return;
  }

  helloProgress = clamp(helloProgress + delta / 1400, 0, 1);

  const movingHello =
    helloProgress !== previousProgress ||
    (delta > 0 && helloProgress === 1) ||
    (delta < 0 && helloProgress > 0);

  if (movingHello) {
    event.preventDefault();
    updateFooter();
  }
}

function updateNavColor() {
  const heroProgress = updateBlueReveal();
  const footerMode = updateFooter();

  if (document.body.classList.contains("detail-page")) {
    const navShouldBeBlack = heroProgress >= 0.985 && !footerMode;
    document.body.classList.toggle("nav-on-white", navShouldBeBlack);
  }
}

window.addEventListener("scroll", updateNavColor);
window.addEventListener("resize", updateNavColor);
window.addEventListener("wheel", updateBlueRevealFromWheel, { passive: false });
window.addEventListener("wheel", updateSayHelloFromWheel, { passive: false });
updateNavColor();

function unlockVideoSound() {
  document.querySelectorAll("video").forEach((video) => {
    if (video.closest(".project-video-shell")) return;
    video.muted = false;
    video.play().catch(() => {});
  });
}

window.addEventListener("pointerdown", unlockVideoSound, { once: true });
window.addEventListener("keydown", unlockVideoSound, { once: true });

/* Strichkreuz-Cursor */

const customCursorQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

if (customCursorQuery.matches) {
  const crossCursor = document.createElement("div");
  crossCursor.className = "cross-cursor";
  document.body.appendChild(crossCursor);
  document.body.classList.add("has-cross-cursor");

  const cursorBasePixelRatio = window.devicePixelRatio || 1;
  function updateCursorZoomScale() {
    const currentPixelRatio = window.devicePixelRatio || cursorBasePixelRatio;
    const scale = cursorBasePixelRatio / currentPixelRatio;
    document.documentElement.style.setProperty("--cursor-zoom-scale", String(scale));
  }
  updateCursorZoomScale();
  window.addEventListener("resize", updateCursorZoomScale);
  window.visualViewport?.addEventListener("resize", updateCursorZoomScale);

  window.addEventListener("pointermove", (event) => {
    crossCursor.style.left = `${event.clientX}px`;
    crossCursor.style.top = `${event.clientY}px`;

    const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
    const darkArea = hoveredElement && hoveredElement.closest("img, .site-footer, .footer-sticky, .project-hero");
    const clickableArea = hoveredElement && hoveredElement.closest(
      "a, button, input, select, textarea, summary, label, video, [role='button'], [onclick], .three-wheel-canvas"
    );
    crossCursor.classList.toggle("is-white", Boolean(darkArea));
    crossCursor.classList.toggle("is-clickable", Boolean(clickableArea));
  });
}

/* Flat Rolodex active card */

const rolodexCards = document.querySelectorAll(".overview-page .home-project");

function updateRolodexActiveCard() {
  if (document.body.classList.contains("overview-page")) return;

  if (!rolodexCards.length) return;

  const viewportCenter = window.innerHeight / 2;
  let activeCard = rolodexCards[0];
  let closestDistance = Infinity;

  rolodexCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(cardCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      activeCard = card;
    }
  });

  rolodexCards.forEach((card, index) => {
    card.classList.toggle("is-active", card === activeCard);
    card.style.zIndex = card === activeCard ? 50 : index + 1;
  });
}

window.addEventListener("scroll", updateRolodexActiveCard);
window.addEventListener("resize", updateRolodexActiveCard);
updateRolodexActiveCard();

/* Scroll-gesteuerter Folder-Rolodex */

const wheelStack = document.querySelector(".overview-page .home-projects");
let wheelCards = [];
var hoveredWheelCard = null;

function setupWheelStack() {
  if (!wheelStack) return;

  wheelCards = Array.from(wheelStack.querySelectorAll(".home-project"));
  const scrollLength = Math.max(1, wheelCards.length - 1) * window.innerHeight * 0.42;
  wheelStack.style.setProperty("--wheel-scroll-length", `${scrollLength + window.innerHeight}px`);
  updateWheelStack();
}

function updateWheelStack() {
  if (!wheelStack || !wheelCards.length) return;

  const rect = wheelStack.getBoundingClientRect();
  const maxProgress = Math.max(1, wheelCards.length - 1);
  const scrollLength = Math.max(1, rect.height - window.innerHeight);
  const progress = clamp((-rect.top / scrollLength) * maxProgress, 0, maxProgress);

  wheelCards.forEach((card, index) => {
    const offset = index - progress;
    const absOffset = Math.abs(offset);
    const isActive = absOffset < 0.5;

    const isHovered = hoveredWheelCard === card;
    const y = isHovered ? 0 : offset * 22;
    const scale = isHovered ? 1.02 : clamp(1 - absOffset * 0.035, 0.86, 1);
    const opacity = clamp(1 - Math.max(0, absOffset - 4) * 0.18, 0, 1);
    const zIndex = isHovered ? 300 : Math.round(100 - absOffset * 10);

    card.classList.toggle("is-active", isActive);
    card.classList.toggle("is-hovered", isHovered);
    card.style.setProperty(
      "transform",
      `translate3d(-50%, calc(-50% + ${y}vh), 0) scale(${scale})`,
      "important",
    );
    card.style.setProperty("z-index", zIndex);
    card.style.setProperty("opacity", opacity);
    card.style.pointerEvents = absOffset < 3.2 ? "auto" : "none";
  });
}

window.addEventListener("scroll", updateWheelStack);
window.addEventListener("resize", setupWheelStack);
setupWheelStack();

/* Home intro and empty home */

let introStarted = false;
let introFinished = false;
const SITE_INTRO_SESSION_KEY = "leonie-site-intro-played";

function hasSeenSiteIntro() {
  try {
    return window.sessionStorage.getItem(SITE_INTRO_SESSION_KEY) === "true";
  } catch (error) {
    return false;
  }
}

function rememberSiteIntro() {
  try {
    window.sessionStorage.setItem(SITE_INTRO_SESSION_KEY, "true");
  } catch (error) {
    // The intro still works when storage is unavailable.
  }
}

const HOME_TYPEWRITER_NEXT_KEY = "leonie-home-typewriter-next";

function requestHomeTypewriterOnNextLoad() {
  try {
    window.sessionStorage.setItem(HOME_TYPEWRITER_NEXT_KEY, "true");
  } catch (error) {}
}

function consumeHomeTypewriterOnNextLoad() {
  try {
    const shouldRun = window.sessionStorage.getItem(HOME_TYPEWRITER_NEXT_KEY) === "true";
    window.sessionStorage.removeItem(HOME_TYPEWRITER_NEXT_KEY);
    return shouldRun;
  } catch (error) {
    return false;
  }
}


/* General Arial text plop effects */
function runElementLineTypewriter(element, speed = 18) {
  const lines = prepareTypewriterElement(element, "about-typewriter-character", "about-typewriter-line");
  if (!lines.length && element?._typewriterLines) return;
  const targets = lines.length ? lines : Array.from(element.querySelectorAll(".about-typewriter-line"));
  targets.forEach((line, index) => {
    window.setTimeout(() => typewriterLine(line, speed), index * 95);
  });
}

function runHomeTextTypewriter() {
  const copy = document.getElementById("site-intro-copy");
  if (!copy) return;

  const letters = Array.from(copy.querySelectorAll(".intro-letter"));
  if (!letters.length) return;

  copy.classList.add("home-typewriter-active");
  letters.forEach((letter) => letter.classList.remove("is-visible"));
  letters.forEach((letter, index) => {
    window.setTimeout(() => letter.classList.add("is-visible"), index * 16);
  });
}

function runOverviewToggleTypewriter() {
  document.querySelectorAll(".overview-view-button").forEach((button, buttonIndex) => {
    if (button.dataset.plopPrepared === "true") {
      const letters = Array.from(button.querySelectorAll(".view-button-letter"));
      letters.forEach((letter) => letter.classList.remove("is-visible"));
      letters.forEach((letter, index) => {
        window.setTimeout(() => letter.classList.add("is-visible"), buttonIndex * 110 + index * 18);
      });
      return;
    }

    const arrow = button.querySelector("span")?.textContent || "↘";
    const label = button.textContent.replace(arrow, "").trim();
    button.textContent = "";
    Array.from(label).forEach((character) => {
      const letter = document.createElement("span");
      letter.className = "view-button-letter";
      letter.textContent = character;
      button.appendChild(letter);
    });
    button.appendChild(document.createTextNode(" "));
    const arrowSpan = document.createElement("span");
    arrowSpan.textContent = arrow;
    button.appendChild(arrowSpan);
    button.dataset.plopPrepared = "true";

    const letters = Array.from(button.querySelectorAll(".view-button-letter"));
    letters.forEach((letter, index) => {
      window.setTimeout(() => letter.classList.add("is-visible"), buttonIndex * 110 + index * 18);
    });
  });
}
function updateHomeView() {
  if (!document.body.classList.contains("overview-page")) return;

  const projectsAreOpen = window.location.hash === "#projects";
  document.body.classList.toggle("home-landing-active", !projectsAreOpen);
  document.body.classList.toggle("project-overview-active", projectsAreOpen);

  const activeNav = document.querySelector(projectsAreOpen ? ".nav-projects" : ".nav-home");
  if (activeNav) setActiveNavLink(activeNav);

  if (projectsAreOpen) {
    ensureOverviewWheel();
    rememberSiteIntro();
    if (introStarted) introFinished = true;
    document.body.classList.remove("intro-active");
    document.body.classList.add("intro-complete");
  } else if (hasSeenSiteIntro()) {
    if (introStarted) {
      showSettledSiteIntro(true);
    } else {
      const shouldTypeHome = consumeHomeTypewriterOnNextLoad();
      startSiteIntro(true);
      if (shouldTypeHome) window.setTimeout(runHomeTextTypewriter, 80);
    }
  } else {
    startSiteIntro();
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function showSettledSiteIntro(runTypewriter = false) {
  const intro = document.getElementById("site-intro");
  const copy = document.getElementById("site-intro-copy");
  if (!intro || !copy) return;

  intro.classList.add("text-is-formed", "is-settled");
  copy.classList.remove("is-flying");
  copy.classList.add("is-settled");
  intro.style.pointerEvents = "none";
  if (runTypewriter) runHomeTextTypewriter();
  document.body.classList.remove("intro-active");
  document.body.classList.add("intro-complete");
}
function finishSiteIntro(immediate = false) {
  rememberSiteIntro();
  const intro = document.getElementById("site-intro");
  if (!intro || introFinished) return;

  introFinished = true;
  document.body.classList.remove("intro-active");
  document.body.classList.add("intro-complete");

  if (immediate) {
    intro.remove();
    return;
  }

  intro.classList.add("is-exiting");
  window.setTimeout(() => intro.remove(), 1050);
}

async function startSiteIntro(showImmediately = false) {
  const intro = document.getElementById("site-intro");
  const copy = document.getElementById("site-intro-copy");
  if (!intro || !copy || introStarted || introFinished) return;

  introStarted = true;
  rememberSiteIntro();
  if (!showImmediately) document.body.classList.add("intro-active");

  const introLayout = [
    [
      { text: "Hello, my name is Leonie.", position: "start" },
      { text: "I'm a communication and", position: "right" }
    ],
    [
      { text: "fashion designer based in Berlin.", position: "middle" }
    ],
    [
      { text: "My passion is to tell stories through a", position: "start" },
      { text: "variety of media.", position: "far" }
    ],
    [
      { text: "I find inspiration", position: "start" },
      { text: "in soft materials, nature, and the human body.", position: "wide" }
    ]
  ];
  copy.textContent = "";

  const characters = [];
  let characterIndex = 0;

  function appendAnimatedText(container, value) {
    value.split(" ").forEach((word, wordIndex, words) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "intro-word";

      Array.from(word).forEach((character) => {
        const span = document.createElement("span");
        span.className = "intro-letter";
        span.textContent = character;
        span.dataset.index = String(characterIndex);
        characterIndex += 1;
        wordSpan.appendChild(span);
        characters.push(span);
      });

      container.appendChild(wordSpan);
      if (wordIndex < words.length - 1) container.appendChild(document.createTextNode(" "));
    });
  }

  introLayout.forEach((segments, lineIndex) => {
    const line = document.createElement("span");
    line.className = `intro-line intro-line-${lineIndex + 1}`;

    segments.forEach((segment) => {
      const segmentSpan = document.createElement("span");
      segmentSpan.className = `intro-segment intro-segment-${segment.position}`;
      appendAnimatedText(segmentSpan, segment.text);
      line.appendChild(segmentSpan);
    });

    copy.appendChild(line);
  });
  await document.fonts?.ready;
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const copyRect = copy.getBoundingClientRect();
  const measured = characters.map((span) => {
    const rect = span.getBoundingClientRect();
    return {
      span,
      targetLeft: rect.left - copyRect.left,
      targetTop: rect.top - copyRect.top,
      width: Math.max(1, rect.width),
      height: Math.max(1, rect.height)
    };
  });

  copy.classList.add("is-separated", "is-flying");

  function seededValue(index) {
    const value = Math.sin(index * 9827.17 + 31.73) * 43758.5453;
    return value - Math.floor(value);
  }

  const states = measured.map((item, index) => {
    const x = 26 + seededValue(index + 100) * Math.max(20, window.innerWidth - 52);
    const y = 26 + seededValue(index + 500) * Math.max(20, window.innerHeight - 52);
    const speed = 0.35 + seededValue(index + 900) * 0.75;
    const angle = seededValue(index + 1300) * Math.PI * 2;
    const rotation = (seededValue(index + 1700) - 0.5) * 180;
    const rotationSpeed = (seededValue(index + 2100) - 0.5) * 0.11;

    item.span.style.width = `${item.width}px`;
    item.span.style.height = `${item.height}px`;
    item.span.style.left = `${x - copyRect.left}px`;
    item.span.style.top = `${y - copyRect.top}px`;
    item.span.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    return {
      ...item,
      x,
      y,
      velocityX: Math.cos(angle) * speed,
      velocityY: Math.sin(angle) * speed,
      baseVelocityX: Math.cos(angle) * speed,
      baseVelocityY: Math.sin(angle) * speed,
      rotation,
      rotationSpeed
    };
  });

  let gathering = false;
  let previousTime = performance.now();
  const pointer = { x: 0, y: 0, active: false, lastMove: 0 };
  intro.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    pointer.lastMove = performance.now();
  });
  intro.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  function animateLetters(now) {
    if (introFinished) return;
    const delta = Math.min(2.4, (now - previousTime) / 16.667);
    previousTime = now;

    states.forEach((state) => {
      if (state.isGathering) return;
      if (pointer.active && now - pointer.lastMove < 180) {
        const differenceX = state.x - pointer.x;
        const differenceY = state.y - pointer.y;
        const distance = Math.max(1, Math.hypot(differenceX, differenceY));
        const radius = Math.min(190, Math.max(120, window.innerWidth * 0.12));
        if (distance < radius) {
          const strength = Math.pow(1 - distance / radius, 2) * 1.55;
          state.velocityX += (differenceX / distance) * strength * delta;
          state.velocityY += (differenceY / distance) * strength * delta;
          state.rotationSpeed += (seededValue(Number(state.span.dataset.index) + 4700) - 0.5) * 0.012;
        }
      }

      state.velocityX += (state.baseVelocityX - state.velocityX) * 0.035 * delta;
      state.velocityY += (state.baseVelocityY - state.velocityY) * 0.035 * delta;
      const speed = Math.hypot(state.velocityX, state.velocityY);
      if (speed > 2.4) {
        state.velocityX = (state.velocityX / speed) * 2.4;
        state.velocityY = (state.velocityY / speed) * 2.4;
      }

      state.x += state.velocityX * delta;
      state.y += state.velocityY * delta;
      state.rotation += state.rotationSpeed * delta;
      state.rotationSpeed *= 0.998;

      const halfWidth = state.width / 2 + 3;
      const halfHeight = state.height / 2 + 3;
      if (state.x <= halfWidth || state.x >= window.innerWidth - halfWidth) {
        state.velocityX *= -1;
        state.baseVelocityX *= -1;
        state.x = Math.max(halfWidth, Math.min(window.innerWidth - halfWidth, state.x));
      }
      if (state.y <= halfHeight || state.y >= window.innerHeight - halfHeight) {
        state.velocityY *= -1;
        state.baseVelocityY *= -1;
        state.y = Math.max(halfHeight, Math.min(window.innerHeight - halfHeight, state.y));
      }

      state.span.style.left = `${state.x - copyRect.left}px`;
      state.span.style.top = `${state.y - copyRect.top}px`;
      state.span.style.transform = `translate(-50%, -50%) rotate(${state.rotation}deg)`;
    });

    requestAnimationFrame(animateLetters);
  }

  function settleLetters(immediate = false) {
    if (gathering || introFinished) return;
    gathering = true;
    intro.classList.add("is-gathering");
    copy.classList.remove("is-flying");

    const order = [...states].sort((a, b) => {
      return seededValue(Number(a.span.dataset.index) + 2800) - seededValue(Number(b.span.dataset.index) + 2800);
    });

    if (immediate) {
      states.forEach((state) => {
        state.span.style.left = `${state.targetLeft}px`;
        state.span.style.top = `${state.targetTop}px`;
        state.span.style.transform = "translate(0, 0) rotate(0deg)";
      });
      intro.classList.add("text-is-formed");
      copy.classList.add("is-settled");
      intro.style.pointerEvents = "none";

      if (showImmediately) {
        intro.classList.add("is-settled");
        document.body.classList.remove("intro-active");
        document.body.classList.add("intro-complete");
        return;
      }

      window.setTimeout(() => {
        intro.classList.add("is-settled");
        document.body.classList.remove("intro-active");
        document.body.classList.add("intro-complete");
        triggerNavReveal();
      }, 500);
      return;
    }
    const stagger = window.innerWidth < 700 ? 5 : 8;
    const duration = window.innerWidth < 700 ? 760 : 940;

    order.forEach((state, index) => {
      window.setTimeout(() => {
        state.isGathering = true;
        state.span.classList.add("is-gathering-letter");
        state.span.animate(
          [
            {
              left: `${state.x - copyRect.left}px`,
              top: `${state.y - copyRect.top}px`,
              transform: `translate(-50%, -50%) rotate(${state.rotation}deg)`
            },
            {
              left: `${state.targetLeft}px`,
              top: `${state.targetTop}px`,
              transform: "translate(0, 0) rotate(0deg)"
            }
          ],
          {
            duration,
            easing: "cubic-bezier(0.18, 0.72, 0.16, 1)",
            fill: "forwards"
          }
        );
      }, index * stagger);
    });

    const gatherEnd = order.length * stagger + duration;
    window.setTimeout(() => {
      intro.classList.add("text-is-formed");
      copy.classList.add("is-settled");
      intro.style.pointerEvents = "none";
    }, gatherEnd + 120);

    window.setTimeout(() => {
      intro.classList.add("is-settled");
      document.body.classList.remove("intro-active");
      document.body.classList.add("intro-complete");
      triggerNavReveal();
    }, gatherEnd + 620);
  }

  intro.addEventListener("click", () => settleLetters(false), { once: true });
  intro.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      settleLetters();
    }
  }, { once: true });
  intro.tabIndex = 0;
  intro.setAttribute("role", "button");
  intro.setAttribute("aria-label", "Gather introduction text");

  if (showImmediately || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    settleLetters(true);
  } else {
    requestAnimationFrame(animateLetters);
  }
}
window.addEventListener("hashchange", updateHomeView);
updateHomeView();
document.querySelectorAll(".nav-home").forEach((link) => {
  link.addEventListener("click", () => {
    const isCurrentlyHome = document.body.classList.contains("home-landing-active") && !document.body.classList.contains("project-overview-active");
    if (!isCurrentlyHome) requestHomeTypewriterOnNextLoad();
  });
});
/* Shared typewriter */
function prepareTypewriterElement(element, characterClass = "about-typewriter-character", lineClass = "about-typewriter-line") {
  if (!element || element.dataset.typewriterPrepared === "true") return [];

  const originalNodes = Array.from(element.childNodes);
  const lines = [];
  let currentLine = document.createElement("span");
  currentLine.className = lineClass;
  currentLine._typewriterLetters = [];

  function pushLine() {
    lines.push(currentLine);
    currentLine = document.createElement("span");
    currentLine.className = lineClass;
    currentLine._typewriterLetters = [];
  }

  originalNodes.forEach((node) => {
    if (node.nodeName === "BR") {
      pushLine();
      return;
    }

    Array.from(node.textContent || "").forEach((character) => {
      const span = document.createElement("span");
      span.className = characterClass;
      span.textContent = character;
      currentLine.appendChild(span);
      currentLine._typewriterLetters.push(span);
    });
  });

  if (currentLine._typewriterLetters.length || !lines.length) {
    lines.push(currentLine);
  }

  element.textContent = "";
  lines.forEach((line, index) => {
    element.appendChild(line);
    if (index < lines.length - 1) element.appendChild(document.createElement("br"));
    line.dataset.typewriterVisible = "false";
    line._typewriterTimer = null;
  });

  element.dataset.typewriterPrepared = "true";
  return lines;
}

function clearTypewriterLineTimer(line) {
  if (!line?._typewriterTimer) return;
  window.clearTimeout(line._typewriterTimer);
  line._typewriterTimer = null;
}

function hideTypewriterLine(line) {
  clearTypewriterLineTimer(line);
  line?._typewriterLetters?.forEach((letter) => letter.classList.remove("is-visible"));
}

function typewriterLine(line, speed = 22) {
  if (!line) return;
  hideTypewriterLine(line);

  let index = 0;
  line.dataset.typewriterVisible = "true";

  function showNext() {
    if (line.dataset.typewriterVisible !== "true") {
      hideTypewriterLine(line);
      return;
    }

    const letter = line._typewriterLetters[index];
    if (!letter) {
      line._typewriterTimer = null;
      return;
    }

    letter.classList.add("is-visible");
    index += 1;
    line._typewriterTimer = window.setTimeout(showNext, speed);
  }

  showNext();
}

function setupAboutTypewriter() {
  if (!document.body.classList.contains("about-page")) return;

  const aboutNav = document.querySelector(".main-nav");
  if (aboutNav) {
    aboutNav.style.setProperty("position", "fixed", "important");
    aboutNav.style.setProperty("top", "14px", "important");
    aboutNav.style.setProperty("left", "0", "important");
    aboutNav.style.setProperty("transform", "none", "important");
  }

  const elements = Array.from(document.querySelectorAll("[data-typewriter]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = elements.flatMap((element) => prepareTypewriterElement(element));

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("is-nav-active", link.classList.contains("nav-about"));
  });

  if (reducedMotion) {
    lines.forEach((line) => line._typewriterLetters.forEach((letter) => letter.classList.add("is-visible")));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const line = entry.target;

      if (entry.isIntersecting) {
        if (line.dataset.typewriterVisible === "true") return;
        typewriterLine(line, 22);
        return;
      }

      line.dataset.typewriterVisible = "false";
      hideTypewriterLine(line);
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
  });

  lines.forEach((line) => observer.observe(line));
}

setupAboutTypewriter();

