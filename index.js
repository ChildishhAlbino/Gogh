// Gogh by Connor Williams. 2020
const rgbHex = require('hex-and-rgba')
const { rgbaToHex } = require('hex-and-rgba')


const gogh = (startingColour, endingColour, chunks) => {
    try {
        const colours = []
        const startColour = arrayToObject(rgbHex.hexToRgba(startingColour))
        const endColour = arrayToObject(rgbHex.hexToRgba(endingColour))
        const diff = arrayToObject([startColour.red - endColour.red, startColour.green - endColour.green, startColour.blue - endColour.blue])

        const incrementSize = arrayToObject([diff.red / (chunks - 1), diff.green / (chunks - 1), diff.blue / (chunks - 1)])
        for (i = 0; i < chunks; i++) {
            if (i == 0) {
                colours.push(rgbaToHex(startColour.red, startColour.green, startColour.blue))
            } else if (i == chunks - 1) {
                colours.push(rgbaToHex(endColour.red, endColour.green, endColour.blue))
            } else {
                const colour = arrayToObject([startColour.red - (incrementSize.red * i), startColour.green - (incrementSize.green * i), startColour.blue - (incrementSize.blue * i)])
                colours.push(rgbaToHex(Math.round(colour.red), Math.round(colour.green), Math.round(colour.blue)))
            }
        }
        return colours
    } catch (err) {
        console.log(err)
    }
}

const arrayToObject = list => {
    return {
        red: list[0],
        green: list[1],
        blue: list[2]
    }
}


module.exports.gogh = gogh