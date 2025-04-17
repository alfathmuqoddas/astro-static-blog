export const generatePages = (
  numberOfInstances: number,
  numberOfIpsum: number
) => {
  const randomArray = [];

  function generateLoremIpsum(numLines: number) {
    const loremIpsumSentences = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Nulla facilisi. Cras nec nisi ut leo feugiat viverra.",
      "Suspendisse potenti. Aliquam erat volutpat.",
      "Phasellus eget justo molestie, viverra ipsum at, egestas nisl.",
      "Aenean eu justo sed elit tincidunt bibendum.",
      "Mauris rhoncus orci in imperdiet tincidunt.",
    ];
    let paragraph = "";
    for (let i = 0; i < numLines; i++) {
      const randomIndex = Math.floor(
        Math.random() * loremIpsumSentences.length
      );
      paragraph += loremIpsumSentences[randomIndex] + " ";
    }
    return paragraph.trim();
  }

  for (let i = 0; i < numberOfInstances; i++) {
    const randomSlug = i;
    const randomTitle = generateLoremIpsum(1);
    const randomImage = Math.random().toString(36).substring(2, 15);
    const randomPost = generateLoremIpsum(numberOfIpsum);

    randomArray.push({
      title: randomTitle,
      slug: randomSlug,
      image: randomImage,
      post: randomPost,
      description: `Page Description of ${randomTitle}`,
      keywords: [
        "astro",
        "astro.js",
        "astro-js",
        "astro-css",
        "tailwindcss",
        "starter",
        "starter-template",
        "blog",
        "template",
      ],
    });
  }

  return randomArray;
};

export const pages = generatePages(1000, 1000);
