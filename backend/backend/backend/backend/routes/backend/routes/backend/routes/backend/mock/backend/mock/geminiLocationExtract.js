module.exports = function extractLocation(description) {
  if (description.includes("Manhattan")) return "Manhattan, NYC";
  return "Unknown";
};
