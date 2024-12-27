function lemonadeChange(bills: number[]): boolean {
    let tenPage: number = 0;
    let fivePage: number = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fivePage++;
        } else if (bills[i] === 10) {
            if (fivePage <= 0) {
                return false;
            }
            fivePage--;
            tenPage++;
        } else if (bills[i] === 20) {
            if (tenPage > 0 && fivePage > 0) {
                tenPage--;
                fivePage--;
            } else if (fivePage >= 3) {
                fivePage -= 3;
            } else {
                return false;
            }
        }
    }


    return true;
};