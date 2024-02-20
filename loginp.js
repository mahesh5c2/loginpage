function validate()
{
    let username=document.getElementById('UserName').value;
    let password=document.getElementById('Password').value;
    if(username=='MaheshRao' && password=='Mahesh@123')
    {
        alert('Login Successful');
        true;
    }else{
        alert('Login Failed');
        return false;
    }
}