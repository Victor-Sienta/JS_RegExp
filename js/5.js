function summNumWithLet(str)
        {
            let regexpLet = /[A-ZА-Я]/gi;
            let matchesLet = str.match(regexpLet);
            let regexpNum = /[0-9]/g;
            let matchesNum = str.match(regexpNum);
            return (matchesLet.length + matchesNum.length)
        }

        let str=prompt("Введите строку");
        alert(summNumWithLet(str))
