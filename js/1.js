function isPredl(str)
{
let re = /^((http:)|(https:)).+((.com)|(.ru))$/;
let flag=re.test(str);
return flag;
}

let str=prompt("Введите URL");
if (isPredl(str))
    alert("URL введен правильно");
else
    alert("URL введен неправильно");