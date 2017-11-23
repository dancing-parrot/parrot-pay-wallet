import BaseService from './baseService'

var transactionService = {
    getAllTransactions: () => {
        return BaseService.get('transactions/')
    },

    getNextTransactions: (url) => {
        return BaseService.getWithFullUrl(url);
    },

    sendMoney: (amount, recipient, note) => {
        var data = {
            amount,
            recipient,
            note,
        }
        return BaseService.post('transactions/transfer/', data)
    },

    sendMoneyWithData: (amount, recipient, metadata) => {
        var data = {
            amount,
            recipient,
            debit_metadata: JSON.stringify(metadata),
        }
        return BaseService.post('transactions/transfer/', data)
    },

    withdraw: (amount, reference) => {
        var data = {
            amount,
            reference,
        }
        return BaseService.post('transactions/debit/', data)
    },
}

export default transactionService
