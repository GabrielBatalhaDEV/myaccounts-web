
async function fetchAccounts(title=null){
    if(title){
        return await fetch(`http://localhost:3100/accounts/title/${title}`)
    }
    return await fetch(`http://localhost:3100/accounts/`)
}

async function saveAccount(account){
    const {title, username, password, email} = account

    await fetch('http://localhost:3100/accounts/',
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, username, password, email})
      })
}


async function deleteAccount(id=null){
    if(id){
        return await fetch(`http://localhost:3100/accounts/${id}`,{method: 'DELETE'})
    }
}
export {fetchAccounts, deleteAccount}