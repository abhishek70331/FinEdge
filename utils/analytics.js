const calculateSummary = (transactions) => {
    let totalIncome = 0
    let totalExpense = 0

    for(const tx of transactions){
        if(tx.type === 'income'){
            totalIncome += tx.amount
        }else if(tx.type === 'expense'){
            totalExpense += tx.amount
        }
    }

    return {
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense
    }
}

module.exports = {
    calculateSummary
}