const flower_images = ["flower0.png", "flower1.png", "flower2.png"];
const container_div = document.getElementById("container_div");

/* frame_images is an array of image urls.
 * target_div is the HTML element within which to append the image.
 * x, y are the coordinates for where to position the image.
 */
function ClickToAdvance(frame_images, target_div, x, y) {
    this.images = frame_images; // An array of image urls
    this.frame = 0;             // Index of the frame to show
    this.img = document.createElement("img");
    this.img.src = this.images[0];
    this.img.style.position = "absolute";
    this.img.style.left = x + "px";
    this.img.style.top = y + "px";
    target_div.appendChild(this.img);

    /* TODO: implement a method named handleEvent
     * handleEvent should advance to the next frame in the sequence.
     * 
     * In other words, add one to this.frame, and set
     * this.img.src = this.images[this.frame]
     * 
     * Dont increase this.frame beyond the number of frame_images available.
     * 
     * Once you have implemented the handleEvent method,
     * you can uncomment the line below to add this object as the event listener
     * for clicks on the image.
     */
     
     // this.img.addEventListener("click", this);
}

for(let i = 0; i < 5; i++) {
    const x = 150 * i;
    const y = Math.floor(Math.random() * 500);
    const flower = new ClickToAdvance(flower_images, container_div, x, y);
}