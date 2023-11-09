function isPredl(str)
        {
        let re = /^\D*((\w)|(\$))$/;
        let flag=re.test(str);
        return flag;
        }

        let str=prompt("Введите имя переменной");
        if (isPredl(str))
            alert("Имя переменной введено правильно");
        else
            alert("Имя переменной введено неправильно");