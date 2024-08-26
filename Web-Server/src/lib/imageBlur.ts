export async function imageBlurFunction(image: string) {
    const imageBlur = await fetch("http://localhost:3000/" + image).then(
        async (res) => {
            return Buffer.from(await res.arrayBuffer()).toString("base64");
        }
    );
    return imageBlur;
}
