const getColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomHexCode = "#" + randomNum.toString(16);
    const red = (randomNum >> 16) & 255;
    const green = (randomNum >> 8) & 255;
    const blue = randomNum & 255;
    const randomRgbCode = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = randomHexCode;

    document.getElementById("rgb-color-code").innerText = randomHexCode;
    document.getElementById("hex-color-code").innerText = randomRgbCode;
};
getColor();
document.getElementById("btn").addEventListener("click", getColor);
