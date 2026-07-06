self.addEventListener("install", event => {
    console.log("Project 100 installed");
});

self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});