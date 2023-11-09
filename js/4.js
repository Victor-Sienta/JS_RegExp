function Check(str)
        {
        let re = /^[A-Za-zА-Яа-я]{10,}$/;
        let flag=re.test(str);
        return flag;
        }

        let str=prompt("Введите строку");
        if (Check(str))
            alert("Строка введена правильно");
        else
            alert("Строка введена неправильно");