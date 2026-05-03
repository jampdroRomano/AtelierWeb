export async function loadComponent(path, target) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(target).innerHTML += html;
}