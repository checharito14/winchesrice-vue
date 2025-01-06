export function getEspecUrl(name) {
    return new URL(`../assets/images/${name}.webp`, import.meta.url).href;
}
export function generateImagesUrls(category, count) {
    return Array.from(
        { length: count },
        (_, i) =>
            new URL(
                `../assets/images/galeria/${category}/${category}${i + 1}.webp`,
                import.meta.url
            ).href
    );
}
