export function getRandomSequence(min = 100000000, max = 999999999) {
    return String( Math.floor( Math.random() * (max - min) + min ) )
}

export function getFirstDigit(firstNineNumbers) {
    const INITIAL_COUNTDOWN = 0;
    const sum = firstNineNumbers.reduce( (sum, number, index) => sum += Number(number) * (11 - (index + 1)), INITIAL_COUNTDOWN );
    const firstDigit = 11 - (sum % 11);

    return firstDigit > 9 ? 0 : firstDigit;
}

export function getSecondDigit(firstTenNumbers) {
    const INITIAL_COUNTDOWN = 0;
    const sum = firstTenNumbers.reduce( (sum, number, index) => sum += Number(number) * (11 - index), INITIAL_COUNTDOWN );
    const secondDigit = 11 - (sum % 11);

    return secondDigit > 9 ? 0 : secondDigit;
}

export function mask(value, pattern = "###.###.###-##") {
    let i = 0;
    const v = value.toString();

    return pattern.replace(/#/g, () => v[i++] || '');
}
