
async function fetchAccounts(id=''){
    const data = await fetch(`http://localhost:3100/accounts/${id}`)
    return data.json()
}

export {fetchAccounts}