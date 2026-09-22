/*
 * The Microbiology Podcast — show + episode data.
 * To add an episode: drop the MP3 in /audio (keep it under 25 MB so it can be uploaded through github.com; 64 kbps mono works well for speech),
 * then add a new object to the TOP of `episodes`, and add a matching <item> to feed.xml.
 */
window.PODCAST = {
  title: "The Microbiology Podcast",
  department: "Department of Microbiology",
  school: "NYU Grossman School of Medicine",
  siteUrl: "https://ben-tenoever.github.io/podcast/",
  blurb: "Conversations about the science, people, and programs of the NYU Langone Department of Microbiology.",
  episodes: [
    {
      id: "ep01",
      number: 1,
      title: "Faculty Narratives 2026",
      date: "2026-09-22",
      duration: "47:40",
      sizeMB: 22.9,
      audio: "audio/ep01-faculty-narratives-2026.mp3",
      producer: "Judy Minkoff",
      summary: "A guided tour of the department's 2026 research map — how our labs fit together across five domains, " +
               "and the control points that decide a pathogen's fate.",
      topics: [
        "Controlling the message: mRNA stability, transcription and translation",
        "Regulated proteolysis as a bacterial control point",
        "Molecular gatekeepers and transporters",
        "Tissue-level outcomes of persistent infection",
        "Repurposing viral machinery: payloads and vector design"
      ]
    }
  ]
};
