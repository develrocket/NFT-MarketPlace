export function navigateToURL(url) {
  window.location.assign(url);
}

export function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
