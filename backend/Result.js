let data;
module.exports = class Result {

    constructor(ans) {
        this.ans = ans;
    }
    save() {
        data = this;
    }
    static getAns() {
        const textdata = []
        const FirstL = []
        const lowercasedata = data.ans.toLowerCase()
        const rawdata = lowercasedata.split("\n")
        rawdata.forEach(element => {
            const rawword = element.split(" ")
            rawword.forEach(word => {
                const str = word.replace(/[^a-zA-Z]/g, '')
                if (str) {
                    textdata.push(str)
                }
            });
        });

        textdata.forEach(word => {
            let temp = word[0]
            for (let i = 0; i <= word.length-1; i++) {
                for (let j = i+1; j <= word.length-1; j++) {
                    if(temp == word[j]) {
                        for (let k = i+1; k <= word.length-1; k++) {
                            if(word[i]!= word[k]){
                                temp = word[k]
                                break
                            }
                        }
                        break
                    }
                }
                
            }
            FirstL.push(temp)
        });
        console.log(FirstL)

        let UniqueL = FirstL[0]
        for (let i = 0; i <= FirstL.length-1; i++) {
            for (let j = i+1; j <= FirstL.length-1; j++) {
                if(UniqueL == FirstL[j]) {
                    UniqueL = FirstL[i+1]
                    break
                }
            }
        }
        console.log("Unique letter: "+ UniqueL)
        return UniqueL;
    }
}