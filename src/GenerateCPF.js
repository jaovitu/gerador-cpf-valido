import { getRandomSequence, getFirstDigit, getSecondDigit, mask } from "./utils";

export default class GenerateCPF {
    generate() {
        const partialCPF = Array.from(getRandomSequence());
        const firstDigit = getFirstDigit(partialCPF);
        const secondDigit = getSecondDigit([ ...partialCPF, firstDigit ]);

        const cpf = [ ...partialCPF, firstDigit, secondDigit ].join("");
        return mask(cpf);
    }
}
