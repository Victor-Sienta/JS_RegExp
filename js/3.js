function Check(str)
        {
        let re = /^[A-Za-zА-Яа-я0-9]+$/;
        let flag=re.test(str);
        return flag;
        }

        let str=prompt("Введите строку");
        if (Check(str))
            alert("Строка введена правильно");
        else
            alert("Строка введена неправильно");