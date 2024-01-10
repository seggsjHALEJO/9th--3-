const gallery = document.getElementById('gallery');

const imagePaths = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
];

const preWrittenTexts = [
    'In the gentle embrace of time, we celebrated the first glorious chapter of our journey—three months of shared laughter, stolen glances, and the subtle cadence of our hearts synchronizing. Like a delicate bud unfurling its petals under the tender touch of the sun, our love blossomed into something beautiful, each passing day an affirmation of the depth we delved into together. In those initial three months, we discovered the art of understanding, the grace in compromise, and the joy of simply being together. It was as if we were crafting a masterpiece, sketching the contours of our connection with every conversation, every shared secret, and every shared dream. The canvas of our love became a vibrant tapestry, rich with hues of affection, trust, and shared experiences. Every moment, whether trivial or profound, was a brushstroke on this canvas, weaving a story uniquely ours. As we navigated that fledgling love, it was evident that we were architects of something extraordinary—building a sanctuary where vulnerability was cherished, laughter was the soundtrack, and understanding was the cornerstone. Here is to the countless heartbeats that echoed the rhythm of our affection and to the promise of countless more. Happy three months, my love, a celebration of the beginning, the foundation, and the infinite possibilities that stretched before us.',
    'As the calendar turned its pages, marking the passage of time, we found ourselves standing at the crossroads of six months—half a year woven with the threads of our laughter, shared dreams, and the gentle resilience that love affords. In that season of our story, we weathered storms and basked in the warmth of sunny days, realizing that the journey was as much about the rainy nights as it was about the sunlit mornings. Six months into us, and the contours of our love had deepened, becoming a map of shared victories and conquered challenges. We learned that love was not just about the joyous highs but also about finding solace in each others embrace during the inevitable lows. Like seasoned sailors navigating the vast sea, we embraced the unpredictability of life, knowing that it was the tempests that sculpted the most resilient bonds. Our love was not a fairytale; it was a tapestry of intertwined hands navigating the complexities of reality. It was about learning, growing, and finding the beauty in our imperfections. Six months stood testament to our commitment to weather the storms, chase the rainbows, and dance in the rain together. So here is to us—triumphant in the face of adversity, resilient in our love, and ever-eager to explore the uncharted waters of the future. Happy six months, my love, a celebration of endurance, growth, and the unwavering beauty of us.',
    'As the hands of time gracefully swept through the pages of our shared chronicle, we found ourselves standing on the precipice of nine months—a chapter marked by shared dreams, intertwined paths, and a deepening commitment that mirrored the roots of ancient trees, anchored and entwined. In that season of our love, we discovered that our individual melodies harmonized into a beautiful symphony, creating a soundtrack to our shared journey. Nine months into this dance, and our dreams had become shared constellations, each wish a star in the sky of our aspirations. We had built a sanctuary of understanding, trust, and unwavering support—an abode where our individual ambitions flourished under the nurturing gaze of our collective dreams. It was not just about you or me; it was about the beautiful "we" that emerged when two souls decided to embark on a common odyssey. As we celebrated those nine months, we reveled in the tapestry we had woven—a masterpiece of shared laughter, enduring love, and a promise that echoed in every heartbeat. Our love was not static; it was a living, breathing entity that evolved with every shared triumph and every conquered challenge. Together, we had created a narrative that transcended the ordinary—a story that reflected the resilience of our commitment and the boundless potential of our shared future. Happy nine months, my love, a celebration of the symphony we composed together—a melody that resonated with the promise of many more chapters, each more beautiful than the last.',
];

const imageTitles = [
    'Title for Image 1',
    'Title for Image 2',
    'Title for Image 3',
];

imagePaths.forEach((path, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = path;

    imageContainer.appendChild(image);
    gallery.appendChild(imageContainer);

    // Add click event listener to each image
    image.addEventListener('click', () => {
        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = imageTitles[index];

        const modal = createModal(preWrittenTexts[index]);
        modal.style.display = 'block';

        playAudio(); // Play audio when an image is clicked
    });
});

function openModal(preWrittenText) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modalText');

    modalText.textContent = preWrittenText;

    playAudio();

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}

// Function to create a unique modal for each image
function createModal(preWrittenText) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = closeModal;

    const modalText = document.createElement('div');
    modalText.id = 'modalText';
    modalText.classList.add('modal-text');
    modalText.textContent = preWrittenText;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = closeModal;

    modal.appendChild(closeBtn);
    modal.appendChild(modalText);
    modal.appendChild(closeButton);

    document.body.appendChild(modal);

    return modal;
}

// Function to close the modal
function closeModal() {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
    modal.remove(); // Remove the modal element from the DOM
}
