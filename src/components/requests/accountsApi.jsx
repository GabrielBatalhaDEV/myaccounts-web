

const url = "http://192.168.0.10:3100/accounts/"
async function fetchAccounts(title=null){
    if(title){
        return await fetch(`${url}title/${title}`)
    }
    return await fetch(`${url}`)
}

async function fetchAccountById(id = null){
    if(id){
        return await fetch(url+id)
    }
}


async function saveAccount(account){

    await fetch(url,
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...account})
      })
}

async function updateAccount(id,newAccount){
    await fetch(url+id,{
        method:"PUT",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...newAccount})

    })
}


async function deleteAccount(id=null){
    if(id){
        return await fetch(url+id,{method: 'DELETE'})
    }
}
export {fetchAccounts, deleteAccount, saveAccount, updateAccount, fetchAccountById}