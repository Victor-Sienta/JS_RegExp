function Check(str)
{
let re = /^((http:)|(https:)).+((.com)|(.ru))$/;
let flag=re.test(str);
return flag;
}

let str=prompt("Введите URL");
if (Check(str))
    alert("URL введен правильно");
else
    alert("URL введен неправильно");