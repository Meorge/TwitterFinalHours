let vid = document.createElement("iframe");
vid.width = 100;
vid.height = 100;
vid.src = "https://www.youtube-nocookie.com/embed/ZbR5WcyWl18?controls=0&autoplay=1&loop=1";
vid.frameborder = 0;

// why the heck does it need accelerometer and gyroscope???
vid.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
document.getElementById("react-root").appendChild(vid);