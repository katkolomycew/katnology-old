const displaySection = sectionId => {
  const sections = ["cv", "skills", "interests", "contact"];
  sections.forEach(section => {
    if (section !== sectionId) {
      jQuery(`#${section}`).fadeOut("slow");
    }
  });
  jQuery(`#${sectionId}`).fadeIn("slow");
};
